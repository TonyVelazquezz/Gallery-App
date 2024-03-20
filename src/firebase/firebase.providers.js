import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { firebaseApp, firebaseAuth } from './firebase.config';

const googleProvider = new GoogleAuthProvider(firebaseApp);

export const loginWithGoogle = async () => {
	try {
		const res = await signInWithPopup(firebaseAuth, googleProvider);
		const { displayName, email, photoURL, uid } = res.user;

		return {
			displayName,
			email,
			photoURL,
			uid,
			status: true,
		};
	} catch (error) {
		const { code, message } = error;

		return {
			code,
			errorMessage: message,
			status: false,
		};
	}
};

export const registerUserWithEmailAndPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const res = await createUserWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		const { uid, photoURL } = res.user;

		await updateProfile(firebaseAuth.currentUser, { displayName });

		return {
			uid,
			displayName,
			email,
			photoURL,
			status: true,
		};
	} catch (error) {
		const { code, message } = error;

		return {
			code,
			errorMessage: message,
			status: false,
		};
	}
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
	try {
		const res = await signInWithEmailAndPassword(firebaseAuth, email, password);

		const { uid, displayName, photoURL } = res.user;

		return {
			uid,
			displayName,
			photoURL,
			status: true,
		};
	} catch (error) {
		const { code, message } = error;

		return {
			code,
			errorMessage: message,
			status: false,
		};
	}
};

export const logoutFirebase = async () => {
	return await firebaseAuth.signOut();
};

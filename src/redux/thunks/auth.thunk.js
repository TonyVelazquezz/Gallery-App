import {
	loginWithEmailAndPassword,
	loginWithGoogle,
	logoutFirebase,
	registerUserWithEmailAndPassword,
} from '../../firebase/firebase.providers';
import { checkingCredentials, login, logout } from '../slices/auth.slice';

export const checkingAuthentication = () => {
	return async dispatch => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const res = await loginWithGoogle();

		if (!res.status) return dispatch(logout(res.errorMessage));

		dispatch(login(res));
	};
};

export const startCreateUserWithEmailAndPassword = ({ displayName, email, password }) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const { status, uid, photoURL, errorMessage } = await registerUserWithEmailAndPassword({
			displayName,
			email,
			password,
		});

		if (!status) return dispatch(logout({ errorMessage }));

		dispatch(login({ uid, displayName, email, photoURL }));
	};
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const res = await loginWithEmailAndPassword({ email, password });

		if (!res.status) return dispatch(logout(res));

		dispatch(login(res));
	};
};

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase();

		dispatch(logout());
	};
};

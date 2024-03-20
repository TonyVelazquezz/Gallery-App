import { useMemo, useState } from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import useForm from '../../hooks/useForm';
import loginBg from '../../assets/loginBg.svg';
import { startCreateUserWithEmailAndPassword } from '../../redux/thunks/auth.thunk';
import FormRegister from '../../components/custom/FormRegister';

const formData = {
	displayName: '',
	email: '',
	password: '',
	password2: '',
};

const formValidations = form => {
	let errors = {};
	const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

	if (!form?.displayName.trim().length > 1) {
		errors.displayName = 'Name is required';
	} else if (!regex.test(form.displayName.trim())) {
		errors.displayName = 'Name only allows letters and spaces';
	}

	if (!form.email.trim()) {
		errors.email = 'Email is required';
	} else if (!validator.isEmail(form.email)) {
		errors.email = 'Email is not valid';
	}

	if (!form.password.trim()) {
		errors.password = 'Password is required';
	} else if (form.password.trim() !== form.password2.trim() || form.password.length < 6) {
		errors.password = 'Password should be at least 6 characters and match each other';
	}

	if (!form.password2.trim()) {
		errors.password2 = 'Confirm password is required';
	}

	return errors;
};

export const RegisterPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector(state => state.auth);
	const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

	const {
		email,
		errors,
		formState,
		isFormValid,
		displayName,
		password,
		password2,
		handleBlur,
		handleInputChange,
	} = useForm(formData, formValidations);

	const handleSubmit = e => {
		e.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startCreateUserWithEmailAndPassword(formState));
	};

	return (
		<div className="h-screen overflow-auto w-full">
			<img
				src={loginBg}
				alt="login-bg"
				className="absolute h-full object-cover object-center overflow-auto w-full z-[-1]"
			/>
			<FormRegister
				displayName={displayName}
				email={email}
				formSubmitted={formSubmitted}
				isCheckingAuthentication={isCheckingAuthentication}
				password={password}
				password2={password2}
				errors={errors}
				errorMessage={errorMessage}
				handleInputChange={handleInputChange}
				handleBlur={handleBlur}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
};

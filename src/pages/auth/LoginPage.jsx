import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

// import FormLogin from '../../components/custom/FormLogin';
import { Link } from 'react-router-dom';
import loginForm from '../../assets/loginForm.jpg';
import { ImGooglePlus } from 'react-icons/im';
import loginBg from '../../assets/loginBg.svg';
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../redux/thunks/auth.thunk';
import useForm from '../../hooks/useForm';

const formData = {
	email: '',
	password: '',
};

const formValidations = form => {
	let errors = {};

	if (!form.email.trim()) {
		errors.email = 'Email is required';
	} else if (!validator.isEmail(form.email)) {
		errors.email = 'Email is not valid';
	}

	if (!form.password.trim()) {
		errors.password = 'Password is required';
	} else if (form.password.length < 6) {
		errors.password = 'Password should be at least 6 characters and match each other';
	}

	return errors;
};

export const LoginPage = () => {
	const { status, errorMessage } = useSelector(state => state.auth);
	const isAuthenticating = useMemo(() => status === 'checking', [status]);
	const dispatch = useDispatch();

	const { email, errors, password, handleBlur, handleInputChange } = useForm(
		formData,
		formValidations
	);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(
			startLoginWithEmailAndPassword({
				email,
				password,
			})
		);
	};

	const handleGoogleLogin = () => {
		dispatch(startGoogleSignIn());
	};

	console.log(email);

	return (
		<div className="h-screen relative w-full">
			<img
				src={loginBg}
				alt="login-bg"
				className="absolute h-full object-cover object-center overflow-auto w-full z-[-1]"
			/>

			<div className="flex items-center justify-center h-screen w-full ">
				<div className="flex h-2/3 md:w-2/3 w-11/12">
					<div className="relative w-1/2">
						<img
							src={loginForm}
							alt="login-form-img"
							className="absolute object-cover object-left h-full"
						/>

						<button
							disabled={isAuthenticating}
							onClick={handleGoogleLogin}
							className={
								!isAuthenticating
									? 'btn_google absolute bottom-24 left-[47.5%]'
									: 'btn_google_disabled absolute bottom-24 left-[47.5%]'
							}
						>
							<ImGooglePlus className="text-red-500" size={25} />
						</button>

						<h3 className="absolute bottom-10 left-0 text-center text-white w-full">
							Dont have account?
						</h3>

						<Link
							to="/auth/register"
							className="absolute bottom-5 duration-300 font-bold hover:text-main_violet left-0 text-center ease-in underline text-white w-full"
						>
							Sign Up
						</Link>
					</div>

					<div className="bg-white flex flex-wrap items-center justify-center p-3 overflow-y-auto rounded-sm shadow w-1/2">
						<div className="flex flex-wrap justify-content w-full">
							<h2 className="text-3xl text-center pb-5 w-full">Welcome to Gallery App</h2>
							<p className="font-bold py-5 text-center mx-auto lg:w-1/2 w-full">
								Enter with your Gallery App account
							</p>
						</div>

						<form onSubmit={handleSubmit} className="flex flex-wrap justify-center w-full gap-4">
							<div className="flex flex-col items-center justify-center flex-wrap relative w-full">
								<input
									type="text"
									placeholder="Email"
									name="email"
									className={`bg-gray-200 rounded-sm px-3 py-1.5 shadow sm:w-3/4 w-full ${
										errors.email ? 'outline-red' : 'outline-none'
									}`}
									autoComplete="off"
									value={email}
									onChange={handleInputChange}
									onBlur={handleBlur}
								/>

								{errors?.email && (
									<span className="absolute top-[100%]  text-red-700 text-xs">{errors.email}</span>
								)}
							</div>

							<div className="flex flex-col flex-wrap items-center justify-center mb-4 relative w-full">
								<input
									type="password"
									placeholder="Password"
									name="password"
									className={`bg-gray-200 rounded-sm px-3 py-1.5 shadow sm:w-3/4 w-full ${
										errors.password ? 'outline-red' : 'outline-none'
									}`}
									value={password}
									onBlur={handleBlur}
									onChange={handleInputChange}
								/>

								{errors?.password && (
									<span className="absolute top-[100%]  text-red-700 text-xs">{errors.password}</span>
								)}
							</div>

							{!!errorMessage && (
								<div className="bg-red-200 my-3 p-1 text-red-800 text-center rounded-sm text-sm sm:w-3/4 w-full">
									{errorMessage}
								</div>
							)}

							<button
								disabled={isAuthenticating}
								type="submit"
								className={!isAuthenticating ? 'btn sm:w-3/4 w-full' : 'btn_disabled sm:w-3/4 w-full'}
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

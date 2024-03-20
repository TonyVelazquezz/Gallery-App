import loginForm from '../../assets/loginForm.jpg';

const FormRegister = ({
	displayName,
	email,
	errors,
	errorMessage,
	isCheckingAuthentication,
	password,
	password2,
	handleInputChange,
	handleBlur,
	handleSubmit,
}) => {
	return (
		<div className="flex items-center justify-center my-2 h-full w-full ">
			<div className="flex justify-end items-center relative sm:w-2/3 w-[95%]">
				<img
					src={loginForm}
					alt="login-form-img"
					className="absolute object-cover h-full w-full z-[-1]"
				/>

				<div className="bg-white flex flex-wrap p-3 shadow md:w-1/2 w-9/12">
					<div className="flex flex-wrap justify-content w-full">
						<h2 className="text-3xl text-center pb-5 w-full">Sing Up</h2>
						<p className="font-bold pb-5 text-center mx-auto lg:w-1/2 w-full">
							Create your account, it's free and only takes a minutes
						</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className="flex flex-wrap justify-center w-full gap-4"
					>
						<div className="flex flex-col items-center justify-center flex-wrap relative w-full">
							<input
								type="text"
								placeholder="Name"
								name="displayName"
								className={`bg-gray-200 rounded-sm px-3 py-1.5 shadow sm:w-3/4 w-full ${
									errors.displayName ? 'outline-red' : 'outline-none'
								}`}
								autoComplete="off"
								value={displayName}
								onChange={handleInputChange}
								onBlur={handleBlur}
							/>

							{errors?.displayName && (
								<span className="absolute top-[100%]  text-red-700 text-xs">
									{errors.displayName}
								</span>
							)}
						</div>

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
								<span className="absolute top-[100%]  text-red-700 text-xs">
									{errors.email}
								</span>
							)}
						</div>

						<div className="flex flex-col items-center justify-center flex-wrap relative w-full">
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
								<span className="absolute top-[100%]  text-red-700 text-xs">
									{errors.password}
								</span>
							)}
						</div>

						<div className="flex flex-col items-center justify-center flex-wrap relative w-full mb-4">
							<input
								type="password"
								placeholder="Confirm password"
								name="password2"
								className="bg-gray-200  rounded-sm outline-none px-3 py-1.5 shadow sm:w-3/4 w-full"
								value={password2}
								onBlur={handleBlur}
								onChange={handleInputChange}
							/>

							{errors?.password2 && (
								<span className="absolute top-[100%]  text-red-700 text-xs">
									{errors.password2}
								</span>
							)}
						</div>

						{!!errorMessage && (
							<div className="bg-red-200 p-1 text-red-800 text-center rounded-sm text-sm sm:w-3/4 w-full">
								{errorMessage}
							</div>
						)}

						<button
							disabled={isCheckingAuthentication}
							type="submit"
							className={
								!isCheckingAuthentication
									? 'btn sm:w-3/4 w-full'
									: 'btn_disabled sm:w-3/4 w-full'
							}
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormRegister;

import { useMemo, useState } from 'react';
const useForm = (initialForm = {}, validateForm) => {
	const [formState, setFormState] = useState(initialForm);
	const [errors, setErrors] = useState({});

	const handleInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleBlur = e => {
		handleInputChange(e);
		setErrors(validateForm(formState));
	};

	const isFormValid = useMemo(() => {
		if (Object.keys(errors).length !== 0) return false;
		return true;
	}, [errors]);

	const handleResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		errors,
		isFormValid,
		handleInputChange,
		handleBlur,
		handleResetForm,
	};
};

export default useForm;

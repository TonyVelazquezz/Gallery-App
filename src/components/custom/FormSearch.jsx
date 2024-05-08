import { AiOutlineSearch } from 'react-icons/ai';
import useForm from '../../hooks/useForm';

const formData = {
	search: '',
};

const formValidations = form => {
	let errors = {};

	if (!form.search.trim() && form.search.length < 1) {
		errors.search = 'Enter a valid keyword';
	}
};

const FormSearch = ({ onNewCategory, placeholder }) => {
	const { search, handleInputChange, handleResetForm } = useForm(formData, formValidations);

	const handleSubmit = e => {
		e.preventDefault();
		if (search.trim().length < 1) return;
		handleResetForm();
		onNewCategory(search.trim());
	};

	return (
		<form className="m-auto mt-5 mb-5 relative lg:w-1/2 w-full" onSubmit={handleSubmit}>
			<input
				type="text"
				name="search"
				value={search}
				placeholder={placeholder}
				onChange={handleInputChange}
				className="px-3 py-3 outline-none border shadow search-input w-full"
			/>

			<button type="submit" className="btn_search absolute right-0 top-0">
				<AiOutlineSearch />
			</button>
		</form>
	);
};

export default FormSearch;

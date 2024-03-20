import { AiOutlineSearch } from 'react-icons/ai';

const FormSearch = ({ handleKeyword, handleSearchData, placeHolder }) => {
	return (
		<form className="m-auto mt-5 mb-5 relative lg:w-1/2 w-full" onSubmit={handleSearchData}>
			<input
				type="text"
				className="px-3 py-3 outline-none border shadow search-input w-full"
				placeholder={`${placeHolder}`}
				onChange={({ target }) => handleKeyword(target)}
			/>

			<button type="submit" className="btn_search absolute right-0 top-0">
				<AiOutlineSearch />
			</button>
		</form>
	);
};

export default FormSearch;

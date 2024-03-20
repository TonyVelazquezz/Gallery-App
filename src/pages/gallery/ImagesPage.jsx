import React, { useState } from 'react';
import FormSearch from '../../components/custom/FormSearch';
import ImageContainer from '../../components/imageContainer/ImageContainer';

const ImagesPage = () => {
	const [images, setImages] = useState('');
	const [data, setData] = useState(null);

	const handleKeyword = ({ value }) => setImages(value);

	const KEY = import.meta.env.VITE_API_KEY;
	const handleSearchData = async e => {
		e.preventDefault();
		const request = await fetch(`https://api.pexels.com/v1/search?query=${images}&per_page=15`, {
			headers: {
				Authorization: `${KEY}`,
			},
		});
		const response = await request.json();
		setData(response);
	};
	return (
		<div className="px-2 pb-5 w-full">
			<FormSearch
				handleKeyword={handleKeyword}
				handleSearchData={handleSearchData}
				placeHolder="Search image by keyboard"
			/>

			<ImageContainer data={data?.photos} title="Imágenes" />
		</div>
	);
};

export default ImagesPage;

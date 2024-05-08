import { useState } from 'react';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import FormSearch from '../../components/custom/FormSearch';

const ImagesPage = () => {
	const categories = ['nature', 'movies', 'animals', 'food', 'architecture', 'landscape'];
	const random = Math.floor(Math.random() * (categories.length - 1)) + 1;
	const query = categories[random];

	const [category, setCategory] = useState(`${query}`);

	return (
		<div className="px-2 pb-5 w-full">
			<FormSearch onNewCategory={setCategory} placeholder="Search Images by Keyboard" />

			<ImageContainer category={category} />
		</div>
	);
};
export default ImagesPage;

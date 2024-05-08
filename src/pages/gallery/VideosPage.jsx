import FormSearch from '../../components/custom/FormSearch';
import VideoContainer from '../../components/videos/VideoContainer';
import { useState } from 'react';

const VideosPage = () => {
	const categories = ['nature', 'movies', 'animals', 'food', 'architecture', 'landscape'];
	const random = Math.floor(Math.random() * (categories.length - 1)) + 1;
	const query = categories[random];

	const [category, setCategory] = useState(`${query}`);

	console.log(category);

	return (
		<div className="px-2 pb-5 w-full">
			<FormSearch onNewCategory={setCategory} placeholder="Search Videos by Keyboard" />

			<VideoContainer category={category} />
		</div>
	);
};

export default VideosPage;

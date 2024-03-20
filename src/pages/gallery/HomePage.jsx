import React, { useEffect, useState } from 'react';
import ImageContainer from '../../components/imageContainer/ImageContainer';

const HomePage = () => {
	//State
	const [data, setData] = useState([]);

	//Functions
	useEffect(() => {
		const KEY = import.meta.env.VITE_API_KEY;

		const query = ['nature', 'movies', 'animals', 'food', 'architecture', 'landscape'];
		const random = Math.floor(Math.random() * (query.length - 1)) + 1;
		const keyword = query[random];
		const handleFetchToken = async () => {
			const request = await fetch(`https://api.pexels.com/v1/search?query=${keyword}&per_page=30`, {
				headers: {
					Authorization: `${KEY}`,
				},
			});
			const result = await request.json();
			setData(result.photos);
		};
		handleFetchToken();
	}, []);

	return (
		<div className="pt-5 px-2 w-full">
			<ImageContainer
				data={data}
				title="Home"
				// handleFetchDataNextPage={handleFetchDataNextPage}
			/>
		</div>
	);
};

export default HomePage;

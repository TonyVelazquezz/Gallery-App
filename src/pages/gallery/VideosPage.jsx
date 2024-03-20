import { useState } from 'react';
import FormSearch from '../../components/custom/FormSearch';
import VideoContainer from '../../components/videos/VideoContainer';

const VideosPage = () => {
	const [videos, setVideos] = useState('');
	const [data, setData] = useState(null);

	const handleKeyword = ({ value }) => setVideos(value);

	const KEY = import.meta.env.VITE_API_KEY;

	const handleSearchData = async e => {
		e.preventDefault();
		const request = await fetch(`https://api.pexels.com/videos/search?query=${videos}&per_page=15`, {
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
				placeHolder="Search video by keyboard"
			/>

			<VideoContainer data={data?.videos} title="Videos" />
		</div>
	);
};

export default VideosPage;

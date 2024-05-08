import { useSelector } from 'react-redux';
import SingleVideo from './SingleVideo';
import './videoContainer.style.css';
import { useFetch } from '../../hooks/useFetch';

const VideoContainer = ({ category }) => {
	const KEY = import.meta.env.VITE_API_KEY;
	const { favData } = useSelector(store => store.favorites);

	const { data } = useFetch(
		`https://api.pexels.com/videos/search?query=${category}&per_page=15`,
		{
			headers: {
				Authorization: `${KEY}`,
			},
		},
		category
	);

	return (
		<>
			<div className="container">
				{data?.videos?.map(item => (
					<SingleVideo
						key={item.id}
						item={item}
						isFavData={favData.some(photo => photo.id === item.id)}
					/>
				))}
			</div>
		</>
	);
};

export default VideoContainer;

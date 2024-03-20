import { useSelector } from 'react-redux';
import SingleVideo from './SingleVideo';

import './videoContainer.style.css';

const VideoContainer = ({ data }) => {
	const { favData } = useSelector(store => store.favorites);
	return (
		<>
			<div className="container">
				{data?.map(item => (
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

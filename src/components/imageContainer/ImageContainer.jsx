import { useSelector } from 'react-redux';

import './imageContainer.style.css';
import SinglePhoto from './SinglePhoto';

const ImageContainer = ({ data }) => {
	const { favData } = useSelector(store => store.favorites);

	return (
		<>
			<div className="container">
				{data?.map(item => (
					<SinglePhoto
						key={item.id}
						item={item}
						isFavData={favData?.some(photo => photo?.id === item.id)}
					/>
				))}
			</div>
		</>
	);
};

export default ImageContainer;

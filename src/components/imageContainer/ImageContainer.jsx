import { useSelector } from 'react-redux';

import './imageContainer.style.css';
import SinglePhoto from './SinglePhoto';
import { useFetch } from '../../hooks/useFetch';

const ImageContainer = ({ category }) => {
	const KEY = import.meta.env.VITE_API_KEY;
	const { favData } = useSelector(store => store.favorites);

	const { data } = useFetch(
		`https://api.pexels.com/v1/search?query=${category}&per_page=15`,
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
				{data?.photos?.map(item => (
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

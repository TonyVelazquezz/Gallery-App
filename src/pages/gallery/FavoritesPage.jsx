import { useSelector } from 'react-redux';
import '../../components/imageContainer/imageContainer.style.css';
import SingleVideo from '../../components/videos/SingleVideo';
import SinglePhoto from '../../components/imageContainer/SinglePhoto';

const FavoritesPage = () => {
	const { favData } = useSelector(store => store.favorites);

	return (
		<div className="pt-5 px-2 pb-5 w-full">
			<div className="container">
				{favData?.map(favItem =>
					favItem?.video_files ? (
						<SingleVideo
							key={favItem?.id}
							item={favItem}
							isFavData={favData?.some(photo => photo?.id === favItem?.id)}
						/>
					) : (
						<SinglePhoto
							key={favItem?.id}
							item={favItem}
							isFavData={favData?.some(photo => photo?.id === favItem?.id)}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default FavoritesPage;

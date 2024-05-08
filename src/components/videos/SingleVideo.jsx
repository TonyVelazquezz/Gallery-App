import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import HoverVideoPlayer from 'react-hover-video-player';

import { addFavorites, removeFavorites } from '../../redux/slices/favorites.slice';
import './videoContainer.style.css';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';

const SingleVideo = ({ item, isFavData }) => {
	const dispatch = useDispatch();

	const [isOpenModal, openModal, closeModal] = useModal(false);

	const handleAddFavorites = item => {
		dispatch(addFavorites(item));
	};

	const handleRemoveFavorites = item => {
		dispatch(removeFavorites(item));
	};

	const handleModalContainerClick = e => e.stopPropagation();

	const filesQualitySD = item.video_files.filter(file => file.quality === 'sd');
	const filesQualityHD = item.video_files.filter(file => file.quality === 'hd');

	return (
		<>
			<Modal
				isOpen={isOpenModal}
				closeModal={closeModal}
				handleModalContainerClick={handleModalContainerClick}
			>
				<ReactPlayer
					url={filesQualityHD[0]?.link}
					controls
					width="100%"
					height="100%"
					playing={isOpenModal}
				/>
			</Modal>

			<div onClick={openModal} className="cursor-pointer relative w-full">
				<HoverVideoPlayer videoSrc={filesQualitySD[0]?.link} className="mb-2" />

				<div
					onClick={handleModalContainerClick}
					className="title_box absolute bg-transparent bottom-[0.75rem] flex justify-between py-2 w-full"
				>
					<a href={item?.user.url} target="_blank" className="top-2 pl-4 text-gray-200" rel="noreferrer">
						{item?.user.name}
					</a>

					{!isFavData ? (
						<AiOutlineHeart
							className="text-white mr-4 cursor-pointer"
							onClick={() => handleAddFavorites(item)}
						/>
					) : (
						<AiFillHeart
							className="text-main_violet mr-4 cursor-pointer"
							onClick={() => handleRemoveFavorites(item)}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default SingleVideo;

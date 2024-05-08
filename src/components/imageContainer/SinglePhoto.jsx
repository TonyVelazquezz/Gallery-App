import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import './imageContainer.style.css';

import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import { addFavorites, removeFavorites } from '../../redux/slices/favorites.slice';

const SinglePhoto = ({ item, isFavData }) => {
	const dispatch = useDispatch();

	const [isOpenModal, openModal, closeModal] = useModal(false);

	const handleAddFavorites = item => {
		dispatch(addFavorites(item));
	};

	const handleRemoveFavorites = item => {
		dispatch(removeFavorites(item));
	};

	const handleModalContainerClick = e => e.stopPropagation();

	return (
		<>
			<Modal
				isOpen={isOpenModal}
				closeModal={closeModal}
				handleModalContainerClick={handleModalContainerClick}
			>
				<img src={item?.src?.large} alt="single-img" className="w-full h-full" />
			</Modal>

			<div onClick={openModal} className="figure relative cursor-pointer">
				<img src={item?.src.medium} alt="preview" className="figure__img" />

				<div
					onClick={handleModalContainerClick}
					className="figure__box absolute bg-transparent bottom-0 flex justify-between py-2 w-full"
				>
					<a
						href={item?.photographer_url}
						target="_blank"
						className="top-2 pl-4 text-gray-200"
						rel="noreferrer"
					>
						{item?.photographer}
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

export default SinglePhoto;

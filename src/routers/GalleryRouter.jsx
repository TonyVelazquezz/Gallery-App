import { Routes, Route, Navigate } from 'react-router-dom';
//Header
import Header from '../components/Header';
//Pages
import ImagesPage from '../pages/gallery/ImagesPage';
import VideosPage from '../pages/gallery/VideosPage';
import FavoritesPage from '../pages/gallery/FavoritesPage';

export const GalleryRouter = () => {
	return (
		<div className="bg-gray-200 object-cover h-screen overflow-auto">
			<Header />

			<Routes>
				<Route path="/images" element={<ImagesPage />} />
				<Route path="/videos" element={<VideosPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />

				<Route path="/*" element={<Navigate to="/images" />} />
			</Routes>
		</div>
	);
};

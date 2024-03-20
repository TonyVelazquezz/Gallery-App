import { Navigate, Route, Routes } from 'react-router-dom';
import BarLoader from 'react-spinners/BarLoader';

import useCheckAuth from '../hooks/useCheckAuth';
import { AuthRouter } from './AuthRouter';
import { GalleryRouter } from './GalleryRouter';

export const AppRouter = () => {
	const status = useCheckAuth();

	if (status === 'checking') {
		return (
			<div className="flex items-center justify-center h-screen w-full">
				<BarLoader color={'#7b2cbf'} width={150} height={10} />
			</div>
		);
	}

	return (
		<Routes>
			{status === 'authenticated' ? (
				<Route path="/*" element={<GalleryRouter />} />
			) : (
				<Route path="/auth/*" element={<AuthRouter />} />
			)}

			<Route path="/*" element={<Navigate to="/auth/login" />} />
		</Routes>
	);
};

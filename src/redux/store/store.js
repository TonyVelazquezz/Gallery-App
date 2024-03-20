import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../slices/auth.slice';
import favoritesSlice from '../slices/favorites.slice';

const store = configureStore({
	reducer: {
		auth: authSlice,
		favorites: favoritesSlice,
	},
});

export default store;

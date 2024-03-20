import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_STATE = {
	favData: [],
};

// const initialState = (() => {
// 	const persistedState = localStorage.getItem('__redux__state__');
// 	if (persistedState) return JSON.parse(persistedState).favorites;
// 	return DEFAULT_STATE;
// })();

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: DEFAULT_STATE,
	reducers: {
		addFavorites: (state, { payload }) => {
			const index = state.favData.findIndex(item => item.id === payload.id);

			if (index === -1) {
				state.favData = [...state.favData, payload];
			}
		},

		removeFavorites: (state, { payload }) => {
			state.favData = state.favData.filter(item => item.id !== payload.id);
		},
	},
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;

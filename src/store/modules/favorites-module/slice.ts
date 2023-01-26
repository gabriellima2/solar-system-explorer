import { createSlice } from "@reduxjs/toolkit";

import { FAVORITES_SLICE_NAME } from "./constants/favorites-slice-name";
import type { SetInFavoriteAction, RemoveFromFavorite } from "./@types/Actions";
import type { FavoritesState } from "./@types/FavoritesState";

const initialState: FavoritesState = {
	planets: [],
};

export const favoritesSlice = createSlice({
	name: FAVORITES_SLICE_NAME,
	initialState,
	reducers: {
		setInFavorite: (state, { payload }: SetInFavoriteAction) => {
			const { key, item } = payload;
			state[key].push(item);
		},
		removeFromFavorite: (state, { payload }: RemoveFromFavorite) => {
			const { key, item } = payload;
			state[key].filter((i) => i !== item);
		},
	},
});

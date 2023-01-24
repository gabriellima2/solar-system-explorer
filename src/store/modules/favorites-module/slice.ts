import { createSlice } from "@reduxjs/toolkit";

import { FAVORITES_SLICE_NAME } from "./constants/favorites-slice-name";
import type { FavoritesState } from "./@types/FavoritesState";
import type { SetFavoriteAction } from "./@types/Actions";

const initialState: FavoritesState = {
	planets: [],
};

export const favoritesSlice = createSlice({
	name: FAVORITES_SLICE_NAME,
	initialState,
	reducers: {
		setFavorite: (state, action: SetFavoriteAction) => {
			state.planets.push(action.payload.item);
		},
	},
});

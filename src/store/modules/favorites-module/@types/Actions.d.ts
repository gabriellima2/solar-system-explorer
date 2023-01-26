import type { PayloadAction } from "@reduxjs/toolkit";
import type { FavoritesState } from "./FavoritesState";

type Params = {
	key: keyof FavoritesState;
	item: string;
};

export type RemoveFromFavorite = PayloadAction<Params>;
export type SetInFavoriteAction = PayloadAction<Params>;

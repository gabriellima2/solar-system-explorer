import { PayloadAction } from "@reduxjs/toolkit";

type SetFavorite = {
	item: string;
};

export type SetFavoriteAction = PayloadAction<SetFavorite>;

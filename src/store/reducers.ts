import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
	favoritesReducer,
	FAVORITES_SLICE_NAME,
} from "./modules/favorites-module";

const favoritesPersistConfig = {
	key: FAVORITES_SLICE_NAME,
	storage: AsyncStorage,
	whitelist: ["planets"],
};

export const reducers = combineReducers({
	favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

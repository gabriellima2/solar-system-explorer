import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import { reducers } from "./reducers";
import { FAVORITES_SLICE_NAME } from "./modules/favorites-module";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: [FAVORITES_SLICE_NAME],
};

export const persistedReducer = persistReducer(persistConfig, reducers);

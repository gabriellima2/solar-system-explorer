import { useDispatch } from "react-redux";
import {
	setInFavorite,
	removeFromFavorite,
	useFavoriteSelect,
} from "@store/modules/favorites-module";
import type { FavoritesState } from "@store/modules/favorites-module/@types/FavoritesState";

type UseFavoriteReturn = {
	items: string[];
	handlePressFavorite: (id: string) => void;
};

export function useFavorite(key: keyof FavoritesState): UseFavoriteReturn {
	const dispatch = useDispatch();
	const favorites = useFavoriteSelect();

	const checkIfAlreadyFavorite = (id: string) => {
		return favorites[key].find((item) => item === id);
	};

	const handlePressFavorite = (id: string) => {
		const alreadyFavorite = checkIfAlreadyFavorite(id);
		if (alreadyFavorite) {
			dispatch(removeFromFavorite({ key, item: id }));
			return;
		}

		dispatch(setInFavorite({ key, item: id }));
	};

	return {
		items: favorites[key],
		handlePressFavorite,
	};
}

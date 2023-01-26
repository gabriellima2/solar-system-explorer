import { useDispatch } from "react-redux";
import {
	setInFavorite,
	removeFromFavorite,
	useFavoriteSelect,
} from "@store/modules/favorites-module";
import type { FavoritesState } from "@store/modules/favorites-module/@types/FavoritesState";

type UseFavoriteReturn = {
	items: string[];
	isFavorite: boolean;
	handleFavorite: (id: string) => void;
};

export function useFavorite(
	key: keyof FavoritesState,
	id: string
): UseFavoriteReturn {
	const dispatch = useDispatch();
	const favorites = useFavoriteSelect();

	const checkIfAlreadyFavorite = (itemID: string) => {
		return !!favorites[key].find((item) => item === itemID);
	};

	const handleFavorite = () => {
		const alreadyFavorite = checkIfAlreadyFavorite(id);
		if (alreadyFavorite) {
			dispatch(removeFromFavorite({ key, item: id }));
			return;
		}

		dispatch(setInFavorite({ key, item: id }));
	};

	return {
		items: favorites[key],
		isFavorite: checkIfAlreadyFavorite(id),
		handleFavorite,
	};
}

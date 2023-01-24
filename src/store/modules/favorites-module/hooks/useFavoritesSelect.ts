import { useSelector } from "react-redux";
import { RootState } from "src/store";

export const useFavoriteSelect = () =>
	useSelector((state: RootState) => state.favorites);

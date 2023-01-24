import { useSelector } from "react-redux";
import { RootState } from "@store/index";

export const useFavoriteSelect = () =>
	useSelector((state: RootState) => state.favorites);

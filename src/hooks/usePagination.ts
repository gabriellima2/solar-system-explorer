import { useState, useEffect } from "react";

type UsePaginationReturn = {
	currentPage: number;
	incrementCurrentPage: () => void;
	decrementCurrentPage: () => void;
	resetCurrentPage: () => void;
};

export function usePagination(): UsePaginationReturn {
	const [currentPage, setCurrentPage] = useState(1);

	const incrementCurrentPage = () =>
		setCurrentPage((prevState) => (prevState += 1));

	const decrementCurrentPage = () =>
		setCurrentPage((prevState) => (prevState -= 1));

	const resetCurrentPage = () => setCurrentPage(1);

	useEffect(() => {
		return () => resetCurrentPage();
	}, []);

	return {
		currentPage,
		incrementCurrentPage,
		decrementCurrentPage,
		resetCurrentPage,
	};
}

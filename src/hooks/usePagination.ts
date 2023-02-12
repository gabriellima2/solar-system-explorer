import { useState, useEffect } from "react";

type UsePaginationReturn = {
	currentPage: number;
	incrementCurrentPage: () => void;
	decrementCurrentPage: () => void;
};

export function usePagination(): UsePaginationReturn {
	const [currentPage, setCurrentPage] = useState(1);

	const incrementCurrentPage = () =>
		setCurrentPage((prevState) => (prevState += 1));

	const decrementCurrentPage = () =>
		setCurrentPage((prevState) => (prevState -= 1));

	useEffect(() => {
		return () => setCurrentPage(0);
	}, []);

	return {
		currentPage,
		incrementCurrentPage,
		decrementCurrentPage,
	};
}

import { useEffect } from "react";
import { useQuery } from "react-query";

import { usePagination } from "@hooks/usePagination";
import { planetDetailsServices } from "@infra/services/planet-details-services";

import type { IPlanetDetailsImagesResponse } from "@protocols/planet-details-protocols";
import type { QueryDefaultReturn } from "../@types/QueryDefaultReturn";
import type { IPlanetImages } from "../@types/IPlanetImages";

type UseImagesQueryReturn = QueryDefaultReturn & {
	images: IPlanetImages | undefined;
	loadMoreImages: () => void;
};

export function useImagesQuery(id: string): UseImagesQueryReturn {
	const { currentPage, incrementCurrentPage, resetCurrentPage } =
		usePagination();
	const { data, error, isError, isLoading } =
		useQuery<IPlanetDetailsImagesResponse>(
			["images", currentPage, id],
			() => planetDetailsServices.getImages(id, currentPage.toString()),
			{
				keepPreviousData: true,
				refetchOnWindowFocus: false,
				refetchOnMount: false,
			}
		);

	useEffect(() => {
		resetCurrentPage();
	}, [id]);

	return {
		images: data,
		error: error as string,
		isError,
		isLoading,
		loadMoreImages: incrementCurrentPage,
	};
}

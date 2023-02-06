import { OVERVIEW_API_URL, IMAGES_API_URL } from "./constants/api-url";
import type {
	IPlanetDetailsImagesResponse,
	IPlanetDetailsOverviewResponse,
} from "@protocols/planet-details-protocols";

export const planetDetailsServices = {
	getOverview: async (id: string): Promise<IPlanetDetailsOverviewResponse> => {
		const response = await fetch(`${OVERVIEW_API_URL}${id}`);
		if (!response.ok) throw new Error("Network response was not ok");
		const data: IPlanetDetailsOverviewResponse = await response.json();
		return data;
	},
	getImages: async (id: string, page: string) => {
		const response = await fetch(
			`${IMAGES_API_URL}search?q=${id}&media_type=image&page=${page}`
		);
		if (!response.ok) throw new Error("Network response was not ok");
		const data: IPlanetDetailsImagesResponse = await response.json();
		return data;
	},
};

import { OVERVIEW_API_URL } from "./constants/overview-api-url";
import type { IPlanetDetailsOverviewResponse } from "@protocols/planet-details-protocols";

export const planetDetailsServices = {
	getOverview: async (id: string): Promise<IPlanetDetailsOverviewResponse> => {
		const response = await fetch(`${OVERVIEW_API_URL}${id}`);
		if (!response.ok) throw new Error("Network response was not ok");
		const data: IPlanetDetailsOverviewResponse = await response.json();
		return data;
	},
};

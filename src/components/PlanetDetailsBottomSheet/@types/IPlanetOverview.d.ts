import type { IPlanetDetailsOverviewResponse } from "@protocols/planet-details-protocols";
import type { IPlanet } from "@interfaces/IPlanets";

export interface IPlanetOverview
	extends Pick<IPlanet, "name_portuguese" | "description">,
		IPlanetDetailsOverviewResponse {}

import type { IPlanetImageItem } from "@interfaces/IPlanetImageItem";

export interface IPlanetDetailsOverviewResponse {
	moons: { moon: string }[] | null;
	density: number;
	gravity: number;
	mass: {
		massValue: number;
	};
	sideralOrbit: number;
	sideralRotation: number;
}

export interface IPlanetDetailsImagesResponse {
	collection: {
		items: IPlanetImageItem[];
	};
}

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

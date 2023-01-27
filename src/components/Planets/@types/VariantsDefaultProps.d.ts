import type { IPlanet } from "@interfaces/IPlanets";

export type VariantsDefaultProps = {
	keyExtractor: (params: IPlanet) => string;
	planets: IPlanet[];
};

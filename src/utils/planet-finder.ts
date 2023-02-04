import planets from "@mocks/planets.json";
import type { IPlanet } from "@interfaces/IPlanets";

export function planetFinder(key: keyof IPlanet, value: string) {
	return planets.find((planet) => planet[key] === value);
}

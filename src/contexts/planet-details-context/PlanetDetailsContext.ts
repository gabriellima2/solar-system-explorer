import { createContext } from "react";
import type { PlanetDetailsContextDefaultValue } from "./@types/PlanetDetailsContextDefaultValue";

export const PlanetDetailsContext = createContext(
	{} as PlanetDetailsContextDefaultValue
);

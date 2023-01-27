import { useCallback } from "react";

import { VerticaListVariant, CarouselVariant } from "./components";

import mockPlanets from "@mocks/planets.json";
import type { IPlanet } from "@interfaces/IPlanets";

type PlanetsProps = {
	planets: IPlanet[];
	variants?: "carousel" | "verticalList";
};

export const Planets = (props: PlanetsProps) => {
	const { variants, planets } = props;

	const keyExtractor = useCallback(
		({ name_english }: IPlanet) => name_english,
		[]
	);

	if (variants === "verticalList")
		return <VerticaListVariant planets={planets} keyExtractor={keyExtractor} />;

	return <CarouselVariant planets={planets} keyExtractor={keyExtractor} />;
};

const defaultProps: Pick<PlanetsProps, "variants" | "planets"> = {
	variants: "carousel",
	planets: mockPlanets,
};

Planets.defaultProps = defaultProps;

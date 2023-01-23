import { useCallback } from "react";
import { type ListRenderItemInfo } from "react-native";

import { NavigationButton, Planet } from "./components";
import { Carousel } from "@components/Carousel";

import planets from "@mocks/planets.json";
import type { IPlanet } from "@interfaces/IPlanets";

export const Planets = () => {
	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<IPlanet>) => <Planet {...item} />,
		[]
	);

	const keyExtractor = useCallback(
		({ name_english }: IPlanet) => name_english,
		[]
	);

	return (
		<Carousel<IPlanet>
			data={planets as IPlanet[]}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			NavigationListProps={{
				Navigation: NavigationButton,
				mx: {
					base: "14px",
					md: "0px",
				},
				mt: [-3, 1],
				alignSelf: {
					base: "flex-start",
					md: "center",
				},
			}}
			viewabilityConfig={{ viewAreaCoveragePercentThreshold: 95 }}
			w="100%"
		/>
	);
};

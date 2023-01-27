import { useCallback } from "react";
import { type ListRenderItemInfo } from "react-native";

import { NavigationButton } from "../NavigationButton";
import { Carousel } from "@components/Carousel";
import { Item } from "./Item";

import type { VariantsDefaultProps } from "../../@types/VariantsDefaultProps";
import type { IPlanet } from "@interfaces/IPlanets";

type CarouselVariantProps = VariantsDefaultProps;

export const CarouselVariant = (props: CarouselVariantProps) => {
	const { planets, keyExtractor } = props;

	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<IPlanet>) => <Item {...item} />,
		[]
	);
	return (
		<Carousel<IPlanet>
			data={planets}
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

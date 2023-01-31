import { useCallback } from "react";
import { FlatList } from "native-base";
import { type ListRenderItemInfo } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { Item } from "./Item";

import { getDefaultSpacing } from "@utils/get-default-spacing";
import { windowDimensions } from "@utils/window-dimensions";
import type { VariantsDefaultProps } from "../../@types/VariantsDefaultProps";
import type { IPlanet } from "@interfaces/IPlanets";

type VerticaListVariantProps = VariantsDefaultProps;

const { width } = windowDimensions();

export const VerticaListVariant = (props: VerticaListVariantProps) => {
	const { planets, keyExtractor } = props;
	const bottomTabBarHeight = useBottomTabBarHeight();

	const renderItem = useCallback(
		({ item, index }: ListRenderItemInfo<IPlanet>) => (
			<Item {...item} variants={index % 2 === 0 ? "filled" : "outline"} />
		),
		[]
	);
	return (
		<FlatList<IPlanet>
			data={planets}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			contentContainerStyle={{ paddingBottom: bottomTabBarHeight + 16 }}
			numColumns={width >= 768 ? 2 : 1}
			pt={"4"}
			px={getDefaultSpacing().px}
			w="100%"
		/>
	);
};

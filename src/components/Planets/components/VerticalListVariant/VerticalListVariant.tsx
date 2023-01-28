import { useCallback } from "react";
import { FlatList } from "native-base";
import { type ListRenderItemInfo } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { Item } from "./Item";

import { getDefaultSpacing } from "@utils/get-default-spacing";
import type { VariantsDefaultProps } from "../../@types/VariantsDefaultProps";
import type { IPlanet } from "@interfaces/IPlanets";

type VerticaListVariantProps = VariantsDefaultProps;

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
			px={getDefaultSpacing().px}
			w="100%"
		/>
	);
};

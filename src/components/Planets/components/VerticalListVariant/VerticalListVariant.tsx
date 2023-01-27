import { useCallback } from "react";
import { FlatList } from "native-base";
import { type ListRenderItemInfo } from "react-native";

import { Item } from "./Item";

import type { IPlanet } from "@interfaces/IPlanets";
import type { VariantsDefaultProps } from "../../@types/VariantsDefaultProps";

type VerticaListVariantProps = VariantsDefaultProps;

export const VerticaListVariant = (props: VerticaListVariantProps) => {
	const { planets, keyExtractor } = props;

	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<IPlanet>) => <Item {...item} />,
		[]
	);
	return (
		<FlatList<IPlanet>
			data={planets}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			w="100%"
		/>
	);
};

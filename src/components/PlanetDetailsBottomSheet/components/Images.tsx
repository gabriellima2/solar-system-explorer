import { useCallback } from "react";
import { ListRenderItemInfo, ActivityIndicator } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Box, Image } from "native-base";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";
import { useImagesQuery } from "../hooks/useImagesQuery";

import { Error } from "@components/Error";
import { Text } from "@components/Text";

import type { IPlanetImageItem } from "@interfaces/IPlanetImageItem";

export const Images = () => {
	const { planetID } = usePlanetDetailsContext();
	const { images, error, isError, isLoading, loadMoreImages } = useImagesQuery(
		planetID!
	);

	const keyExtractor = useCallback(
		({ links }: IPlanetImageItem) => links[0].href,
		[]
	);

	const renderItem = useCallback(
		({ item }: ListRenderItemInfo<IPlanetImageItem>) => (
			<Image source={{ uri: item.links[0].href }} alt="" size="xl" />
		),
		[]
	);

	if (isLoading) return <ActivityIndicator />;

	if (isError) return <Error message={error || "Verifique sua conexão"} />;

	if (!images) return null;

	return (
		<Box>
			<Text.Heading>Imagens</Text.Heading>
			<BottomSheetFlatList<IPlanetImageItem>
				data={images.collection.items}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
				horizontal
				onEndReached={loadMoreImages}
				onEndReachedThreshold={0.4}
				ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
			/>
		</Box>
	);
};

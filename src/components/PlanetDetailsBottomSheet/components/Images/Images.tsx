import { useCallback } from "react";
import { ListRenderItemInfo, ActivityIndicator } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Image, VStack } from "native-base";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";
import { useImagesQuery } from "../../hooks/useImagesQuery";

import { Error } from "@components/Error";
import { Text } from "@components/Text";
import { Loading } from "./Loading";

import { DEFAULT_ERROR } from "../../constants/default-error";
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
		({ item, index }: ListRenderItemInfo<IPlanetImageItem>) => (
			<Image
				source={{ uri: item.links[0].href }}
				alt={`Image do ${index}`}
				w="32"
				h="32"
				mr="12px"
				rounded="md"
			/>
		),
		[]
	);

	if (isLoading) return <Loading />;

	if (isError) return <Error message={error || DEFAULT_ERROR} />;

	if (!images) return null;

	return (
		<VStack space="12px">
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
		</VStack>
	);
};

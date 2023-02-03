import { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Box, Center, Flex, Image } from "native-base";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";
import { useFavorite } from "@hooks/useFavorite";

import { FavoriteButton } from "@components/FavoriteButton";
import { Text } from "@components/Text";

import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";
import { windowDimensions } from "@utils/window-dimensions";
import type { IPlanet } from "@interfaces/IPlanets";

type ItemProps = IPlanet & {
	variants: "filled" | "outline";
};

const { width } = windowDimensions();

export const Item = (props: ItemProps) => {
	const { name_portuguese, name_english, description, image_url, variants } =
		props;

	const { handleExpand } = usePlanetDetailsContext();
	const { handleFavorite, isFavorite } = useFavorite("planets", name_english);

	const formattedName = useCallback(
		() => capitalizeFirstLetter(name_portuguese),
		[]
	);

	const isFilled = variants === "filled";
	const isOutline = variants === "outline";

	return (
		<TouchableOpacity
			onPress={() => handleExpand(name_english)}
			accessibilityLabel={`Ver mais informações sobre o planeta ${formattedName()}`}
			accessibilityHint="Se clicado, abrirá um modal com diversas informações"
			activeOpacity={0.8}
		>
			<Center
				flexDir="row"
				justifyContent="space-between"
				backgroundColor={isFilled ? "dark.800" : "transparent"}
				borderWidth="2"
				borderColor={isOutline ? "dark.800" : "transparent"}
				rounded="24px"
				p="4"
				h="128px"
				mb="20px"
			>
				<Center
					flex={1}
					flexDir="row"
					alignItems="center"
					justifyContent="flex-start"
					mr="3"
				>
					<Image
						source={{ uri: image_url }}
						alt={`Planeta ${formattedName()}`}
						w={width / 7}
						h={width / 7}
						resizeMode="contain"
					/>

					<Box ml="4" flex={1}>
						<Flex flexDir="row" alignItems="center" mb="1.5">
							<Text.Body fontSize="md" color="text.100" mr="2">
								Planeta
							</Text.Body>
							<Text.Heading fontSize="md">{formattedName()}</Text.Heading>
						</Flex>

						<Text.Body numberOfLines={2} fontSize="sm">
							{description}
						</Text.Body>
					</Box>
				</Center>
				<Center flexShrink={1}>
					<FavoriteButton
						isFavorite={isFavorite}
						elementID={name_english}
						handlePress={handleFavorite}
					/>
				</Center>
			</Center>
		</TouchableOpacity>
	);
};

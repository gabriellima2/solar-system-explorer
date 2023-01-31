import { useCallback } from "react";
import { Box, Center, Flex, Image } from "native-base";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useFavorite } from "@hooks/useFavorite";

import { FavoriteButton } from "@components/FavoriteButton";
import { InfoButton } from "../InfoButton";
import { Text } from "@components/Text";

import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";
import { getDefaultSpacing } from "@utils/get-default-spacing";
import { windowDimensions } from "@utils/window-dimensions";
import type { IPlanet } from "@interfaces/IPlanets";

const { width } = windowDimensions();

export const Item = (props: IPlanet) => {
	const { name_portuguese, name_english, description, image_url } = props;

	const { handleFavorite, isFavorite } = useFavorite("planets", name_english);
	const bottomTabBarHeight = useBottomTabBarHeight();

	const formattedName = useCallback(
		() => capitalizeFirstLetter(name_portuguese),
		[]
	);

	return (
		<Flex
			w={width}
			h="full"
			alignItems="center"
			justifyContent="space-between"
			px={getDefaultSpacing().px}
			pt={getDefaultSpacing().pt}
			pb={bottomTabBarHeight * 2.2}
		>
			<Flex flex={1} alignItems="center" justifyContent="center">
				<Image
					source={{ uri: image_url }}
					alt={`Planeta ${formattedName()}`}
					w={width / 1.3}
					h={width / 1.3}
					resizeMode="contain"
				/>
			</Flex>

			<Flex
				w="full"
				alignItems="flex-start"
				justifyContent="space-between"
				flexDir="row"
			>
				<Box>
					<Flex flexDir="row" alignItems="center" mb={2}>
						<Text.Body
							fontSize={{ base: "xl" }}
							color="text.100"
							mr={{ base: 2 }}
						>
							Planeta
						</Text.Body>
						<Text.Heading fontSize={{ base: "xl" }}>
							{formattedName()}
						</Text.Heading>
					</Flex>
					<Text.Body
						fontSize="sm"
						w={{ base: "300px", md: width / 2 }}
						numberOfLines={3}
					>
						{description}
					</Text.Body>
				</Box>
				<Center>
					<FavoriteButton
						isFavorite={isFavorite}
						elementID={name_english}
						handlePress={handleFavorite}
					/>
					<InfoButton elementID={name_english} />
				</Center>
			</Flex>
		</Flex>
	);
};

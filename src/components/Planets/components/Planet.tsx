import { memo } from "react";
import { Box, Center, Flex, Image } from "native-base";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { Text } from "@components/Text";
import { InfoButton } from "./InfoButton";
import { FavoriteButton } from "../../FavoriteButton";

import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";
import { getDefaultSpacing } from "@utils/get-default-spacing";
import { windowDimensions } from "@utils/window-dimensions";
import type { IPlanet } from "@interfaces/IPlanets";

const { width, height } = windowDimensions();

export const Planet = memo((props: IPlanet) => {
	const { name_portuguese, image_url, description, name_english } = props;
	const bottomTabBarHeight = useBottomTabBarHeight();
	const formattedName = capitalizeFirstLetter(name_portuguese);

	return (
		<Flex
			w={width}
			h="full"
			alignItems="center"
			justifyContent="space-evenly"
			px={getDefaultSpacing().px}
			py={getDefaultSpacing().py}
			pb={Number(bottomTabBarHeight.toFixed(0)) + 0}
		>
			<Flex
				w="full"
				h={{ base: height / 2.4, lg: "4/5" }}
				alignItems="center"
				justifyContent="center"
			>
				<Image
					source={{ uri: image_url }}
					alt={`Planeta ${formattedName}`}
					w="full"
					maxW="700px"
					maxH="700px"
					size="full"
					resizeMode="contain"
				/>
			</Flex>

			<Flex
				w="full"
				flexShrink={1}
				alignItems="flex-start"
				justifyContent="space-between"
				flexDir="row"
			>
				<Box>
					<Flex flexDir="row" alignItems="center" mb={2}>
						<Text.Body
							fontSize={{ base: "xl", md: "4xl" }}
							color="text.100"
							mr={{ base: 2, md: 3 }}
						>
							Planeta
						</Text.Body>
						<Text.Heading fontSize={{ base: "xl", md: "4xl" }}>
							{formattedName}
						</Text.Heading>
					</Flex>
					<Text.Body
						fontSize={["sm", "md", "lg"]}
						w={{ base: "300px", md: width / 2 }}
						numberOfLines={3}
					>
						{description}
					</Text.Body>
				</Box>
				<Center>
					<FavoriteButton
						elementID={name_english}
						handlePress={(id) => console.log(id)}
					/>
					<InfoButton elementID={name_english} />
				</Center>
			</Flex>
		</Flex>
	);
});

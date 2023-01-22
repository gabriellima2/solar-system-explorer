import { Box, Center, Flex, Image } from "native-base";

import { Text } from "@components/Text";
import { InfoButton } from "./InfoButton";
import { FavoriteButton } from "../../FavoriteButton";

import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";
import { getDefaultSpacing } from "@utils/get-default-spacing";
import { windowDimensions } from "@utils/window-dimensions";
import type { IPlanet } from "@interfaces/IPlanets";

const { width, height } = windowDimensions();

export const Planet = (props: IPlanet) => {
	const { name_portuguese, image_url, description, name_english } = props;
	const formattedName = capitalizeFirstLetter(name_portuguese);

	return (
		<Flex
			w={width}
			h="full"
			alignItems="center"
			justifyContent="space-evenly"
			px={getDefaultSpacing().px}
			py={getDefaultSpacing().py}
			pb={["105px", "105px", "40px"]}
		>
			<Flex w="full" alignItems="center" justifyContent="center" flex={1}>
				<Image
					source={{ uri: image_url }}
					alt={`Planeta ${formattedName}`}
					w={[width / 1.3, width / 1.5, width / 1.5]}
					h={[height / 1.3, height / 1.5, height / 1.5]}
					maxW="700px"
					maxH="700px"
					size="full"
					resizeMode="contain"
				/>
			</Flex>

			<Flex
				w="full"
				h={[height / 6, height / 6, "1/5"]}
				alignItems={["center", "flex-start", "center"]}
				justifyContent="space-between"
				flexDir="row"
			>
				<Box>
					<Flex flexDir="row" alignItems="center" mb={2}>
						<Text.Body
							fontSize={["xl", "xl", "4xl"]}
							color="text.100"
							mr={[2, 2, 3]}
						>
							Planeta
						</Text.Body>
						<Text.Heading fontSize={["xl", "xl", "4xl"]}>
							{formattedName}
						</Text.Heading>
					</Flex>
					<Text.Body
						fontSize={["sm", "md", "lg"]}
						w={["300px", "300px", width / 2]}
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
};

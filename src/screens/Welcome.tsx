import { Box, Flex } from "native-base";
import { ImageBackground } from "react-native";

import { StackRoutesLink } from "@components/StackRoutesLink";
import { Text } from "@components/Text";
import { Icon } from "@components/Icon";

import { Default } from "@layouts/Default";
import { getDefaultSpacing } from "@utils/get-default-spacing";

export const Welcome = () => {
	return (
		<Default hasDefaultSpacings={false}>
			<ImageBackground
				source={require("../../assets/welcome-background.jpg")}
				resizeMode="cover"
				style={{ flex: 1 }}
			>
				<Flex
					flex={1}
					justifyContent="space-between"
					pt="44px"
					px={getDefaultSpacing().px}
					pb={getDefaultSpacing().pb}
					pr={{ base: "12px", lg: "16px" }}
				>
					<Box>
						<Text.Heading
							fontSize={{ base: "2xl", lg: "3xl" }}
							maxW={200}
							mb="8px"
						>
							Explore o Sistema Solar
						</Text.Heading>
						<Text.Body fontSize={["sm", "md"]} w={[260, 290]}>
							Aprenda sobre os principais planetas do Sistema Solar
						</Text.Body>
					</Box>
					<StackRoutesLink routeName="Home" alignSelf="flex-end">
						<Icon name="chevron-forward" size={36} />
					</StackRoutesLink>
				</Flex>
			</ImageBackground>
		</Default>
	);
};

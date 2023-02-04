import { Box, Flex, Text as NBText } from "native-base";

import { Text } from "./Text";
import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";

type DefaultProps = Parameters<typeof NBText>[0] & {
	value: string;
};

type PlanetHeadingProps = {
	container?: Parameters<typeof Flex>[0];
	name: DefaultProps;
};

export const PlanetName = (props: PlanetHeadingProps) => {
	const { name, container } = props;

	return (
		<Box>
			<Flex flexDir="row" alignItems="center" mb={2} {...container}>
				<Text.Body {...name} color="text.100" mr={{ base: 2 }}>
					Planeta
				</Text.Body>
				<Text.Heading {...name}>
					{capitalizeFirstLetter(name.value)}
				</Text.Heading>
			</Flex>
		</Box>
	);
};

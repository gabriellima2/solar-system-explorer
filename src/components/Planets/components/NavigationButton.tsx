import { useCallback, memo } from "react";
import { Button } from "native-base";

import { Text } from "@components/Text";

import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";
import type { NavigationDefaultProps } from "@components/Carousel/@types/NavigationDefaultProps";
import type { IPlanet } from "@interfaces/IPlanets";

type NavigationButtonProps = Pick<
	NavigationDefaultProps<IPlanet>,
	"isActive" | "accessibilityValue" | "name_portuguese" | "onPress"
>;

export const NavigationButton = memo((props: NavigationButtonProps) => {
	const { isActive, name_portuguese, ...rest } = props;
	const getPlanetName = useCallback(
		() => capitalizeFirstLetter(name_portuguese),
		[]
	);

	return (
		<Button
			{...rest}
			background="transparent"
			textTransform="capitalize"
			mr="1"
		>
			<Text.Body
				color={isActive ? "primary.200" : "text.600"}
				fontWeight={isActive ? "500" : "400"}
				fontSize={{ base: "sm", md: "lg" }}
			>
				{getPlanetName()}
			</Text.Body>
		</Button>
	);
});

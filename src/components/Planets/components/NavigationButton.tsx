import { useCallback } from "react";
import { Button } from "native-base";

import { type NavigationProps as NavigationCarouselProps } from "@components/Carousel/components";
import { Text } from "@components/Text";

import { capitalizeFirstLetter } from "@utils/capitalize-first-letter";
import type { IPlanet } from "@interfaces/IPlanets";

type NavigationButtonProps = Pick<
	NavigationCarouselProps<IPlanet>,
	"isActive" | "accessibilityValue" | "name_portuguese" | "onPress"
>;

export const NavigationButton = (props: NavigationButtonProps) => {
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
};

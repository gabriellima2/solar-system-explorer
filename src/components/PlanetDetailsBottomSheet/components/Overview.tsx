import { Text } from "@components/Text";
import { usePlanetDetailsContext } from "@contexts/planet-details-context";

export const Overview = () => {
	const { planetID } = usePlanetDetailsContext();

	return <Text.Heading>Visão Geral do Planeta {planetID}</Text.Heading>;
};

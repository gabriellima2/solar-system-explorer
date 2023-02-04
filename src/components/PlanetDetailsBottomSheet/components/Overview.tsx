import { ActivityIndicator } from "react-native";
import { Box, Flex } from "native-base";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";
import { useOverview } from "../hooks/useOverview";

import { PlanetName } from "@components/PlanetName";
import { Error } from "@components/Error";
import { Text } from "@components/Text";
import { InfoGroup } from "./InfoGroup";

export const Overview = () => {
	const { planetID } = usePlanetDetailsContext();
	const { planet, error, isError, isLoading } = useOverview(planetID!);

	if (isLoading) return <ActivityIndicator />;

	if (isError) return <Error message={error || "Verifique sua conexão"} />;

	if (!planet) return null;

	return (
		<Flex>
			<Box>
				<PlanetName name={{ value: planet.name_portuguese }} />
				<Text.Body>{planet.description}</Text.Body>
			</Box>
			<Flex>
				<Box>
					<InfoGroup title="Gravidade" value={planet.gravity} />
					<InfoGroup title="Massa" value={planet.mass.massValue} />
					<InfoGroup title="Densidade" value={planet.density} />
				</Box>
				<Box>
					<InfoGroup title="Completa um ano" value={planet.sideralOrbit} />
					<InfoGroup title="Completa um dia" value={planet.sideralRotation} />
					<InfoGroup
						title="Quantidade de luas"
						value={planet.moons?.length || 0}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

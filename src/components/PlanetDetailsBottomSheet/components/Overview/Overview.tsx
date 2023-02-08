import { Box, VStack } from "native-base";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";
import { useOverviewQuery } from "../../hooks/useOverviewQuery";

import { PlanetName } from "@components/PlanetName";
import { Error } from "@components/Error";
import { InfoGroup } from "../InfoGroup";
import { Text } from "@components/Text";
import { Loading } from "./Loading";

import { DEFAULT_ERROR } from "../../constants/default-error";

export const Overview = () => {
	const { planetID } = usePlanetDetailsContext();
	const { planet, error, isError, isLoading } = useOverviewQuery(planetID!);

	if (isLoading) return <Loading />;

	if (isError) return <Error message={error || DEFAULT_ERROR} />;

	if (!planet) return null;

	return (
		<VStack space="32px">
			<Box>
				<PlanetName name={{ value: planet.name_portuguese, fontSize: "xl" }} />
				<Text.Body>{planet.description}</Text.Body>
			</Box>
			<VStack direction="row" alignItems="center" flexWrap="wrap" space="66px">
				<VStack space="12px">
					<InfoGroup title="Gravidade" value={`${planet.gravity} m/s²`} />
					<InfoGroup title="Massa" value={`${planet.mass.massValue} Kg`} />
					<InfoGroup title="Densidade" value={`${planet.density} g/cm 3`} />
				</VStack>
				<VStack space="12px">
					<InfoGroup
						title="Completa um ano"
						value={`${planet.sideralOrbit} Dias Terrestres`}
					/>
					<InfoGroup
						title="Completa um dia"
						value={`${planet.sideralRotation} Horas`}
					/>
					<InfoGroup
						title="Quantidade de luas"
						value={planet.moons?.length || 0}
					/>
				</VStack>
			</VStack>
		</VStack>
	);
};

import { Text } from "@components/Text";

type PlanetDetailsProps = {
	id: string;
};

export const PlanetDetails = ({ id }: PlanetDetailsProps) => {
	return <Text.Body>Detalhes do planeta {id}</Text.Body>;
};

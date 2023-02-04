import { Box } from "native-base";
import { Text } from "@components/Text";

type InfoGroupProps = {
	value: string | number;
	title: string;
};

export const InfoGroup = (props: InfoGroupProps) => {
	const { title, value } = props;
	return (
		<Box>
			<Text.Heading>{value.toString()}</Text.Heading>
			<Text.Body>{title}</Text.Body>
		</Box>
	);
};

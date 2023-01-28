import { Center } from "native-base";
import { Text } from "./Text";

type ErrorProps = {
	message?: string;
};

export const Error = (props: ErrorProps) => {
	const { message } = props;

	return (
		<Center flex={1}>
			<Text.Body
				fontWeight={500}
				textAlign="center"
				accessible
				accessibilityRole="alert"
			>
				☹️ {message}
			</Text.Body>
		</Center>
	);
};

const defaultProps: ErrorProps = {
	message: "Desculpe, ocorreu um erro",
};

Error.defaultProps = defaultProps;

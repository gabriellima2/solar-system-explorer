import { Text } from "native-base";

type BodyProps = Parameters<typeof Text>[0];

export const Body = (props: BodyProps) => (
	<Text color="text.300" lineHeight="md" {...props} />
);

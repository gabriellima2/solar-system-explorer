import { Text } from "native-base";

type HeadingProps = Parameters<typeof Text>[0];

export const Heading = (props: HeadingProps) => (
	<Text color="text.50" fontWeight={600} lineHeight="sm" {...props} />
);

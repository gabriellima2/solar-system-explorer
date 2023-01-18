import { Box } from "native-base";
import type { WithChildren } from "@global-types/WithChildren";

type DefaultProps = Pick<Parameters<typeof Box>[0], "background"> & {};

export const Default = (props: WithChildren<DefaultProps>) => {
	return (
		<Box background={props.background || "dark.900"} flex={1} safeArea>
			{props.children}
		</Box>
	);
};

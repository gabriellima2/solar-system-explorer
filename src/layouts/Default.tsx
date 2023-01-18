import { Box } from "native-base";
import type { WithChildren } from "@global-types/WithChildren";

type DefaultProps = Omit<
	Parameters<typeof Box>[0],
	"background" | "flex" | "safeArea"
> & {
	hasDefaultSpacings?: boolean;
};

export const Default = (props: WithChildren<DefaultProps>) => {
	const { hasDefaultSpacings = true, ...rest } = props;
	const paddings = {
		px: hasDefaultSpacings ? "24px" : 0,
		pt: hasDefaultSpacings ? "8px" : 0,
	};

	return (
		<Box background="dark.900" flex={1} safeArea {...paddings} {...rest}>
			{props.children}
		</Box>
	);
};

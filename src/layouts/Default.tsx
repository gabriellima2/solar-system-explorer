import { Box } from "native-base";
import { getDefaultSpacing } from "@utils/get-default-spacing";
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
		px: hasDefaultSpacings ? getDefaultSpacing().px : 0,
		pt: hasDefaultSpacings ? getDefaultSpacing().pt : 0,
	};

	return (
		<Box background="dark.900" flex={1} {...paddings} {...rest}>
			{props.children}
		</Box>
	);
};

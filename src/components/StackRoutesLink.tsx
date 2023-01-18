import { Link } from "native-base";
import { useNavigation } from "@hooks/useNavigation";

import type { StackParams } from "@global-types/StacksParams";
import type { WithChildren } from "@global-types/WithChildren";

type StackRoutesLinkProps = Omit<
	Parameters<typeof Link>[0],
	"href" | "accessibilityRole"
> & {
	routeName: keyof StackParams;
};

export const StackRoutesLink = (props: WithChildren<StackRoutesLinkProps>) => {
	const { children, routeName, ...rest } = props;
	const { navigate } = useNavigation();

	return (
		<Link
			onPress={() => navigate(routeName)}
			accessibilityRole="link"
			{...rest}
		>
			{children}
		</Link>
	);
};

import { Planets } from "@components/Planets";
import { Default } from "@layouts/Default";

import { getDefaultSpacing } from "@utils/get-default-spacing";

export const Explore = () => {
	return (
		<Default hasDefaultSpacings={false} pt={getDefaultSpacing().pt}>
			<Planets />
		</Default>
	);
};

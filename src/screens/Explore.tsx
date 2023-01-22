import { Planets } from "@components/Planets";
import { Default } from "@layouts/Default";

export const Explore = () => {
	return (
		<Default hasDefaultSpacings={false}>
			<Planets />
		</Default>
	);
};

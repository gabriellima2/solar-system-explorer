import { usePlanetDetailsContext } from "@contexts/planet-details-context";

import { BottomSheet } from "@components/BottomSheet";
import { Overview } from "./components";

export const PlanetDetailsBottomSheet = () => {
	const { bottomSheetRef } = usePlanetDetailsContext();

	return (
		<BottomSheet ref={bottomSheetRef}>
			<Overview />
		</BottomSheet>
	);
};

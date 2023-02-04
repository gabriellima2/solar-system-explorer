import { Box } from "native-base";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";

import { BottomSheet } from "@components/BottomSheet";
import { Overview } from "./components";

import { getDefaultSpacing } from "@utils/get-default-spacing";

export const PlanetDetailsBottomSheet = () => {
	const { bottomSheetRef, planetID } = usePlanetDetailsContext();

	return (
		<BottomSheet ref={bottomSheetRef}>
			{planetID && (
				<Box p={getDefaultSpacing().p}>
					<Overview />
				</Box>
			)}
		</BottomSheet>
	);
};

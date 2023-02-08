import { VStack } from "native-base";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";

import { BottomSheet } from "@components/BottomSheet";
import { Overview, Images } from "./components";

import { getDefaultSpacing } from "@utils/get-default-spacing";

export const PlanetDetailsBottomSheet = () => {
	const { bottomSheetRef, planetID } = usePlanetDetailsContext();

	return (
		<BottomSheet ref={bottomSheetRef}>
			{planetID && (
				<BottomSheetScrollView>
					<VStack p={getDefaultSpacing().p} space="32px">
						<Overview />
						<Images />
					</VStack>
				</BottomSheetScrollView>
			)}
		</BottomSheet>
	);
};

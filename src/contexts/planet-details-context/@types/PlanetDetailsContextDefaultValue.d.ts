import type { MutableRefObject } from "react";
import type { BottomSheetRef } from "./BottomSheetRef";

export type PlanetDetailsContextDefaultValue = {
	planetID: string | null;
	bottomSheetRef: MutableRefObject<BottomSheetRef>;
	handleClose: () => void;
	handleExpand: (id: string) => void;
};

import { useRef, useState } from "react";

import { PlanetDetailsContext } from "./PlanetDetailsContext";

import type { WithChildren } from "@global-types/WithChildren";
import type { BottomSheetRef } from "./@types/BottomSheetRef";

export const PlanetDetailsProvider = (props: WithChildren<{}>) => {
	const bottomSheetRef = useRef<BottomSheetRef>(null);
	const [planetID, setPlanetID] = useState<string | null>(null);

	const handleClose = () => {
		if (bottomSheetRef.current) return bottomSheetRef.current.close();
	};

	const handleExpand = (id: string) => {
		if (!bottomSheetRef.current) return;

		setPlanetID(id);
		bottomSheetRef.current.expand();
	};

	return (
		<PlanetDetailsContext.Provider
			value={{ bottomSheetRef, handleClose, handleExpand, planetID }}
		>
			{props.children}
		</PlanetDetailsContext.Provider>
	);
};

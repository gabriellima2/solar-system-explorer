import { forwardRef, useMemo } from "react";
import BottomSheetLib, {
	type BottomSheetProps as BottomSheetLibProps,
} from "@gorhom/bottom-sheet";
import { type SharedValue } from "react-native-reanimated";

type BottomSheetProps = Omit<BottomSheetLibProps, "snapPoints"> & {
	snapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
};

export const BottomSheet = forwardRef<BottomSheetLib, BottomSheetProps>(
	(props, ref) => {
		const { snapPoints } = props;
		const defaultSnapPoints = useMemo(() => [1, "50%"], []);

		return (
			<BottomSheetLib
				{...props}
				ref={ref}
				index={1}
				enablePanDownToClose
				snapPoints={snapPoints ? snapPoints : defaultSnapPoints}
			/>
		);
	}
);

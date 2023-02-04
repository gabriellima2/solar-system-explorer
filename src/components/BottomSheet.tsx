import { forwardRef, useMemo } from "react";
import { useTheme } from "native-base";
import { type SharedValue } from "react-native-reanimated";
import BottomSheetLib, {
	type BottomSheetProps as BottomSheetLibProps,
} from "@gorhom/bottom-sheet";

type BottomSheetProps = Omit<BottomSheetLibProps, "snapPoints"> & {
	snapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
};

export const BottomSheet = forwardRef<BottomSheetLib, BottomSheetProps>(
	(props, ref) => {
		const { snapPoints } = props;

		const defaultSnapPoints = useMemo(() => [1, "50%"], []);
		const { colors } = useTheme();

		return (
			<BottomSheetLib
				{...props}
				ref={ref}
				index={1}
				enablePanDownToClose
				backgroundStyle={{ backgroundColor: `${colors.dark[800]}E6` }}
				style={{ paddingVertical: 8 }}
				handleIndicatorStyle={{
					backgroundColor: colors.dark[600],
					width: "40%",
					height: 6,
				}}
				snapPoints={snapPoints ? snapPoints : defaultSnapPoints}
			/>
		);
	}
);

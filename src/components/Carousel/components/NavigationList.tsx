import { useCallback } from "react";
import { FlatList } from "native-base";
import { type ListRenderItemInfo, type AccessibilityValue } from "react-native";

export type NavigationProps<RestProps extends {}> = {
	onPress: () => void;
	accessibilityValue: AccessibilityValue;
	isActive: boolean;
} & RestProps;

type NavigationListProps<Item extends {}> = Omit<
	Parameters<typeof FlatList<Item>>[0],
	"renderItem" | "horizontal"
> & {
	Navigation: (props: NavigationProps<Item>) => JSX.Element;
	navigateToIndex: (index: number) => void;
	currentItemIndex: number;
};

export const NavigationList = <Item extends {}>(
	props: NavigationListProps<Item>
) => {
	const { Navigation, navigateToIndex, currentItemIndex, ...rest } = props;

	const renderItem = useCallback(
		({ item, index }: ListRenderItemInfo<Item>) => {
			const isActive = currentItemIndex === index;

			return (
				<Navigation
					{...item}
					onPress={() => navigateToIndex(index)}
					accessibilityHint={`Navega até o item ${index + 1}`}
					isActive={isActive}
					accessibilityValue={{
						max: rest.data?.length,
						min: 1,
						now: currentItemIndex,
					}}
				/>
			);
		},
		[currentItemIndex]
	);

	return <FlatList<Item> {...rest} renderItem={renderItem} horizontal />;
};

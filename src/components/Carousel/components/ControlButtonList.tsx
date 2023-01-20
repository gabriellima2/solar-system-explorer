import { useCallback } from "react";
import { FlatList } from "native-base";
import { type ListRenderItemInfo } from "react-native";

export type ControlButtonProps<RestProps extends {}> = {
	onPress: () => void;
} & RestProps;

type ControlButtonListProps<Item extends {}> = Omit<
	Parameters<typeof FlatList<Item>>[0],
	"renderItem"
> & {
	ControlButton: (props: ControlButtonProps<Item>) => JSX.Element;
	navigateToIndex: (index: number) => void;
};

export const ControlButtonList = <Item extends {}>(
	props: ControlButtonListProps<Item>
) => {
	const { ControlButton, navigateToIndex, ...rest } = props;

	const renderItem = useCallback(
		({ item, index }: ListRenderItemInfo<Item>) => (
			<ControlButton {...item} onPress={() => navigateToIndex(index)} />
		),
		[]
	);

	return (
		<FlatList<Item>
			{...rest}
			data={rest.data}
			keyExtractor={rest.keyExtractor}
			renderItem={renderItem}
			horizontal
		/>
	);
};

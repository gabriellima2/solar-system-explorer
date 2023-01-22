import { TouchableOpacity } from "react-native";
import { Icon } from "@components/Icon";

type FavoriteButtonProps = {
	elementID: string | number;
	handlePress: (elementID: string | number) => void;
	iconSize?: number;
};

export const FavoriteButton = (props: FavoriteButtonProps) => {
	const { elementID, handlePress, iconSize } = props;

	return (
		<TouchableOpacity
			accessibilityLabel="Favoritar"
			onPress={() => handlePress(elementID)}
			activeOpacity={0.5}
			style={{ padding: 4 }}
		>
			<Icon name="heart-outline" size={iconSize || 24} />
		</TouchableOpacity>
	);
};

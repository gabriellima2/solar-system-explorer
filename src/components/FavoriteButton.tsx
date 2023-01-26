import { TouchableOpacity } from "react-native";
import { useTheme } from "native-base";
import { Icon } from "@components/Icon";

type FavoriteButtonProps = {
	elementID: string;
	handlePress: (elementID: string) => void;
	iconSize?: number;
	isFavorite?: boolean;
};

export const FavoriteButton = (props: FavoriteButtonProps) => {
	const { elementID, handlePress, iconSize, isFavorite } = props;
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			accessibilityLabel="Favoritar"
			onPress={() => handlePress(elementID)}
			activeOpacity={0.5}
			style={{ padding: 4 }}
		>
			<Icon
				name={isFavorite ? "heart" : "heart-outline"}
				color={isFavorite ? colors.primary[200] : colors.text[50]}
				size={iconSize || 24}
			/>
		</TouchableOpacity>
	);
};

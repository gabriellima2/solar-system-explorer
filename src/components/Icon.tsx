import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";

type IconProps = {
	name: keyof typeof Ionicons.glyphMap;
	size?: number;
	color?: string;
};

export const Icon = (props: IconProps) => {
	const { name, color, size } = props;
	const { colors } = useTheme();

	return (
		<Ionicons name={name} size={size || 30} color={color || colors.text[50]} />
	);
};

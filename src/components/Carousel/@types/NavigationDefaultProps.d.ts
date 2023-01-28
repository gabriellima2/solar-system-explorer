import type { AccessibilityValue } from "react-native";

export type NavigationDefaultProps<RestProps extends {}> = {
	onPress: () => void;
	accessibilityValue: AccessibilityValue;
	accessibilityHint: string;
	isActive: boolean;
} & RestProps;

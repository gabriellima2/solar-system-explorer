import { Dimensions } from "react-native";

export function windowDimensions() {
	return {
		...Dimensions.get("window"),
	};
}

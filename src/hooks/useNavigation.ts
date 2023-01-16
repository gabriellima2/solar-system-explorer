import { useNavigation as useRNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { StackParams } from "../@types/StacksParams";

export function useNavigation() {
	return useRNavigation<StackNavigationProp<StackParams>>();
}

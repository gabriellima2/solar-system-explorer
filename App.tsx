import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<Routes />
		</>
	);
}

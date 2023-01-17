import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import {
	useFonts,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

import { theme } from "./src/styles/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		InterExtraLight: Inter_200ExtraLight,
		InterLight: Inter_300Light,
		InterRegular: Inter_400Regular,
		InterMedium: Inter_500Medium,
		InterSemiBold: Inter_600SemiBold,
		InterBold: Inter_700Bold,
	});

	return (
		<NativeBaseProvider theme={theme}>
			{!fontsLoaded ? (
				<Loading />
			) : (
				<>
					<StatusBar style="auto" />
					<Routes />
				</>
			)}
		</NativeBaseProvider>
	);
}

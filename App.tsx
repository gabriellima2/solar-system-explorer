import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import {
	useFonts,
	Inter_200ExtraLight,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "@components/Loading";
import { persistor, store } from "src/store";
import { Routes } from "./src/routes";

import { theme } from "@styles/theme";

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
				<Provider store={store}>
					<PersistGate persistor={persistor} loading={<Loading />}>
						<StatusBar style="light" />
						<Routes />
					</PersistGate>
				</Provider>
			)}
		</NativeBaseProvider>
	);
}

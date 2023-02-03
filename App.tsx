import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { QueryClientProvider } from "react-query";
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

import { queryClient } from "@infra/lib/query-client";
import { persistor, store } from "@store/index";
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
						<QueryClientProvider client={queryClient}>
							<StatusBar style="light" />
							<Routes />
						</QueryClientProvider>
					</PersistGate>
				</Provider>
			)}
		</NativeBaseProvider>
	);
}

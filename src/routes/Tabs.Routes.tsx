import { useTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Explore } from "../screens/Explore";
import { Favorites } from "../screens/Favorites";
import { setTabContent } from "./utils/set-tab-content";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
	const { colors } = useTheme();

	return (
		<NavigationContainer independent>
			<Tab.Navigator
				initialRouteName="Explore"
				screenOptions={{
					tabBarShowLabel: false,
					tabBarStyle: {
						height: 62,
						borderTopWidth: 0,
						position: "absolute",
						elevation: 0,
						borderTopLeftRadius: 24,
						borderTopRightRadius: 24,
						paddingTop: 0,
						backgroundColor: colors.dark[700],
					},
					headerTitleStyle: {
						fontFamily: "InterMedium",
						color: colors.text[50],
						fontSize: 14,
						marginLeft: 8,
					},
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: colors.dark[900],
					},
				}}
			>
				<Tab.Screen
					name="Explore"
					component={Explore}
					options={{
						...setTabContent({ icon: { name: "md-planet-outline" } }),
						title: "Explorar",
					}}
				/>
				<Tab.Screen
					name="Favorites"
					component={Favorites}
					options={{
						...setTabContent({ icon: { name: "heart-outline" } }),
						title: "Seus Favoritos",
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

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
						backgroundColor: colors.dark[700],
						borderTopWidth: 0,
						elevation: 0, // <-- this is the solution
						borderTopLeftRadius: 24,
						borderTopRightRadius: 24,
						paddingTop: 0,
					},
				}}
			>
				<Tab.Screen
					name="Explore"
					component={Explore}
					options={{
						...setTabContent({ icon: { name: "md-planet-outline" } }),
					}}
				/>
				<Tab.Screen
					name="Favorites"
					component={Favorites}
					options={{ ...setTabContent({ icon: { name: "heart-outline" } }) }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Explore } from "../screens/Explore";
import { Favorites } from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export const Tabs = () => (
	<NavigationContainer independent>
		<Tab.Navigator initialRouteName="Explore">
			<Tab.Screen name="Explore" component={Explore} />
			<Tab.Screen name="Favorites" component={Favorites} />
		</Tab.Navigator>
	</NavigationContainer>
);

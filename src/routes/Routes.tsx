import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../screens/Welcome";
import { Tabs } from "./Tabs.Routes";

const Stack = createStackNavigator();

export const Routes = () => (
	<NavigationContainer>
		<Stack.Navigator
			initialRouteName="Welcome"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Home" component={Tabs} />
		</Stack.Navigator>
	</NavigationContainer>
);

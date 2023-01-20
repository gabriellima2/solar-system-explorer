import { useRef } from "react";
import { useTheme } from "native-base";
import { Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Explore } from "@screens/Explore";
import { Favorites } from "@screens/Favorites";

import { windowDimensions } from "@utils/window-dimensions";
import { setTabContent } from "./utils/set-tab-content";

const BOTTOM_TAB_HEIGHT = 62;
const INDICATOR_WIDTH = 66;
const INDICATOR_HEIGHT = 4;
const TOTAL_TABS = 2;

const Tab = createBottomTabNavigator();

export const Tabs = () => {
	const { colors } = useTheme();
	const offsetAnimation = useRef(new Animated.Value(0)).current;
	const { width } = windowDimensions();

	const handleFocus = (params: { currentIndex: number }) => {
		const { currentIndex } = params;

		Animated.spring(offsetAnimation, {
			toValue: currentIndex * (width / TOTAL_TABS),
			useNativeDriver: true,
		}).start();
	};

	return (
		<NavigationContainer independent>
			<Tab.Navigator
				initialRouteName="Explore"
				screenOptions={{
					tabBarShowLabel: false,
					tabBarStyle: {
						height: BOTTOM_TAB_HEIGHT,
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
					listeners={{ focus: () => handleFocus({ currentIndex: 0 }) }}
				/>
				<Tab.Screen
					name="Favorites"
					component={Favorites}
					options={{
						...setTabContent({ icon: { name: "heart-outline" } }),
						title: "Seus Favoritos",
					}}
					listeners={{ focus: () => handleFocus({ currentIndex: 1 }) }}
				/>
			</Tab.Navigator>
			<Animated.View
				style={{
					position: "absolute",
					width: INDICATOR_WIDTH,
					height: INDICATOR_HEIGHT,
					left: width / TOTAL_TABS / 2 - Math.abs(INDICATOR_WIDTH / 2),
					bottom: BOTTOM_TAB_HEIGHT - INDICATOR_HEIGHT,
					backgroundColor: colors.primary[200],
					transform: [{ translateX: offsetAnimation }],
				}}
			/>
		</NavigationContainer>
	);
};

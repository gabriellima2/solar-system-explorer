import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Flex, useTheme } from "native-base";
import { Icon } from "@components/Icon";

type SetTabContentParams = {
	icon: Pick<Parameters<typeof Icon>[0], "name" | "size">;
};

type SetTabContentReturn = Pick<BottomTabNavigationOptions, "tabBarIcon">;

export function setTabContent(
	params: SetTabContentParams
): SetTabContentReturn {
	const { icon } = params;
	const { colors } = useTheme();

	return {
		tabBarIcon: ({ focused }) => (
			<Flex
				w="66px"
				flex={1}
				alignItems="center"
				justifyContent="center"
				position="relative"
			>
				<Icon
					name={icon.name}
					size={icon.size || 36}
					color={focused ? colors.primary[200] : colors.dark[600]}
				/>
			</Flex>
		),
	};
}

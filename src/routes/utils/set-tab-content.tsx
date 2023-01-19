import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Box, Flex, useTheme } from "native-base";
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
				{focused && (
					<Box
						backgroundColor={colors.primary[200]}
						w="full"
						h="4px"
						rounded="full"
						position="absolute"
						top="0"
					/>
				)}
				<Icon
					name={icon.name}
					size={icon.size || 36}
					color={focused ? colors.primary[200] : colors.dark[800]}
				/>
			</Flex>
		),
	};
}

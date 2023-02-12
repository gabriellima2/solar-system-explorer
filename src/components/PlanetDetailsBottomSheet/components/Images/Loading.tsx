import { Skeleton, HStack, VStack } from "native-base";

export const Loading = () => {
	return (
		<VStack space="12px">
			<Skeleton
				w="30%"
				h="3"
				rounded="full"
				startColor="dark.600"
				endColor="dark.800"
			/>
			<HStack space="12px">
				<Skeleton
					w="32"
					h="32"
					rounded="md"
					startColor="dark.600"
					endColor="dark.800"
				/>
				<Skeleton
					w="32"
					h="32"
					rounded="md"
					startColor="dark.600"
					endColor="dark.800"
				/>
				<Skeleton
					w="32"
					h="32"
					rounded="md"
					startColor="dark.600"
					endColor="dark.800"
				/>
			</HStack>
		</VStack>
	);
};

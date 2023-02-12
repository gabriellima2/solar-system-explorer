import { Skeleton, VStack, HStack } from "native-base";

const InfoGroupLoading = () => (
	<VStack space="2">
		<Skeleton
			h="4"
			w="32"
			rounded="full"
			startColor="dark.600"
			endColor="dark.800"
		/>
		<Skeleton
			h="3"
			w="24"
			rounded="full"
			startColor="dark.600"
			endColor="dark.800"
		/>
	</VStack>
);

export const Loading = () => {
	return (
		<VStack space="32px">
			<VStack space="6">
				<Skeleton
					h="5"
					w="48"
					rounded="full"
					startColor="dark.600"
					endColor="dark.800"
				/>
				<Skeleton.Text startColor="dark.600" endColor="dark.800" />
			</VStack>
			<HStack alignItems="center" flexWrap="wrap" space="66px">
				<VStack space="24px">
					<InfoGroupLoading />
					<InfoGroupLoading />
					<InfoGroupLoading />
				</VStack>

				<VStack space="24px">
					<InfoGroupLoading />
					<InfoGroupLoading />
					<InfoGroupLoading />
				</VStack>
			</HStack>
		</VStack>
	);
};

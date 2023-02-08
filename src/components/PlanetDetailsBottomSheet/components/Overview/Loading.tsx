import { Skeleton, VStack, HStack } from "native-base";

const InfoGroupLoading = () => (
	<VStack space="2">
		<Skeleton h="4" w="32" rounded="full" />
		<Skeleton h="3" w="24" rounded="full" />
	</VStack>
);

export const Loading = () => {
	return (
		<VStack space="32px">
			<VStack space="6">
				<Skeleton h="5" w="48" rounded="full" />
				<Skeleton.Text />
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

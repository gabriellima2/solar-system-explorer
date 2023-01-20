import { Center, Image } from "native-base";

export const Logo = () => (
	<Center flex={1} w={["180", "190", "200"]}>
		<Image
			source={require("../../assets/logo.png")}
			alt="Logo do App"
			size="xs"
			w="full"
		/>
	</Center>
);

import { Center, Image } from "native-base";

export const Loading = () => (
	<Center flex={1}>
		<Image
			source={require("../../assets/icon.png")}
			alt="Logo do App"
			size="md"
		/>
	</Center>
);

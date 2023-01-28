import { Image } from "native-base";

export const Logo = () => (
	<Image
		source={require("../../assets/logo.png")}
		alt="Logo do App"
		size={{ base: "180px", md: "200px" }}
		resizeMode="contain"
		ml={{ base: "-4px", md: "0" }}
	/>
);

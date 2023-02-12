import { Image } from "native-base";

export const Logo = () => (
	<Image
		source={require("../../assets/logo.png")}
		alt="Logo do App"
		w={{ base: "180px", md: "200px" }}
		h={{ base: "60px", md: "65px" }}
		resizeMode="contain"
		ml={{ base: "-4px", md: "0" }}
	/>
);

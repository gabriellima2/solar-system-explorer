import { extendTheme } from "native-base";

export const theme = extendTheme({
	colors: {},
	fontConfig: {
		Inter: {
			200: { normal: "InterExtraLight" },
			300: { normal: "InterLight" },
			400: { normal: "InterRegular" },
			500: { normal: "InterMedium" },
			600: { normal: "InterSemiBold" },
			700: { normal: "InterBold" },
		},
	},
	fonts: {
		heading: "Inter",
		body: "Inter",
		mono: "Inter",
	},
});

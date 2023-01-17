import { extendTheme } from "native-base";

export const theme = extendTheme({
	colors: {
		primary: {
			50: "#fdf3f3",
			100: "#fbe5e5",
			200: "#f4adad",
			300: "#f4adad",
			400: "#eb7e7e",
			500: "#df5454",
			600: "#cb3737",
			700: "#aa2b2b",
			800: "#8d2727",
			900: "#762626",
		},
		text: {
			50: "#f7f7f7",
			100: "#f0f0f0",
			200: "#e4e4e4",
			300: "#d1d1d1",
			400: "#b4b4b4",
			500: "#9a9a9a",
			600: "#818181",
			700: "#6a6a6a",
			800: "#5a5a5a",
			900: "#4e4e4e",
		},
		dark: {
			50: "#f7f7f7",
			100: "#e3e3e3",
			200: "#c8c8c8",
			300: "#a4a4a4",
			400: "#818181",
			500: "#666666",
			600: "#515151",
			700: "#434343",
			800: "#383838",
			900: "#060606",
		},
	},
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

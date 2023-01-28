export function getDefaultSpacing() {
	const padding = ["16px", "16px", "24px"];
	const margin = ["16px", "16px", "24px"];

	return {
		pl: padding,
		pr: padding,
		pt: ["4px", "4px", "12px"],
		pb: padding,
		px: padding,
		py: padding,
		p: padding,
		ml: margin,
		mr: margin,
		mt: margin,
		mb: margin,
		mx: margin,
		my: margin,
		m: margin,
	};
}

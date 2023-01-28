import { TouchableOpacity } from "react-native";

import { Icon } from "@components/Icon";

type InfoButtonProps = {
	elementID: string;
};

export const InfoButton = (props: InfoButtonProps) => {
	return (
		<TouchableOpacity
			accessibilityLabel="Ver mais informações"
			activeOpacity={0.5}
			style={{ padding: 4, marginTop: 8 }}
			hitSlop={{ top: 4, bottom: 8, left: 8, right: 8 }}
		>
			<Icon name="information-circle-outline" size={24} />
		</TouchableOpacity>
	);
};

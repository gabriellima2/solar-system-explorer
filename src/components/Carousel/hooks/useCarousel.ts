import { useRef, useState, type MutableRefObject } from "react";
import { type ViewToken, FlatList } from "react-native";

import { usePlanetDetailsContext } from "@contexts/planet-details-context";

type handleViewableChangeParams = {
	changed: ViewToken[];
};

type UseCarouselParams<CarouselItem> = {
	currentIndex: number;
	flatListRef: MutableRefObject<FlatList<CarouselItem> | null>;
	handleViewableChange: MutableRefObject<
		({ changed }: handleViewableChangeParams) => void
	>;
	navigateToIndex: (index: number) => void;
};

export function useCarousel<
	CarouselItem extends {}
>(): UseCarouselParams<CarouselItem> {
	const [currentIndex, setCurrentIndex] = useState(0);
	const { bottomSheetRef, handleClose } = usePlanetDetailsContext();
	const flatListRef = useRef<FlatList<CarouselItem> | null>(null);

	const handleViewableChange = useRef(
		({ changed }: handleViewableChangeParams) => {
			if (!changed[0].isViewable) return;
			setCurrentIndex(changed[0].index as number);

			if (!bottomSheetRef.current) return;
			handleClose();
		}
	);

	const navigateToIndex = (index: number) => {
		if (!flatListRef.current) return;
		flatListRef.current.scrollToIndex({ animated: true, index });
	};

	return {
		currentIndex,
		flatListRef,
		handleViewableChange,
		navigateToIndex,
	};
}

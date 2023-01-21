import { FlatList, Flex } from "native-base";

import { useCarousel } from "./hooks/useCarousel";
import { NavigationList, type NavigationProps } from "./components";

type CarouselProps<CarouselItem extends {}> = Omit<
	Parameters<typeof FlatList<CarouselItem>>[0],
	| "horizontal"
	| "pagingEnabled"
	| "ref"
	| "onViewableItemsChanged"
	| "showsVerticalScrollIndicator"
> & {
	Navigation?: (props: NavigationProps<CarouselItem>) => JSX.Element;
	ContainerProps?: Parameters<typeof Flex>[0];
};

export const Carousel = <CarouselItem extends {}>(
	props: CarouselProps<CarouselItem>
) => {
	const { Navigation, ContainerProps, ...rest } = props;
	const {
		handleViewableChangeRef,
		navigateToIndex,
		flatListRef,
		currentIndex,
	} = useCarousel<CarouselItem>();

	return (
		<Flex {...ContainerProps}>
			{Navigation && (
				<NavigationList<CarouselItem>
					data={rest.data}
					Navigation={Navigation}
					navigateToIndex={navigateToIndex}
					keyExtractor={rest.keyExtractor}
					showsVerticalScrollIndicator={false}
					currentItemIndex={currentIndex}
				/>
			)}
			<FlatList<CarouselItem>
				{...rest}
				horizontal
				pagingEnabled
				ref={flatListRef}
				onViewableItemsChanged={handleViewableChangeRef.current}
				showsVerticalScrollIndicator={false}
				accessibilityLiveRegion="polite"
			/>
		</Flex>
	);
};

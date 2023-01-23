import { FlatList, Flex } from "native-base";

import { useCarousel } from "./hooks/useCarousel";
import { NavigationList } from "./components";

type CarouselProps<CarouselItem extends {}> = Omit<
	Parameters<typeof FlatList<CarouselItem>>[0],
	| "horizontal"
	| "pagingEnabled"
	| "ref"
	| "onViewableItemsChanged"
	| "showsVerticalScrollIndicator"
> & {
	ContainerProps?: Parameters<typeof Flex>[0];
	NavigationListProps?: Omit<
		Parameters<typeof NavigationList<CarouselItem>>[0],
		| "data"
		| "navigateIndex"
		| "navigateToIndex"
		| "keyExtractor"
		| "showsVerticalScrollIndicator"
		| "currentItemIndex"
	>;
};

export const Carousel = <CarouselItem extends {}>(
	props: CarouselProps<CarouselItem>
) => {
	const { NavigationListProps, ContainerProps, ...rest } = props;
	const { handleViewableChange, navigateToIndex, flatListRef, currentIndex } =
		useCarousel<CarouselItem>();

	return (
		<Flex {...ContainerProps}>
			{NavigationListProps?.Navigation && (
				<NavigationList<CarouselItem>
					{...NavigationListProps}
					data={rest.data}
					navigateToIndex={navigateToIndex}
					keyExtractor={rest.keyExtractor}
					showsHorizontalScrollIndicator={false}
					currentItemIndex={currentIndex}
				/>
			)}
			<FlatList<CarouselItem>
				{...rest}
				horizontal
				pagingEnabled
				ref={flatListRef}
				onViewableItemsChanged={handleViewableChange.current}
				showsHorizontalScrollIndicator={false}
				accessibilityLiveRegion="polite"
			/>
		</Flex>
	);
};

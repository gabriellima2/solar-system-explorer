import { FlatList, Flex } from "native-base";
import { useCarousel } from "./hooks/useCarousel";
import { ControlButtonList, type ControlButtonProps } from "./components";

type CarouselProps<CarouselItem extends {}> = Omit<
	Parameters<typeof FlatList<CarouselItem>>[0],
	"horizontal" | "pagingEnabled" | "ref" | "onViewableItemsChanged"
> & {
	ControlButton?: (props: ControlButtonProps<CarouselItem>) => JSX.Element;
	ContainerProps?: Parameters<typeof Flex>[0];
};

export const Carousel = <CarouselItem extends {}>(
	props: CarouselProps<CarouselItem>
) => {
	const { ControlButton, ContainerProps, ...rest } = props;
	const { handleViewableChangeRef, navigateToIndex, flatListRef } =
		useCarousel<CarouselItem>();

	return (
		<Flex {...ContainerProps}>
			{ControlButton && (
				<ControlButtonList<CarouselItem>
					data={rest.data}
					ControlButton={ControlButton}
					navigateToIndex={navigateToIndex}
				/>
			)}
			<FlatList<CarouselItem>
				{...rest}
				horizontal
				pagingEnabled
				ref={flatListRef}
				onViewableItemsChanged={handleViewableChangeRef.current}
			/>
		</Flex>
	);
};

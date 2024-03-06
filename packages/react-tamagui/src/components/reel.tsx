import React from "react";
import { Stack } from "tamagui";

export type ReelProps = {
	children: React.ReactNode;
	itemWidth?: string;
	space?: string;
	height?: string | number;
	noBar?: boolean;
};

/**
 * Reel component creates a horizontal list (reel) of items.
 *
 * More on Every Layout [Reel](https://every-layout.dev/layouts/reel/)
 */
export const Reel: React.FC<ReelProps> = ({
	children,
	itemWidth = "auto",
	space,
	height = "auto",
	noBar = false,
}) => {
	// const reelStyle = {
	//   flexDirection: 'row',
	//   overflowX: 'auto',
	//   overflowY: 'hidden',
	//   height: height,
	//   // Optional scrollbar styling can be added here
	//   ...(noBar &&
	//     {
	//       // Styles to hide scrollbar
	//     }),
	// };

	// const childStyle = {
	//   flexShrink: 0,
	//   flexGrow: 0,
	//   flexBasis: itemWidth,
	//   marginRight: space,
	//   ...(itemWidth === 'auto' && {
	//     width: 'auto',
	//   }),
	// };

	return (
		<Stack
			flexDirection="row"
			overflow={noBar ? "hidden" : undefined}
			flexWrap="wrap"
			space={space}
			height={height}
		>
			{React.Children.map(children, (child) => (
				<Stack width={itemWidth}>{child}</Stack>
			))}
		</Stack>
	);
};

export default Reel;

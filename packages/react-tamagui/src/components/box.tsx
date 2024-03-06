import React from "react";
import { Stack, StackProps } from "tamagui";

export type BoxProps = StackProps & {
	padding?: string | number;
	borderWidth?: string | number;
	invert?: boolean;
};

/**
 * The Box component is a generic container that provides padding, border width,
 * and an optional inverted theme.
 *
 * More on Every Layout [Box](https://every-layout.dev/layouts/box/).
 */
export const Box: React.FC<BoxProps> = ({
	children,
	padding, // var(--s1)
	borderWidth, //  var(--border-thin)
	invert = false,
	...props
}) => {
	return (
		<Stack
			padding={padding}
			borderWidth={borderWidth}
			borderColor="black"
			backgroundColor={invert ? "var(--color-light)" : "inherit"}
			{...props}
		>
			{children}
		</Stack>
	);
};

import React from "react";
import { Stack } from "tamagui";

export type SwitcherProps = {
	children: React.ReactNode;
	threshold?: string;
	space?: string;
	limit?: number;
};

/**
 * The Switcher component switches directly between horizontal and vertical layouts at a given
 * threshold.
 *
 * More on Every Layout [Switcher](https://every-layout.dev/layouts/switcher/).
 */
export const Switcher: React.FC<SwitcherProps> = ({
	children,
	threshold, // 'var(--measure)',
	space, // 'var(--s1)',
	limit = 4,
}) => {
	return (
		<Stack display="flex" space={space} flexWrap="wrap">
			{React.Children.map(children, (child, index) => (
				<Stack
					flexGrow={1}
					width={index >= limit ? "100%" : `calc((${threshold} - 100%) * 999)`}
				>
					{child}
				</Stack>
			))}
		</Stack>
	);
};

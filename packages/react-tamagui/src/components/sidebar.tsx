import React, { Children } from 'react';
import { Stack } from '@tamagui/core';

export type SidebarProps = {
  children: React.ReactNode;
  side?: 'start' | 'end';
  sideWidth?: string;
  contentMin?: string;
  space?: string;
  noStretch?: boolean;
};

/**
 * The Sidebar component is used for placing two elements side-by-side.
 * If space permits, the sidebar element has a set width, and the companion takes
 * up the rest of the available horizontal space.
 * If not, the elements are collapsed into a single column, each taking up 100%
 * of the horizontal space.
 *
 * More on Every Layout [Sidebar](https://every-layout.dev/layouts/sidebar/).
 */
export const Sidebar: React.FC<SidebarProps> = ({
  side = 'start',
  sideWidth,
  contentMin = '50%',
  space = 'var(--s1)',
  noStretch = false,
  children,
}) => {
  // Determine the order of elements based on the 'side' prop
  const isSideStart = side === 'start';
  const firstChildStyle = isSideStart
    ? {}
    : { flexBasis: '0', flexGrow: 999, minWidth: contentMin };
  const secondChildStyle = isSideStart
    ? { flexBasis: '0', flexGrow: 999, minWidth: contentMin }
    : {};
  // Convert children to an array
  const childrenArray = Children.toArray(children);

  return (
    <Stack
      flexDirection="row"
      flexWrap="wrap"
      gap={space}
      alignItems={noStretch ? 'flex-start' : 'stretch'}
    >
      <Stack style={firstChildStyle}>{childrenArray[0]}</Stack>
      <Stack style={secondChildStyle}>{childrenArray[1]}</Stack>
    </Stack>
  );
};

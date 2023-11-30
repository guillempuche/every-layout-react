import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { toDimensionValue } from './utils';

export type SidebarProps = {
  children: React.ReactNode;
  side?: 'left' | 'right';
  sideWidth?: string | number;
  contentMin?: string | number;
  space?: string | number;
  noStretch?: boolean;
};

/**
 * The Sidebar component is used for placing two elements side-by-side.
 * If space permits, the sidebar element has a set width, and the companion takes
 * up the rest of the available horizontal space.
 * If not, the elements are collapsed into a single column, each taking up 100%
 * of the horizontal space.
 *
 * More on Every Layout [Sidebar](https://every-layout.dev/layouts/sidebar/)
 *
 * @param {SidebarProps} props - The properties for the Sidebar component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Sidebar component.
 * @param {'left'| 'right'} [props.side='left'] - Which element to treat as the sidebar (all values but `left` are considered `right`).
 * @param {string | number} [props.sideWidth] - Represents the width of the sidebar when adjacent. If not set (`null`) it defaults to the sidebar's content width.
 * @param {string | number} [props.contentMin='50%'] - The minimum width of the content element in the horizontal configuration.
 * @param {string | number} [props.space] - A margin value representing the space between the two elements.
 * @param {boolean} [props.noStretch=false] - Make the adjacent elements adopt their natural height.
 * @returns {React.ReactElement} The rendered Sidebar component.
 */
export const Sidebar: React.FC<SidebarProps> = ({
  children,
  side = 'left',
  sideWidth,
  contentMin = '50%',
  space, // 'var(--s1)'
  noStretch = false,
}) => {
  // useMemo is used to prevent unnecessary re-computations of the styles.
  // It will only recompute when the props change.
  const styles = useMemo(
    () =>
      // TODO: improve spacing when it is a string.
      StyleSheet.create({
        container: {
          display: 'flex',
          flexDirection: side === 'left' ? 'row' : 'row-reverse',
          flexWrap: 'wrap',
          alignItems: noStretch ? 'flex-start' : 'stretch',
          margin:
            typeof space === 'number'
              ? -space / 2
              : toDimensionValue(`-${space}`) || 0,
        },
        sidebar: {
          flexGrow: 1,
          flexBasis: toDimensionValue(sideWidth) || 'auto',
          margin:
            typeof space === 'number'
              ? toDimensionValue(space / 2)
              : toDimensionValue(space) || 0,
        },
        content: {
          flexGrow: 999,
          flexBasis: 0,
          minWidth: toDimensionValue(contentMin),
          margin:
            typeof space === 'number'
              ? toDimensionValue(space / 2)
              : toDimensionValue(space) || 0,
        },
      }),
    [side, sideWidth, contentMin, space, noStretch]
  );

  const [sidebar, content] = React.Children.toArray(children);

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>{sidebar}</View>
      <View style={styles.content}>{content}</View>
    </View>
  );
};

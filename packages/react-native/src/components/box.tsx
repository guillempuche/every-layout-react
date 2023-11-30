import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { toDimensionValue, toNumber } from './utils';

export type BoxProps = {
  children: React.ReactNode;
  padding?: string | number;
  borderWidth?: string | number;
  invert?: boolean;
};

/**
 * The Box component is a generic container that provides padding, border width,
 * and an optional inverted theme.
 *
 * @param {BoxProps} props - The properties for the Box component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Box component.
 * @param {string|number} [props.padding] - The padding value to be applied to the Box component.
 * @param {string|number} [props.borderWidth] - The border width value to be applied to the Box component.
 * @param {boolean} [props.invert=false] - Whether to apply an inverted theme.
 * Only recommended for greyscale designs.
 *
 * @returns {React.ReactElement} The rendered Box component.
 *
 * More on Every Layout [Box](https://every-layout.dev/layouts/box/)
 */
export const Box: React.FC<BoxProps> = ({
  children,
  padding, // var(--s1)
  borderWidth, //  var(--border-thin)
  invert = false,
}) => {
  // useMemo is used to prevent unnecessary re-computations of the styles.
  // It will only recompute when the props change.
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          padding: toDimensionValue(padding),
          borderWidth: toNumber(borderWidth),
          borderColor: 'black',
          backgroundColor: invert ? 'var(--color-light)' : 'inherit',
        },
      }),
    [padding, borderWidth, invert]
  );

  return <View style={styles.container}>{children}</View>;
};

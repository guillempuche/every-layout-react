import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { toDimensionValue } from './utils';

export type CenterProps = {
  children: React.ReactNode;
  maxWidth?: string | number;
  centerText?: boolean;
  gutters?: string | number;
  intrinsic?: boolean;
};

/**
 * The Center component is used for horizontally centering a block-level element,
 * with a max-width value representing the typographic measure.
 *
 * More on Every Layout [Center](https://every-layout.dev/layouts/center/)
 *
 * @param {CenterProps} props - The properties for the Center component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Center component.
 * @param {string | number} [props.maxWidth] - Max width value.
 * @param {boolean} [props.centerText=false] - Whether to center-align the text as well (`text-align: center`).
 * @param {string | number} [props.gutters] - The minimum space on either side of the content.
 * @param {boolean} [props.intrinsic=false] - Whether to center child elements based on their content width.
 * @returns {React.ReactElement} The rendered Center component.
 */
export const Center: React.FC<CenterProps> = ({
  children,
  maxWidth, // var(--measure)
  centerText = false,
  gutters,
  intrinsic = false,
}) => {
  // useMemo is used to prevent unnecessary re-computations of the styles.
  // It will only recompute when the props change.
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          maxWidth: toDimensionValue(maxWidth),
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: centerText ? 'center' : undefined,
          paddingLeft: toDimensionValue(gutters),
          paddingRight: toDimensionValue(gutters),
          display: intrinsic ? 'flex' : undefined,
          flexDirection: intrinsic ? 'column' : undefined,
          alignItems: intrinsic ? 'center' : undefined,
        },
      }),
    [maxWidth, centerText, gutters, intrinsic]
  );

  return <View style={styles.container}>{children}</View>;
};

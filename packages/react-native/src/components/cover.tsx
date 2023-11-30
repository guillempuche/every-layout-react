import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { toDimensionValue } from './utils';

export type CoverProps = {
  children: React.ReactNode;
  centered?: string;
  space?: string | number;
  minHeight?: string | number;
  noPad?: boolean;
};

/**
 * The Cover component is used for vertically centering a block-level element,
 * with an optional max-width value representing the typographic measure.
 * The Cover layout is based on Every Layout's Cover layout (https://every-layout.dev/layouts/cover/).
 *
 * @param {CoverProps} props - The properties for the Cover component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Cover component.
 * @param {string} [props.centered] - A simple selector such as an element or class selector, representing the centered (main) element in the cover.
 * @param {string | number} [props.space] - The minimum space between and around all of the child elements.
 * @param {string | number} [props.minHeight='100vh'] - The minimum height (block-size) for the Cover.
 * @param {boolean} [props.noPad=false] - Whether the spacing is also applied as padding to the container element.
 * @returns {React.ReactElement} The rendered Cover component.
 */
export const Cover: React.FC<CoverProps> = ({
  children,
  centered,
  space, // Default: 'var(--s1)'
  minHeight = '100vh',
  noPad = false,
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: toDimensionValue(minHeight),
          padding: !noPad
            ? typeof space === 'number'
              ? space
              : toDimensionValue(space) || 0
            : 0,
        },
        child: {
          marginVertical:
            typeof space === 'number' ? space : toDimensionValue(space) || 0,
        },
        centered: {
          marginVertical: 'auto',
        },
      }),
    [space, minHeight, noPad]
  );

  const childrenArray = React.Children.toArray(children);
  const centeredIndex = centered
    ? childrenArray.findIndex(
        (child) =>
          (child as React.ReactElement).type === centered ||
          (child as React.ReactElement).props.className === centered
      )
    : -1;

  return (
    <View style={styles.container}>
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={[
            styles.child,
            centeredIndex !== -1 && index === centeredIndex && styles.centered,
          ]}
        >
          {child}
        </View>
      ))}
    </View>
  );
};

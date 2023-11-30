import React, { useMemo } from 'react';
import { FlexAlignType, View, StyleSheet } from 'react-native';
import { toDimensionValue } from './utils';

export type ClusterProps = {
  children: React.ReactNode;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: FlexAlignType;
  space?: string | number;
};

/**
 * The Cluster component is used for grouping items, with control over the margin between them.
 *
 * More on Every Layout [Cluster](https://every-layout.dev/layouts/cluster/)
 *
 * @param {ClusterProps} props - The properties for the Cluster component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Cluster component.
 * @param {'flex-start'| 'flex-end'| 'center'| 'space-between'| 'space-around'| 'space-evenly'} [props.justify='flex-start']
 * @param {FlexAlignType} [props.align='flex-start']
 * @param {string | number} [props.space] - The minimum space between the clustered child elements.
 * @returns {React.ReactElement} The rendered Cluster component.
 */
export const Cluster: React.FC<ClusterProps> = ({
  children,
  justify = 'flex-start',
  align = 'flex-start',
  space, // 'var(--s1)'
}) => {
  // useMemo is used to prevent unnecessary re-computations of the styles.
  // It will only recompute when the props change.
  const styles = useMemo(
    () =>
      // TODO: improve spacing when it is a string.

      StyleSheet.create({
        // React Native doesn't support gap, so apply equal margins (positive
        // or negative) to the child elements and container to create space
        // between them.
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: justify,
          alignItems: align,
          margin:
            typeof space === 'number'
              ? -space / 2
              : toDimensionValue(`-${space}`) || 0,
        },
        child: {
          margin:
            typeof space === 'number'
              ? space / 2
              : toDimensionValue(space) || 0,
        },
      }),
    [justify, align, space]
  );

  // Wrap each child element with a View that applies the margin to create spacing
  const childrenWithSpacing = React.Children.map(children, (child) => {
    // If the current child is not a valid React element, don't modify it and return as-is
    if (!React.isValidElement(child)) {
      return child;
    }

    return <View style={styles.child}>{child}</View>;
  });

  return <View style={styles.container}>{childrenWithSpacing}</View>;
};

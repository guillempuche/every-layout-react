import React, { useMemo } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export type FrameProps = {
  child: React.ReactNode;
  aspectRatio?: number | string;
  fallback: React.ReactNode;
};

/**
 * The Frame component is used for augmenting image and video ratios.
 *
 * More on Every Layout [Frame](https://every-layout.dev/layouts/frame/)
 *
 * @param {FrameProps} props - The properties for the Frame component.
 * @param {React.ReactNode} props.child - The content to be rendered inside the Frame component. Ideally, it should be an Image or Video component.
 * @param {number | string} [props.aspectRatio='16:9'] - The aspect ratio for the Frame component, can be either a decimal number or a string in the format "width:height".
 * @param {React.ReactNode} props.fallback - The content to be rendered as a fallback when the child is not a valid Image or Video component.
 * @returns {React.ReactElement} The rendered Frame component.
 */
export const Frame: React.FC<FrameProps> = ({
  child,
  aspectRatio = '16:9',
  fallback,
}) => {
  const parsedRatio = parseRatio(aspectRatio);

  // useMemo is used to prevent unnecessary re-computations of the styles.
  // It will only recompute when the parsedRatio changes.
  const styles = useMemo(() => {
    if (parsedRatio === null) {
      // Default styles when the ratio is invalid.
      return StyleSheet.create({
        container: {
          width: '100%',
        },
      });
    }

    return StyleSheet.create({
      container: {
        width: '100%',
        aspectRatio: parsedRatio,
        overflow: 'hidden',
      },
      child: {
        width: '100%',
        height: '100%',
      },
    });
  }, [parsedRatio]);

  const isValidChild = (
    component: React.ReactNode
  ): React.ReactElement | null => {
    if (
      React.isValidElement(component) &&
      component.type === Image /* Add Video type check if necessary */
    ) {
      return component;
    }

    return null;
  };

  const renderContent = () => {
    const validChild = isValidChild(child);

    if (validChild) {
      return React.cloneElement(
        validChild,
        // Let's merge the new props with the existing ones.
        {
          ...validChild.props,
          style: { ...validChild.props.style, ...styles },
        }
      );
    }

    return fallback;
  };

  return <View style={styles.container}>{renderContent()}</View>;
};

const parseRatio = (ratio: string | number): number | null => {
  if (typeof ratio === 'number') {
    return ratio > 0 ? ratio : null;
  }

  const [width, height] = ratio.split(':').map(Number);
  if (width && height && width > 0 && height > 0) {
    return width / height;
  }

  return null;
};

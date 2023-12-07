import React from 'react';
import { Stack, Image as TamaguiImage } from '@tamagui/core';

export type FrameProps = {
  child: React.ReactNode;
  aspectRatio?: number | string;
  fallback: React.ReactNode;
};

/**
 * The Frame component is used for augmenting image and video ratios.
 *
 * More on Every Layout [Frame](https://every-layout.dev/layouts/frame/).
 */
export const Frame: React.FC<FrameProps> = ({
  child,
  aspectRatio = '16:9',
  fallback,
}) => {
  const isValidChild = (
    component: React.ReactNode
  ): React.ReactElement | null => {
    if (React.isValidElement(component) && component.type === TamaguiImage) {
      return component;
    }
    return null;
  };

  const renderContent = () => {
    const validChild = isValidChild(child);

    if (validChild) {
      return React.cloneElement(validChild, {
        ...validChild.props,
        style: { width: '100%', height: '100%', ...validChild.props.style },
      });
    }
    return fallback;
  };

  return (
    <Stack
      style={{
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden',
      }}
    >
      {renderContent()}
    </Stack>
  );
};

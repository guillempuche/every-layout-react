import React from 'react';
import { Stack } from '@tamagui/core';

export type FrameProps = {
  child: React.ReactNode;
  fallback: React.ReactNode;
  aspectRatio?: number | string;
};

/**
 * The Frame component is used for augmenting image and video ratios.
 *
 * More on Every Layout [Frame](https://every-layout.dev/layouts/frame/).
 */
export const Frame: React.FC<FrameProps> = ({
  child,
  fallback,
  aspectRatio = '16:9',
}) => {
  const isValidChild = (
    component: React.ReactNode
  ): React.ReactElement | null => {
    // if (React.isValidElement(component) && component.type === TamaguiImage) {
    if (React.isValidElement(component)) {
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

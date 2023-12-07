import React from 'react';
import { Stack, StackProps, Text } from '@tamagui/core';
import { toDimensionValue } from './utils';

export type CenterProps = StackProps & {
  maxWidth?: string | number;
  centerText?: boolean;
  gutters?: string | number;
  intrinsic?: boolean;
};

/**
 * The Center component is used for horizontally centering a block-level element,
 * with a max-width value representing the typographic measure.
 *
 * More on Every Layout [Center](https://every-layout.dev/layouts/center/).
 */
export const Center: React.FC<CenterProps> = ({
  children,
  maxWidth,
  centerText = false,
  gutters,
  intrinsic = false,
  ...props
}) => {
  return (
    <Stack
      maxWidth={toDimensionValue(maxWidth)}
      marginHorizontal="auto"
      paddingHorizontal={toDimensionValue(gutters)}
      alignItems={intrinsic ? 'center' : undefined}
      flexDirection={intrinsic ? 'column' : undefined}
      {...props}
    >
      {centerText ? <Text textAlign="center">{children}</Text> : children}
    </Stack>
  );
};

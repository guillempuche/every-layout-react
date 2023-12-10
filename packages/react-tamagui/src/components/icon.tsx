import React, { FC } from 'react';
import { Stack, Text } from '@tamagui/core';
// import { toDimensionValue } from './utils';

export interface IconProps {
  icon: React.ImgHTMLAttributes<HTMLImageElement>;
  text: string;
  space?: number | string;
  label?: string;
  // baseFontSize?: number;
}

/**
 * The Icon component for inline icon insertion.
 *
 */
export const Icon: FC<IconProps> = ({
  icon,
  text,
  space = 0,
  label,
  // baseFontSize = 16,
}) => {
  return (
    <Stack
      flexDirection="row"
      alignItems="baseline"
      justifyContent="flex-start"
      accessible={!!label}
      accessibilityLabel={label}
    >
      {/* <Svg
        source={icon}
        style={{
          marginEnd: toDimensionValue(space),
          width: baseFontSize,
          height: baseFontSize,
        }}
        resizeMode="contain"
      /> */}
      <Text marginStart={space}>{text}</Text>
    </Stack>
  );
};

import React from 'react';
import { Stack } from '@tamagui/core';

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
 *
 * The Cover layout is based on Every Layout's Cover layout (https://every-layout.dev/layouts/cover/).
 */
export const Cover: React.FC<CoverProps> = ({
  children,
  centered,
  space, // Default: 'var(--s1)'
  minHeight = '100vh',
  noPad = false,
}) => {
  const childrenArray = React.Children.toArray(children);
  const centeredIndex = centered
    ? childrenArray.findIndex(
        (child) =>
          (child as React.ReactElement).type === centered ||
          (child as React.ReactElement).props.className === centered
      )
    : -1;

  return (
    <Stack
      flexDirection="column"
      minHeight={minHeight}
      padding={!noPad ? space : 0}
    >
      {childrenArray.map((child, index) => (
        <Stack
          key={index}
          marginVertical={space}
          style={
            centeredIndex !== -1 && index === centeredIndex
              ? { marginVertical: 'auto' }
              : {}
          }
        >
          {child}
        </Stack>
      ))}
    </Stack>
  );
};

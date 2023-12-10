import React from 'react';
import { Stack as TStack } from '@tamagui/core';

export type StackProps = {
  children: React.ReactNode;
  space?: number | string;
  // recursive?: boolean;
};

/**
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 *
 * More on Every Layout [Stack](https://every-layout.dev/layouts/stack/)
 */
export const Stack: React.FC<StackProps> = ({
  children,
  space,
  // recursive = false,
}) => {
  return (
    <TStack flexDirection="column" justifyContent="flex-start" space={space}>
      {children}
    </TStack>
  );
};

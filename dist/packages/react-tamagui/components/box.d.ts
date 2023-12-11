import React from 'react';
import { StackProps } from '@tamagui/core';
export type BoxProps = StackProps & {
    padding?: string | number;
    borderWidth?: string | number;
    invert?: boolean;
};
/**
 * The Box component is a generic container that provides padding, border width,
 * and an optional inverted theme.
 *
 * More on Every Layout [Box](https://every-layout.dev/layouts/box/).
 */
export declare const Box: React.FC<BoxProps>;

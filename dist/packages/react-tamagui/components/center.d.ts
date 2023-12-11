import React from 'react';
import { StackProps } from '@tamagui/core';
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
export declare const Center: React.FC<CenterProps>;

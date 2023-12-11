import React, { FC } from 'react';
export interface IconProps {
    icon: React.ImgHTMLAttributes<HTMLImageElement>;
    text: string;
    space?: number | string;
    label?: string;
}
/**
 * The Icon component for inline icon insertion.
 *
 */
export declare const Icon: FC<IconProps>;

import React from 'react';
export type ReelProps = {
    children: React.ReactNode;
    itemWidth?: string;
    space?: string;
    height?: string | number;
    noBar?: boolean;
};
/**
 * Reel component creates a horizontal list (reel) of items.
 *
 * More on Every Layout [Reel](https://every-layout.dev/layouts/reel/)
 */
export declare const Reel: React.FC<ReelProps>;
export default Reel;

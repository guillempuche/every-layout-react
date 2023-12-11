import React from 'react';
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
export declare const Cover: React.FC<CoverProps>;

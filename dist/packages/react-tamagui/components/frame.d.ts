import React from "react";
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
export declare const Frame: React.FC<FrameProps>;

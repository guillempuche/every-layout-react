import React from "react";
export type StackProps = {
    children: React.ReactNode;
    space?: number | string;
};
/**
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 *
 * More on Every Layout [Stack](https://every-layout.dev/layouts/stack/)
 */
export declare const Stack: React.FC<StackProps>;

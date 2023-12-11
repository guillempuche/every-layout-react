import React from 'react';
export type SidebarProps = {
    children: React.ReactNode;
    side?: 'left' | 'right';
    sideWidth?: string;
    contentMin?: string;
    space?: string;
    noStretch?: boolean;
};
/**
 * The Sidebar component is used for placing two elements side-by-side.
 * If space permits, the sidebar element has a set width, and the companion takes
 * up the rest of the available horizontal space.
 * If not, the elements are collapsed into a single column, each taking up 100%
 * of the horizontal space.
 *
 * More on Every Layout [Sidebar](https://every-layout.dev/layouts/sidebar/).
 */
export declare const Sidebar: React.FC<SidebarProps>;

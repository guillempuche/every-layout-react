import React from 'react';
export type ClusterProps = {
    children: React.ReactNode;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    space?: string | number;
};
/**
 * The Cluster component is used for grouping items, with control over the margin between them.
 *
 * More on Every Layout [Cluster](https://every-layout.dev/layouts/cluster/).
 */
export declare const Cluster: React.FC<ClusterProps>;

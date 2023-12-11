import React from 'react';
export type ImposterProps = {
    children: React.ReactNode;
    visible: boolean;
    margin?: number | string;
    onClose?: () => void;
};

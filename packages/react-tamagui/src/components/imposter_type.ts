// SharedTypes.ts
import React from 'react';

export type ImposterProps = {
  children: React.ReactNode;
  visible: boolean;
  margin?: number | string;
  // targetRef?: React.RefObject<TargetRefType>;
  onClose?: () => void;
};

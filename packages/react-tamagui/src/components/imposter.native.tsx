import { Stack } from '@tamagui/core';
import { Modal, TouchableOpacity } from 'react-native';
import React from 'react';

import { ImposterProps } from './imposter_type';

// export type ImposterProps = StackProps & {
//   children: React.ReactNode;
//   visible: boolean;
//   margin?: number | string;
//   targetRef?: React.RefObject<HTMLElement>;
//   onClose?: () => void;
// };

/**
 * The Imposter component creates a modal overlay, which can be positioned over any element.
 * If no `targetRef` is provided, the Imposter will cover the entire visible screen.
 *
 * More on Every Layout [Center](https://every-layout.dev/layouts/center/).
 */
export const Imposter: React.FC<ImposterProps> = ({
  children,
  visible,
  margin = 0,
  onClose,
  ...props
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      onRequestClose={onClose}
      animationType="none"
    >
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={onClose}>
        <Stack
          style={{
            margin: margin,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          {children}
        </Stack>
      </TouchableOpacity>
    </Modal>
  );
};

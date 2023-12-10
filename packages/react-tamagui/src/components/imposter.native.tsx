// import React, { useEffect, useCallback, useRef } from 'react';
// import {
//   View,
//   Modal,
//   StyleSheet,
//   useWindowDimensions,
//   TouchableOpacity,
// } from 'react-native';

// export type ImposterProps = {
//   children: React.ReactNode;
//   visible: boolean;
//   margin?: number | string;
//   targetRef?: React.RefObject<View>;
//   onClose?: () => void;
// };

// /**
//  * The Imposter component creates a modal overlay, which can be positioned over any element.
//  * If no `targetRef` is provided, the Imposter will cover the entire visible screen.
//  *
//  * @param {ImposterProps} props - The properties for the Imposter component.
//  * @param {React.ReactNode} props.children - The content to be rendered inside the
//  * Imposter component.
//  * @param {boolean} props.visible - Whether the modal is visible.
//  * @param {number | string} [props.margin=0] - The minimum space between the element
//  * and the inside edges of the positioning container over which it is placed.
//  * @param {React.RefObject<View>} [props.targetRef] - A ref to the target element
//  * you want to position the Imposter over. If not provided, the Imposter will cover
//  * the entire visible screen.
//  * @param {() => void} [props.onClose] - Called when the area outside the modal is pressed.
//  * @returns {React.ReactElement} The rendered Imposter component.
//  */
// export const Imposter: React.FC<ImposterProps> = ({
//   children,
//   visible,
//   margin = 0,
//   targetRef,
//   onClose,
// }) => {
//   const windowDimensions = useWindowDimensions();
//   const imposterRef = useRef<View>(null);

//   // Function to process the margin prop and return numeric values for horizontal and vertical margins
//   const processMargin = useCallback((): {
//     horizontal: number;
//     vertical: number;
//   } => {
//     if (typeof margin === 'number') {
//       return { horizontal: margin, vertical: margin };
//     }

//     if (typeof margin === 'string') {
//       const [horizontal, vertical] = margin.split(' ').map((value) => {
//         if (value.endsWith('%')) {
//           const percentage = parseFloat(value) / 100;
//           return percentage * windowDimensions.width;
//         }
//         return parseFloat(value);
//       });
//       return { horizontal: horizontal ?? 0, vertical: vertical ?? 0 };
//     }

//     return { horizontal: 0, vertical: 0 };
//   }, [margin, windowDimensions]);

//   const { horizontal, vertical } = processMargin();

//   // Update modal dimensions based on window dimensions and margin
//   const updateDimensions = useCallback(() => {
//     const updatedWidth = windowDimensions.width - 2 * horizontal;
//     const updatedHeight = windowDimensions.height - 2 * vertical;

//     return { width: updatedWidth, height: updatedHeight };
//   }, [windowDimensions, horizontal, vertical]);

//   useEffect(() => {
//     updateDimensions();
//   }, [updateDimensions]);

//   // Position the Imposter relative to the target element, else the entire visible screen.
//   useEffect(() => {
//     if (visible && imposterRef.current) {
//       if (targetRef && targetRef.current) {
//         // Position the Imposter relative to the target element.
//         targetRef.current.measureInWindow((x, y, width, height) => {
//           imposterRef.current?.setNativeProps({
//             style: {
//               position: 'absolute',
//               top: y,
//               left: x,
//               zIndex: 1000,
//             },
//           });
//         });
//       } else {
//         // Position the Imposter to cover the entire visible screen
//         imposterRef.current?.setNativeProps({
//           style: {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             zIndex: 1000,
//             width: windowDimensions.width,
//             height: windowDimensions.height,
//           },
//         });
//       }
//     }
//   }, [visible, targetRef, imposterRef, windowDimensions]);

//   const styles = StyleSheet.create({
//     modalContainer: {
//       ...updateDimensions(),
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     outsideArea: {
//       flex: 1,
//     },
//   });

//   return (
//     <Modal
//       visible={visible}
//       onRequestClose={onClose}
//       transparent={true}
//       animationType="none"
//     >
//       <TouchableOpacity
//         style={styles.outsideArea}
//         activeOpacity={1}
//         onPress={onClose}
//       >
//         <View style={styles.modalContainer} ref={imposterRef}>
//           {children}
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   );
// };

import { Stack } from '@tamagui/core';
import { Modal, TouchableOpacity, View } from 'react-native';
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
export const Imposter: React.FC<ImposterProps<typeof Stack | View>> = ({
  children,
  visible,
  margin = 0,
  targetRef,
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

import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { toDimensionValue } from './utils';

export type StackProps = {
  children: React.ReactNode;
  space: string | number;
  recursive: boolean;
  splitAfter?: number;
};

const ComponentStack: React.FC<StackProps> = ({
  children,
  space = 8,
  recursive = false,
  splitAfter,
}) => {
  const [styles, setStyles] = useState<{
    child?: ViewStyle;
    splitAfter?: ViewStyle;
  }>({});

  useEffect(() => {
    const generatedStyles = {
      child: {
        marginTop: toDimensionValue(space),
      },
      splitAfter: {
        marginTop: toDimensionValue(space),
      },
    };

    setStyles(StyleSheet.create(generatedStyles));
  }, [space, recursive, splitAfter]);

  /**
   * The function goes through each child element and decides whether a margin
   * should be applied to the top of the element.
   */
  const renderChildren = () => {
    // Go through each child element one by one
    return React.Children.map(children, (child, index) => {
      // If the current child is not a valid React element, don't modify it and return as-is
      if (!React.isValidElement(child)) {
        return child;
      }

      // Determine if a margin should be applied to the top of the child element. How?
      // Imagine you have a stack of blocks, and you want to decide when to put a
      // little space between the blocks.
      // 1. First, you make sure that you are not looking at the very first block
      // (because it doesn't need any space above it).
      // 2. Then, you check if you should always put space between the blocks or
      // only when there is no space already.
      // 3. If both conditions are true, you put a space between the blocks.
      // Otherwise, you don't.
      const shouldApplyMargin = index > 0 && (recursive || !styles.child);

      // Prepare an array of styles to apply to the child element
      const style = [
        // Add margin to the top if needed
        shouldApplyMargin ? styles.child : {},
        // If splitAfter condition is met, add the splitAfter style
        splitAfter === index ? styles.splitAfter : {},
      ];

      // The purpose of the code is to create a new React element that is a copy
      // of the child element but with modified styles.
      return React.cloneElement(child, {
        ...child.props,
        style: [child.props.style, ...style],
      });
    });
  };

  return <View>{renderChildren()}</View>;
};

/**
 * Stack is responsible for handling the spacing between child elements along a vertical axis.
 *
 * It accepts an optional `space`, `recursive`, and `splitAfter` prop for customization.
 *
 * @param {StackProps} props - The properties for the ComponentStack component.
 * @param {React.ReactNode} props.children - The child elements of the stack.
 * @param {string | number} [props.space=8] - The margin value for spacing between child elements.
 * @param {boolean} [props.recursive=false] - Whether the margin should be applied recursively.
 * @param {number} [props.splitAfter] - The index after which the stack should split with an auto margin.
 * @returns {React.Element} The rendered ComponentStack component.
 *
 * More on Every Layout [Stack](https://every-layout.dev/layouts/stack/)
 */
// Ensure that it only re-renders when its props change.
export const Stack = React.memo(ComponentStack);

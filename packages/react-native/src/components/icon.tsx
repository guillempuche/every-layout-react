import React, { FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageProps,
  I18nManager,
} from 'react-native';
import { toDimensionValue } from './utils';

export interface IconProps {
  icon: ImageProps;
  text: string;
  space?: number | string;
  label?: string;
  baseFontSize?: number;
}

/**
 * The Icon component for inline icon insertion.
 *
 * @param {IconProps} props - The properties for the Icon component.
 * @param {ImageProps} props.icon - The source of the SVG icon, either a local asset or a
 * remote URL.
 * @param {string} props.text - The text that will appear next to the icon.
 * @param {number | string} [props.space] - The space between the text and the icon.
 * If not provided, natural word spacing is preserved.
 * @param {string} [props.label] - The label for the icon, which will be read by
 * assistive technologies like screen readers.
 * @param {number} [props.baseFontSize] - The label for the icon, which will be read by
 * assistive technologies like screen readers.
 * @returns {React.ReactElement} The rendered Icon component.
 */
export const Icon: FC<IconProps> = ({
  icon,
  text,
  space = 0,
  label,
  baseFontSize = 16,
}) => {
  const isRTL = I18nManager.isRTL;

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: isRTL ? 'flex-end' : 'flex-start',
    },
    icon: {
      marginEnd: isRTL ? 0 : toDimensionValue(space),
      marginStart: isRTL ? toDimensionValue(space) : 0,
      width: baseFontSize,
      height: baseFontSize,
    },
  });

  return (
    <View
      style={styles.container}
      accessible={!!label}
      accessibilityLabel={label}
    >
      {isRTL ? <Text>{text}</Text> : null}
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      {!isRTL ? <Text>{text}</Text> : null}
    </View>
  );
};

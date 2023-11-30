import React, { useEffect, useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';
import { toDimensionValue } from './utils';

export type ReelItem = {
  id: string;
  component: React.ReactNode;
};

interface ReelProps {
  data: ReelItem[];
  itemWidth?: number | string;
  space?: number | string;
  height?: number | string;
  noBar?: boolean;
}

/**
 * Reel component creates a horizontal list (reel) of items.
 *
 * @param {ReelProps} props - Properties for the Reel component.
 * @param {ReelItem[]} props.data - Data for the list items. Each item should have a unique 'id' and a 'component' (ReactNode) to render.
 * @param {number | string} [props.itemWidth] - The width of each item (child element) in the Reel.
 * @param {number | string} [props.space] - The space between Reel items (child elements).
 * @param {number | string} [props.height] - The height of the Reel itself.
 * @param {boolean} [props.noBar] - Whether to display the scrollbar.
 * @returns {React.ReactElement} The rendered Reel component.
 */
export const Reel: React.FC<ReelProps> = ({
  data,
  itemWidth = 'auto',
  space = 'auto',
  height = 'auto',
  noBar = false,
}) => {
  const parsedSpace = useMemo(
    () => (typeof space === 'number' ? space : undefined),
    [space]
  );
  const parsedHeight = useMemo(
    () => (typeof height === 'number' ? height : undefined),
    [height]
  );

  // Provide space at the bottom of the content container within the list, creating
  // a padding area to accommodate the scrollbar. The padding ensures that the
  // scrollbar doesn't overlap the last item in the list.
  const [listPadding, setListPadding] = useState(parsedSpace);

  useEffect(() => {
    if (noBar) {
      setListPadding(parsedSpace);
    } else {
      setListPadding(parsedSpace ? parsedSpace + 10 : undefined); // 10 is the height of the scrollbar
    }
  }, [noBar, parsedSpace]);

  const renderItem = ({ item }: ListRenderItemInfo<ReelItem>) => {
    return (
      <View
        style={{
          width: typeof itemWidth === 'number' ? itemWidth : undefined,
          marginRight: parsedSpace,
        }}
      >
        {item.component}
      </View>
    );
  };

  // useMemo is used to prevent unnecessary re-computations of the styles.
  // TODO: improve spacing when it is a string.
  const styles = useMemo(() => {
    return StyleSheet.create({
      contentContainer: {
        // paddingHorizontal: space / 2,
        paddingHorizontal:
          typeof space === 'number'
            ? toDimensionValue(space / 2)
            : toDimensionValue(space) || 0,
        paddingBottom: listPadding,
        height: parsedHeight,
      },
      // listContainer: {
      //   overflow: 'hidden',
      // },
      // list: {
      //   flexGrow: 0,
      //   flexDirection: 'row',
      // },
    });
  }, [space, listPadding, parsedHeight]);

  const keyExtractor = (item: ReelItem) => item.id;

  return (
    <FlatList
      data={data}
      horizontal
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      // style={styles.listContainer}
      // contentContainerStyle={[styles.list, styles.contentContainer]}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={!noBar}
    />
  );
};

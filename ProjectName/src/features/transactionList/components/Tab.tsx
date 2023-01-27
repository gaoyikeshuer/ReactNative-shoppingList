import React from 'react';
import {Text, Pressable, Animated} from 'react-native';

import tabStyle from './tab.styles';
import {useAppDispatch} from '../../../store/hooks';
import {useMonthTab} from '../../../store/monthTabSlice';
import {changeMonth} from '../../../store/monthTabSlice/monthtab.slice';
import {useThemeToggle} from '../../../store/themeToggleSlice';
import {MonthData, GroupData} from '../../../types/data.interface';

const Tab = ({
  monthData,
  Ref,
  DATA,
  scrollA,
}: {
  monthData: MonthData[];
  Ref: any;
  DATA: GroupData[];
  scrollA: any;
}) => {
  const dispatch = useAppDispatch();
  const monthTab = useMonthTab().monthState;

  const scrollValue = scrollA.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
  });
  const {isDarkModeState: isDark} = useThemeToggle();

  return (
    <Animated.View style={tabStyle(isDark, scrollValue).tabContainer}>
      <Animated.FlatList
        data={monthData}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                dispatch(changeMonth({item: item.month}));

                Ref.current.scrollToLocation({
                  sectionIndex: DATA.findIndex(object => {
                    return object.month == item.month;
                  }),
                  itemIndex: 0,
                });
              }}>
              <Text
                style={
                  item?.month == monthTab
                    ? tabStyle(isDark, scrollValue).selectedTabText
                    : tabStyle(isDark, scrollValue).tabText
                }>
                {item.monthName}
              </Text>
            </Pressable>
          );
        }}
      />
    </Animated.View>
  );
};

export default Tab;

import {Text, Pressable, Animated, StyleSheet} from 'react-native';
import React from 'react';
import {changeMonth} from '../../../store/monthTabSlice/monthTabSlice';
import {useAppDispatch} from '../../../store/hooks';
import {MonthData, GroupData} from '../../../types/Data';
import {useMonthTab} from '../../../store/monthTabSlice';
import {useThemeToggle} from '../../../store/themeToggleSlice';

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
  const darkMode = useThemeToggle().isDarkModeState;

  return (
    <Animated.View
      style={{
        opacity: scrollValue,
        position: 'absolute',
        top: 24,
        zIndex: 15,
        backgroundColor: darkMode == 'dark' ? '#212529' : '#efefef',

        width: '100%',
      }}>
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
                    ? styles.selectedTabText
                    : [
                        styles.tabText,
                        {
                          color: darkMode == 'dark' ? '#efefef' : 'black',
                        },
                      ]
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

const styles = StyleSheet.create({
  selectedTabText: {
    color: 'purple',
    fontFamily: 'Aspira',
    fontWeight: '500',
    marginHorizontal: 12,
    paddingVertical: 10,
  },

  tabText: {
    color: 'black',
    fontFamily: 'Aspira',
    fontWeight: '500',
    marginHorizontal: 12,
    paddingVertical: 10,
  },
});

export default Tab;

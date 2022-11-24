import {Text, View, FlatList, Pressable, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {changeMonth} from '../src/store/monthTabSlice';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

const TransactionTab = ({monthData, Ref, DATA, scrollA}) => {
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  // const dispatch = useDispatch();
  // const monthTab = useSelector(state => state.monthTab);
  // const value = useState(new Animated.Value(0))[0];

  const scrollValue = scrollA.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
  });
  const [selectedTab, setSelectedTab] = useState(null);

  return (
    <Animated.View
      style={{
        opacity: scrollValue,
        position: 'absolute',
        top: 24,
        zIndex: 15,
        backgroundColor: 'white',

        width: '100%',
      }}>
      <Animated.FlatList
        data={monthData}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                dispatch(changeMonth({month: item.month}));
                 setSelectedTab(item)
                Ref.current.scrollToLocation({
                  sectionIndex: DATA.findIndex(object => {
                    return object.month == item.month;
                  }),
                  itemIndex: 0,
                });
              }}>
              <Text
                style={item === selectedTab?  styles.selectedTabText: styles.tabText }>
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
    tabText :{
        marginHorizontal: 12,
        paddingVertical: 10,
        fontFamily: 'Aspira',
        fontWeight: '500',
        color: 'black',
    },

    selectedTabText:{
        marginHorizontal: 12,
        paddingVertical: 10,
        fontFamily: 'Aspira',
        fontWeight: '500',
        color: 'red',
    }
})

export default TransactionTab;

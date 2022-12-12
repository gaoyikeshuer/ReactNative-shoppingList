import {Text, View, FlatList, Pressable, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {changeMonth} from '../../../store/monthTabSlice';
import {useState} from 'react';
import {StyleSheet} from 'react-native';

const Tab = ({monthData, Ref, DATA, scrollA}) => {
  // const fadeAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const monthTab = useSelector(state => state.monthTab);
  // const value = useState(new Animated.Value(0))[0];

  const scrollValue = scrollA.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
  });
 const darkMode = useSelector(state => state.themeToggle)
 

  return (
    <Animated.View
      style={{
        opacity: scrollValue,
        position: 'absolute',
        top: 24,
        zIndex: 15,
        backgroundColor: darkMode.scheme == 'dark'?'#212529': '#efefef',

        width: '100%',
      }}>
      <Animated.FlatList
        data={monthData}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
               
                dispatch(changeMonth({item: item}));
              
                //  setSelectedTab(item)
           
                Ref.current.scrollToLocation({
                  sectionIndex: DATA.findIndex(object => {
                    return object.month == item.month;
                  }),
                  itemIndex: 0,
                });
              }}>
              <Text
                style={item?.month == monthTab.item?.month  ?  styles.selectedTabText: [styles.tabText,{color: darkMode.scheme=='dark'?'#efefef':'black'}] }>
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
        color:  'black',
    },

    selectedTabText:{
        marginHorizontal: 12,
        paddingVertical: 10,
        fontFamily: 'Aspira',
        fontWeight: '500',
        color: 'purple',
    }
})

export default Tab;

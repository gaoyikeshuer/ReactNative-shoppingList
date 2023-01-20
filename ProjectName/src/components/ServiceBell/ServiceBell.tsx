import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';
import {IconAlert} from '../../assets/icons';
import {toggleActive} from '../../store/modalToggleSlice/modalToggleSlice';
import {useAppDispatch} from '../../store/hooks';
import {useMessages} from '../../store/messagesSlice';

const ServiceBell = () => {
  const messages = useMessages().MessagesState;
  const dispatch = useAppDispatch();
  const spinValue = useState(new Animated.Value(0))[0];

  const spinBell = () => {
    Animated.sequence([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 70,
        useNativeDriver: true,
      }),
      Animated.timing(spinValue, {
        toValue: -1,
        duration: 70,
        useNativeDriver: true,
      }),
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 70,
        useNativeDriver: true,
      }),
      Animated.timing(spinValue, {
        toValue: 0,
        duration: 70,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const spin = spinValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-10deg', '10deg'],
  });

  return (
    <View>
      <Pressable
        onPressIn={spinBell}
        onPress={() => {
          dispatch(toggleActive());
        }}>
        {messages.length != 0 && (
          <View style={styles.alertNum}>
            <Text style={styles.messagesNum}>{messages.length}</Text>
          </View>
        )}

        <Animated.View style={{transform: [{rotate: spin}]}}>
          <IconAlert width={22} height={22} color="purple" />
        </Animated.View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  alertNum: {
    alignItems: 'center',
    backgroundColor: '#E00885',
    borderColor: '#efefef',
    borderRadius: 12,
    borderWidth: 2,

    left: -13,
    position: 'absolute',
    top: 5,
    width: 21,
    zIndex: 13,
  },
  messagesNum: {
    color: 'white',
    fontFamily: 'Aspira-Regular',
    fontSize: 11,
  },
});

export default ServiceBell;

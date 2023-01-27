import React, {useState} from 'react';
import {View, Text, Pressable, Animated} from 'react-native';

import {styles} from './servicebell.styles';
import {IconAlert} from '../../assets/icons';
import {useAppDispatch} from '../../store/hooks';
import {useMessages} from '../../store/messagesSlice';
import {toggleActive} from '../../store/modalToggleSlice/modaltoggle.slice';

const ServiceBell = () => {
  const {messages: messages} = useMessages();
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

export default ServiceBell;

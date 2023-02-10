import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';

import {styles} from './custom-button.styles';
import {CustomButtonType} from './custom-button.types';

const CustomButton: FC<CustomButtonType> = ({title, onPressFunction}) => {
  return (
    <Pressable style={styles.button} onPress={onPressFunction}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

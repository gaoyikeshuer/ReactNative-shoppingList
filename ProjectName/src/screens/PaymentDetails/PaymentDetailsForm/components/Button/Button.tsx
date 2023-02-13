import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';

import {styles} from './button.presets';
import {ButtonTypes} from './button.types';
import {ButtonTextPreset} from '../../../../../components/typography/button-text/button-text.types';
import ButtonText from '../../../../../components/typography/button-text/ButtonText';

const Button: FC<ButtonTypes> = ({
  label,
  onPress,
  variant = 'default',
  textStyle,
  disabled,
}) => {
  const {colors} = useTheme();
  let textPreset: ButtonTextPreset;
  switch (variant) {
    case 'text':
      textPreset = 'textButton';
      break;
    default:
      textPreset = 'defaultButton';
  }
  return (
    <Pressable style={styles[variant]} onPress={onPress}>
      <ButtonText preset={textPreset} style={textStyle}>
        {label}
      </ButtonText>
    </Pressable>
  );
};

export default Button;

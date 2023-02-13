import React, {FC} from 'react';
import {Controller, useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import {styles} from './base-input.styles';
import {CustomMessageInputTypes} from '../message-Input/message-input.types';

const BaseInput: FC<CustomMessageInputTypes> = ({
  name,
  title,
  placeholder,
  maxLength,
}) => {
  const {field, fieldState} = useController({
    name,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
        style={styles.textInput}
        maxLength={maxLength}
      />
    </View>
  );
};

export default BaseInput;

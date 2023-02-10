import React, {FC, useState} from 'react';
import {Controller, useController} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import {styles} from './message-input.styles';
import {CustomMessageInputTypes} from './message-input.types';

const CustomMessageInput: FC<CustomMessageInputTypes> = ({
  name,
  title,
  placeholder,
  maxLength,
}) => {
  const [input, setInput] = useState('');
  const {field, fieldState} = useController({name});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        value={field.value}
        onChangeText={text => {
          setInput(text);
          field.onChange(text);
        }}
        onBlur={field.onBlur}
        placeholder={placeholder}
        style={styles.textInput}
        maxLength={maxLength}
      />

      <View style={styles.inputAmountContainer}>
        <Text style={styles.inputAmount}>
          {' '}
          {input.length}/{maxLength}
        </Text>
      </View>
    </View>
  );
};

export default CustomMessageInput;

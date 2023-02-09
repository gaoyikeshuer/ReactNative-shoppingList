import React, {FC, useState} from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import {styles} from './message-input.styles';
import {CustomMessageInputTypes} from './message-input.types';

const CustomMessageInput: FC<CustomMessageInputTypes> = ({
  control,
  name,
  title,
  placeholder,
  maxLength,
}) => {
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={text => {
              setInput(text);
              onChange(text);
            }}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.textInput}
            maxLength={maxLength}
          />
        )}
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

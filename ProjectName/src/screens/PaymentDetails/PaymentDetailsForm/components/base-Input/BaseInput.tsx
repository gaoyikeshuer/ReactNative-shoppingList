import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import {styles} from './base-input.styles';
import {CustomMessageInputTypes} from '../message-Input/message-input.types';

const BaseInput: FC<CustomMessageInputTypes> = ({
  control,
  name,
  title,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            style={styles.textInput}
          />
        )}
      />
    </View>
  );
};

export default BaseInput;

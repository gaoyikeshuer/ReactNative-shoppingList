import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, TextInput} from 'react-native';

import {styles} from './custom-input.styles';
import {CustomMessageInputTypes} from '../customMessageInput/custom-message-input.types';

const CustomInput: FC<CustomMessageInputTypes> = ({
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

export default CustomInput;

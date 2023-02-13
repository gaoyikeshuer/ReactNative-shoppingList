import React, {FC} from 'react';
import {Controller, useController} from 'react-hook-form';
import {View, Text, TextInput, Image} from 'react-native';

import {DECIMAL_REGEX} from './amount-input.constants';
import {styles} from './amount-input.styles';
import {EU} from '../../../../../assets/pictures';
import {CustomMessageInputTypes} from '../message-Input/message-input.types';

const CustomAmountInput: FC<CustomMessageInputTypes> = ({
  name,
  title,
  placeholder,
}) => {
  const {field, fieldState} = useController({
    name,
  });
  return (
    <>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.container}>
        <TextInput
          keyboardType="decimal-pad"
          value={field.value}
          onChangeText={text => {
            if (DECIMAL_REGEX.test(text)) {
              field.onChange(text);
            }
          }}
          onBlur={field.onBlur}
          placeholder={placeholder}
          maxLength={12}
          style={styles.textAmountInput}
        />
        <View style={styles.currencyIconContainer}>
          <View style={styles.currencyIcon}>
            <Image source={EU} style={styles.flag} />
            <Text style={styles.currency}>EUR</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default CustomAmountInput;

import React, {FC} from 'react';
import {Controller, useController} from 'react-hook-form';
import {View, Text, TextInput, Image} from 'react-native';

import {DECIMAL_REGEX} from './amount-input.constants';
import {styles} from './amount-input.styles';
import {EU} from '../../../assets/pictures';
import {useTheme} from '../../theming';
import ErrorLabel from '../components/error-label/ErrorLabel';
import {CustomMessageInputTypes} from '../message-Input/message-input.types';

const AmountInput: FC<CustomMessageInputTypes> = ({
  name,
  title,
  placeholder,
  message,
}) => {
  const {field, fieldState} = useController({
    name,
  });
  const getIsDecimal = (text: string) => {
    if (DECIMAL_REGEX.test(text)) {
      field.onChange(text);
    }
  };
  const isError = !!message;
  const {colors} = useTheme();
  return (
    <>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.container}>
        <TextInput
          keyboardType="decimal-pad"
          value={field.value}
          onChangeText={text => getIsDecimal(text)}
          onBlur={field.onBlur}
          placeholder={placeholder}
          style={[
            styles.textAmountInput,
            isError && {borderColor: colors.error},
          ]}
        />
        <View
          style={[
            styles.currencyIconContainer,
            isError && {borderColor: colors.error},
          ]}>
          <View style={styles.currencyIcon}>
            <Image source={EU} style={styles.flag} />
            <Text style={styles.currency}>EUR</Text>
          </View>
        </View>
      </View>
      <ErrorLabel message={message} />
    </>
  );
};

export default AmountInput;

import React, {FC} from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, TextInput, Image} from 'react-native';

import {DECIMAL_REGEX} from './custom-amount-input.constants';
import {styles} from './custom-amount-input.styles';
import {CustomMessageInputTypes} from '../customMessageInput/custom-message-input.types';

const CustomAmountInput: FC<CustomMessageInputTypes> = ({
  control,
  name,
  title,
  placeholder,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Controller
        control={control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <View style={styles.container}>
            <TextInput
              keyboardType="decimal-pad"
              value={value}
              onChangeText={text => {
                if (DECIMAL_REGEX.test(text)) {
                  const formattedValue = text;

                  // setVal(formattedValue);
                  onChange(formattedValue);
                }
              }}
              onBlur={onBlur}
              placeholder={placeholder}
              maxLength={12}
              style={styles.textAmountInput}

              // selection={{ start: val.indexOf('.') , end: val.indexOf('.') }}
            />
            <View style={styles.currencyIconContainer}>
              <View style={styles.currencyIcon}>
                <Image
                  source={require('../../../../../assets/pictures/FlagofEurope.png')}
                  style={styles.flag}
                />
                <Text style={styles.currency}>EUR</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CustomAmountInput;

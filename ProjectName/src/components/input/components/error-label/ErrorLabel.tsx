import React from 'react';
import {View, Text} from 'react-native';

import {ErrorLabelTypes} from './error-label.types';
import {useTheme} from '../../../theming';
const ErrorLabel: React.FC<ErrorLabelTypes> = ({message}) => {
  const {colors} = useTheme();
  return (
    <View>
      <Text style={{color: colors.error}}>{message}</Text>
    </View>
  );
};

export default ErrorLabel;

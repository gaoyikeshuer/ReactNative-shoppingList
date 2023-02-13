import * as React from 'react';
import {Text} from 'react-native';

import {ButtonTextTypes} from './button-text.types';
import {useTheme} from '../../theming';

const ButtonText: React.FC<ButtonTextTypes> = ({preset, style, children}) => {
  const {colors} = useTheme();
  const presetColor = {
    color: colors.button[preset],
  };
  return <Text style={[presetColor, style]}>{children}</Text>;
};

export default ButtonText;

import {TextStyle} from 'react-native';

import {PressabelTypes} from '../../../../../components/buttons/pressable/pressable.types';

export type ButtonVariants = 'default' | 'text';

export type ButtonTypes = PressabelTypes & {
  label: string;
  onPress: () => void;
  variant?: ButtonVariants;
  textStyle?: TextStyle;
};

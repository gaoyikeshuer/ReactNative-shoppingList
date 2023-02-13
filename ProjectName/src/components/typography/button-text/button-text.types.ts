import {StyleProp, TextStyle, Text} from 'react-native';

export type ButtonTextPreset = 'defaultButton' | 'textButton';
export type ButtonTextTypes = React.ComponentProps<typeof Text> & {
  preset: ButtonTextPreset;
  style?: StyleProp<TextStyle>;
};

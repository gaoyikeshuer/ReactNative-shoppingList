import {GestureResponderEvent} from 'react-native';

export type CustomButtonType = {
  title: string;
  onPressFunction: (event: GestureResponderEvent) => void;
};

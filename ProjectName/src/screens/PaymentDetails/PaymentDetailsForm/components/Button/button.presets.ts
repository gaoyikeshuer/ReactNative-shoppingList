import {StyleSheet, ViewStyle} from 'react-native';

import {TOKENS} from '../../../../../components/ads/dist';

const BASE: ViewStyle = {
  width: undefined,
  height: TOKENS.buttonDefaultHeight.number,
  borderRadius: TOKENS.buttonDefaultBorderRadius.number,
  alignItems: TOKENS.buttonDefaultTextAlign,
  justifyContent: TOKENS.buttonDefaultTextAlign,
  marginBottom: TOKENS.buttonDefaultMarginBottom.number,
};

export const styles = StyleSheet.create({
  default: {
    ...BASE,
    backgroundColor: TOKENS.buttonPrimaryBackgroundColor,
  },
  text: {
    ...BASE,
    backgroundColor: TOKENS.buttonTertiaryBackgroundColor,
  },
});

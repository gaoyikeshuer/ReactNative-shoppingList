import { TextColor } from '../text/text.types';
import { ContactItemPresets } from '../contact-list-item/contact-list-item.types';

export type IconVariants =
  | 'name'
  | 'error'
  | 'success'
  | 'accent'
  | 'action'
  | 'goto'
  | 'info'
  | 'green'
  | 'alert'
  | 'chevron'
  | 'secure';

type IconPreset = {
  main: string;
  background: string;
};
type IconPresets = Record<IconVariants, IconPreset>;

type TextPresets = Record<TextColor, string>;

export type Theme = {
  isDark: boolean;
  colors: {
    button: {
      defaultButton: string;
      outlineButton: string;
      textButton: string;
      outlineButtonBorder: string;
      buttonDisabled: string;
    };
    typography: {
      primaryHeading: string;
      secondaryHeading: string;
      tertiaryHeading: string;
      textPlaceholder: string;
      text: TextPresets;
    };
    gradient: {
      color1: string;
      color2: string;
    };
    line: string;
    backgroundIcon: string;
    borderFocused: string;
    borderIcon: string;
    borderInput: string;
    borderInputSecondary: string;
    label: string;
    labelFocused: string;
    error: string;
    currencyPad: string;
    seat1: string;
    balance: {
      positive: string;
      negative: string;
    };
    background: string;
    backgroundSecondary: string;
    backgroundHeaderIos: string;
    loader: string;
    border: string;
    icon: IconPresets;
    tab: {
      text: string;
      borderActive: string;
      borderInactive: string;
    };
    divider: string;
    dividerAccent: string;
    errorInfoDivider: string;
    contactListHeaderBackground: string;
    contactListDivider: string;
    checkbox: {
      border: string;
      background: string;
    };
    picker: {
      modalBackground: string;
      textDone: string;
      headingText: string;
      chevron: string;
    };
    contactListItem: {
      subLabelText: string;
      recentListHeader: string;
    } & ContactItemPresets;
    switch: {
      thumbDisabled: string;
      trackDisabled: string;
      switchTrackOff: string;
      switchTrackOn: string;
    };
    stepper: {
      active: string;
      inactive: string;
    };
    expandableText: {
      backgroundColor: string;
      chevronColor: string;
      bulletPoint: string;
    };
    documentTitleText: string;
    hyperlink: {
      color: string;
    };
  };
};

export type ThemeProviderTypes = {
  value: Theme;
  children: React.ReactNode; // otherwise error appears "Property 'children does not exist on type 'X'"
};

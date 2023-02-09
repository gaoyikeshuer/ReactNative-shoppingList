import { AIB_COLORS } from '../styles'
import { TOKENS } from '../ads/dist';
import type { Theme } from './theme.types';

const DefaultTheme: Theme = {
  isDark: false,
  colors: {
    button: {
      defaultButton: AIB_COLORS.defaultButton,
      outlineButton: AIB_COLORS.outlineButton,
      textButton: AIB_COLORS.textButton,
      outlineButtonBorder: TOKENS.buttonSecondaryBorderColor,
      buttonDisabled: AIB_COLORS.buttonDisabled,
    },
    typography: {
      primaryHeading: TOKENS.colorHeadingPrimary,
      secondaryHeading: TOKENS.colorHeadingSecondary,
      tertiaryHeading: TOKENS.colorHeadingTertiary,
      textPlaceholder: AIB_COLORS.textPlaceholder,
      text: {
        primary: AIB_COLORS.text,
        secondary: AIB_COLORS.textSecondary,
      },
    },
    gradient: {
      color1: AIB_COLORS.gradientDarkPurple,
      color2: AIB_COLORS.gradientColor2Light,
    },
    line: AIB_COLORS.line,
    backgroundIcon: AIB_COLORS.backgroundIcon,
    border: AIB_COLORS.borderLightColor,
    borderFocused: AIB_COLORS.borderLightFocus,
    borderIcon: AIB_COLORS.borderIcon,
    borderInput: AIB_COLORS.borderInput,
    borderInputSecondary: AIB_COLORS.borderLightColor,
    label: AIB_COLORS.label,
    labelFocused: AIB_COLORS.labelFocused,
    error: AIB_COLORS.error,
    currencyPad: AIB_COLORS.padLight,
    seat1: AIB_COLORS.seat1Light,
    balance: {
      positive: AIB_COLORS.textGreen,
      negative: AIB_COLORS.textPurple,
    },
    background: AIB_COLORS.backgroundPrimary,
    backgroundSecondary: AIB_COLORS.backgroundSecondary,
    backgroundHeaderIos: AIB_COLORS.backgroundHeaderIos,
    loader: AIB_COLORS.loader,
    icon: {
      info: {
        main: AIB_COLORS.iconMediumGrey,
        background: AIB_COLORS.transparent,
      },
      action: {
        main: AIB_COLORS.iconGrey,
        background: AIB_COLORS.transparent,
      },
      goto: {
        main: AIB_COLORS.iconPurple,
        background: AIB_COLORS.transparent,
      },
      name: {
        main: AIB_COLORS.text,
        background: AIB_COLORS.iconBackgroundGrey,
      },
      accent: {
        main: AIB_COLORS.iconPurple,
        background: AIB_COLORS.iconBackgroundPurple,
      },
      error: {
        main: AIB_COLORS.iconPurple,
        background: AIB_COLORS.iconBackgroundPurple,
      },
      success: {
        main: AIB_COLORS.iconGreen,
        background: AIB_COLORS.iconBackgroundLightGreen,
      },
      green: {
        main: AIB_COLORS.iconWhite,
        background: AIB_COLORS.iconBackgroundGreen,
      },
      alert: {
        main: AIB_COLORS.iconMediumGrey,
        background: AIB_COLORS.transparent,
      },
      chevron: {
        main: AIB_COLORS.iconChevronLight,
        background: AIB_COLORS.transparent,
      },
      secure: {
        main: AIB_COLORS.iconSecureLight,
        background: AIB_COLORS.transparent,
      },
    },
    tab: {
      text: AIB_COLORS.tabText,
      borderActive: AIB_COLORS.borderActiveTab,
      borderInactive: AIB_COLORS.borderInactiveTab,
    },
    divider: AIB_COLORS.dividerLight,
    dividerAccent: AIB_COLORS.dividerAccent,
    errorInfoDivider: AIB_COLORS.errorInfoDividerLight,
    contactListHeaderBackground: AIB_COLORS.contactListHeaderBackgroundLight,
    contactListDivider: AIB_COLORS.contactListDividerLight,
    checkbox: {
      border: AIB_COLORS.checkBoxBorderLight,
      background: AIB_COLORS.checkBoxBackgroundLight,
    },
    picker: {
      modalBackground: AIB_COLORS.pickerModalBackgroundLight,
      textDone: AIB_COLORS.pickerDoneButtonLight,
      headingText: AIB_COLORS.pickerHeadingTextLight,
      chevron: AIB_COLORS.pickerChevronLight,
    },
    contactListItem: {
      subLabelText: AIB_COLORS.subLabelText,
      recentListHeader: AIB_COLORS.contactListRecentHeaderLight,
      regular: {
        iconBackground: AIB_COLORS.iconBackgroundGrey,
        letterIconText: AIB_COLORS.letterIconText,
      },
      recent: {
        iconBackground: AIB_COLORS.contactListRecentItemIconBackgroundLight,
        letterIconText: AIB_COLORS.contactListRecentItemIconTextLight,
      },
    },
    switch: {
      thumbDisabled: AIB_COLORS.switchThumbDisabled,
      trackDisabled: AIB_COLORS.switchTrackDisabled,
      switchTrackOff: AIB_COLORS.switchTrackOff,
      switchTrackOn: AIB_COLORS.switchTrackOn,
    },
    stepper: {
      active: AIB_COLORS.gradientBackgroundLilac,
      inactive: AIB_COLORS.switchTrackDisabled,
    },
    expandableText: {
      backgroundColor: AIB_COLORS.expandableTextBackground,
      chevronColor: AIB_COLORS.expandableTextChevron,
      bulletPoint: AIB_COLORS.bulletPoint,
    },
    documentTitleText: AIB_COLORS.textGreen,
    hyperlink: {
      color: AIB_COLORS.textGreenCore,
    },
  },
};

export default DefaultTheme;

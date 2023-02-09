import { AIB_COLORS } from '../styles';
import { TOKENS } from '../ads/dist';
import type { Theme } from './theme.types';

const DarkTheme: Theme = {
  isDark: true,
  colors: {
    button: {
      defaultButton: TOKENS.buttonPrimaryDarkColor,
      outlineButton: AIB_COLORS.outlineButtonDark,
      textButton: AIB_COLORS.textButtonDark,
      outlineButtonBorder: AIB_COLORS.borderOutlineButtonDark,
      buttonDisabled: AIB_COLORS.buttonDisabledDark,
    },
    line: AIB_COLORS.lineDark,
    backgroundIcon: AIB_COLORS.backgroundIconDark,
    border: AIB_COLORS.borderDarkColor,
    borderFocused: AIB_COLORS.borderDarkFocus,
    borderIcon: AIB_COLORS.borderIconDark,
    borderInput: AIB_COLORS.borderInputDark,
    borderInputSecondary: AIB_COLORS.borderInputDark,
    label: AIB_COLORS.labelDark,
    labelFocused: AIB_COLORS.labelDarkFocused,
    error: AIB_COLORS.errorDark,
    currencyPad: AIB_COLORS.padDark,
    seat1: AIB_COLORS.seat1Dark,
    typography: {
      primaryHeading: TOKENS.headingPrimaryDarkColor,
      secondaryHeading: TOKENS.headingSecondaryDarkColor,
      tertiaryHeading: TOKENS.headingTertiaryDarkColor,
      textPlaceholder: AIB_COLORS.textSecondaryDark,
      text: {
        primary: AIB_COLORS.textDark,
        secondary: AIB_COLORS.textSecondaryDark,
      },
    },
    gradient: {
      color1: AIB_COLORS.gradientCorePurple,
      color2: AIB_COLORS.gradientDarkPurple,
    },
    balance: {
      positive: AIB_COLORS.textGreenDark,
      negative: AIB_COLORS.textPinkDark,
    },
    background: AIB_COLORS.backgroundPrimaryDark,
    backgroundSecondary: AIB_COLORS.backgroundSecondaryDark,
    backgroundHeaderIos: AIB_COLORS.backgroundHeaderIosDark,
    loader: AIB_COLORS.loaderDark,
    icon: {
      info: {
        main: AIB_COLORS.iconMediumGreyDark,
        background: AIB_COLORS.transparent,
      },
      action: {
        main: AIB_COLORS.iconMediumGreyDark,
        background: AIB_COLORS.transparent,
      },
      goto: {
        main: AIB_COLORS.iconMediumGreyDark,
        background: AIB_COLORS.transparent,
      },
      name: {
        main: AIB_COLORS.iconMediumGreyDark,
        background: AIB_COLORS.iconBackgroundGreyDark,
      },
      accent: {
        main: AIB_COLORS.textDark,
        background: AIB_COLORS.iconBackgroundGreyDark,
      },
      error: {
        main: AIB_COLORS.iconPurpleDark,
        background: AIB_COLORS.iconBackgroundPurpleDark,
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
        main: AIB_COLORS.iconDark,
        background: AIB_COLORS.transparent,
      },
      chevron: {
        main: AIB_COLORS.iconChevronDark,
        background: AIB_COLORS.transparent,
      },
      secure: {
        main: AIB_COLORS.iconSecureDark,
        background: AIB_COLORS.transparent,
      },
    },
    tab: {
      text: AIB_COLORS.tabTextDark,
      borderActive: AIB_COLORS.borderActiveTabDark,
      borderInactive: AIB_COLORS.borderInactiveTabDark,
    },
    checkbox: {
      border: AIB_COLORS.checkBoxBorderDark,
      background: AIB_COLORS.checkBoxBackgroundDark,
    },
    picker: {
      modalBackground: AIB_COLORS.pickerModalBackgroundDark,
      textDone: AIB_COLORS.pickerDoneButtonDark,
      headingText: AIB_COLORS.pickerHeadingTextDark,
      chevron: AIB_COLORS.pickerChevronDark,
    },
    divider: AIB_COLORS.dividerDark,
    dividerAccent: AIB_COLORS.dividerDark,
    errorInfoDivider: AIB_COLORS.errorInfoDividerDark,
    contactListHeaderBackground: AIB_COLORS.contactListHeaderBackgroundDark,
    contactListDivider: AIB_COLORS.contactListDividerDark,
    contactListItem: {
      recentListHeader: AIB_COLORS.contactListRecentHeaderDark,
      subLabelText: AIB_COLORS.subLabelTextDark,
      regular: {
        iconBackground: AIB_COLORS.iconBackgroundGreyDark,
        letterIconText: AIB_COLORS.letterIconTextDark,
      },
      recent: {
        iconBackground: AIB_COLORS.contactListRecentItemIconBackgroundDark,
        letterIconText: AIB_COLORS.contactListRecentItemIconTextDark,
      },
    },
    switch: {
      thumbDisabled: AIB_COLORS.switchThumbDisabledDark,
      trackDisabled: AIB_COLORS.switchTrackDisabledDark,
      switchTrackOff: AIB_COLORS.switchTrackOffDark,
      switchTrackOn: AIB_COLORS.switchTrackOnDark,
    },
    stepper: {
      active: AIB_COLORS.borderDarkFocus,
      inactive: AIB_COLORS.borderDarkColor,
    },
    expandableText: {
      backgroundColor: AIB_COLORS.expandableTextBackgroundDark,
      chevronColor: AIB_COLORS.expandableTextChevronDark,
      bulletPoint: AIB_COLORS.bulletPointDark,
    },
    documentTitleText: AIB_COLORS.textGreenCore,
    hyperlink: {
      color: AIB_COLORS.textGreenDark,
    },
  },
};

export default DarkTheme;
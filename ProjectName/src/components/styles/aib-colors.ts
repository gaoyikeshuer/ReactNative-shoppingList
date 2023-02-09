import { palette } from './palette';

/**
 * Roles for colors. Prefer using these over the palette.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color. It makes more sense to
 * put that in the <Spinner /> component.
 */
const color = {
  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  primary: palette.corePurple,
  error: palette.red,
  errorDark: palette.darkErrorRed,
  loader: palette.corePurple,
  loaderDark: palette.grey03,
  /**
   * The screen background.
   */
  backgroundPrimary: palette.white,
  backgroundSecondary: palette.grey01,
  backgroundPrimaryDark: palette.dark04,
  backgroundSecondaryDark: palette.dark01,
  backgroundIcon: palette.lightPink,
  backgroundIconDark: palette.transparent,
  backgroundHeaderIos: palette.grey10,
  backgroundHeaderIosDark: palette.grey08,
  /**
   * A subtle color used for borders and lines.
   */
  borderDarkColor: palette.dark05,
  borderLightColor: palette.grey03,
  borderDarkFocus: palette.dark03,
  borderLightFocus: palette.corePurple,
  borderIcon: palette.mediumPurple,
  borderIconDark: palette.dark03,
  line: palette.grey03,
  lineDark: palette.grey06,
  borderOutlineButton: palette.grey07,
  borderOutlineButtonDark: palette.grey09,
  borderInput: palette.grey07,
  borderInputDark: palette.grey09,
  borderActiveTab: palette.corePurple,
  borderInactiveTab: palette.dark03,
  borderActiveTabDark: palette.dark03,
  borderInactiveTabDark: palette.dark02,
  borderButtonDashed: palette.dark02,
  tabText: palette.grey07,
  tabTextDark: palette.dark02,
  /**
   * color of heading text in many components.
   */
  heading1: palette.corePurple,
  heading2: palette.corePurple,
  heading3: palette.grey07,
  heading4: palette.grey07,
  heading5: palette.grey07,
  heading6: palette.grey07,
  /**
   * color of heading text in many components.
   */
  primaryHeading: palette.purpleCore,
  secondaryHeading: palette.grey07,
  tertiaryHeading: palette.white,
  headingDark: palette.dark03,
  /**
   * The default color of text in many components.
   */
  label: palette.grey07,
  labelDark: palette.dark02,
  labelFocused: palette.corePurple,
  labelDarkFocused: palette.dark03,
  text: palette.grey07,
  textDark: palette.dark03,
  textSecondary: palette.grey07,
  textSecondaryDark: palette.dark02,
  textPlaceholder: palette.grey05,
  textPlaceholderDark: palette.dark02,
  textPurple: palette.corePurple,
  textPurpleDark: palette.purpleLight05,
  textGreen: palette.greenDark,
  textGreenCore: palette.greenCore,
  textGreenDark: palette.darkModeGreen,
  textPinkDark: palette.darkModePink,
  buttonText: palette.grey07,
  textWhite: palette.white,
  /**
   * The color of text in buttons
   */
  defaultButton: palette.white,
  defaultButtonDark: palette.white,
  textButton: palette.grey07,
  textButtonDark: palette.dark02,
  outlineButton: palette.grey07,
  outlineButtonDark: palette.grey02,
  /**
   * The default background color of buttons in Light and Dark modes.
   */
  defaultButtonBackground: palette.greenDark,
  disabledButtonBackground: palette.grey04,
  disabledButtonBackgroundDark: palette.grey06,
  /**
   * The default color for currency (amount) pad
   */
  padLight: palette.grey00,
  padDark: palette.dark01,
  seat1Light: palette.grey01,
  seat1Dark: palette.dark01,
  textButtonWhite: palette.white,
  /**
   * The default color of buttons in Light and Dark modes.
   */
  buttonDefault: palette.greenDark,
  buttonNegative: palette.red,
  buttonDisabled: palette.grey04,
  buttonDisabledDark: palette.grey06,
  /**
   * The default color of icons in Light and Dark modes.
   */
  iconLight: palette.corePurple,
  iconLightGray: palette.grey04,
  iconPurple: palette.corePurple,
  iconPurpleDark: palette.purpleLight03,
  iconGreen: palette.greenDark,
  iconGrey: palette.grey04,
  iconDark: palette.dark03,
  iconWhite: palette.white,
  iconMediumGrey: palette.grey05,
  iconMediumGreyDark: palette.grey03,
  iconBackgroundPurple: palette.purpleLight02,
  iconBackgroundPurpleDark: palette.purpleDark02,
  iconBackgroundLightGreen: palette.lightGreen01,
  iconBackgroundGrey: palette.grey02,
  iconBackgroundGreyDark: palette.grey08,
  iconBackgroundGreen: palette.greenDark,
  iconChevronLight: palette.grey07,
  iconChevronDark: palette.dark02,
  iconSecureLight: palette.grey04,
  iconSecureDark: palette.dark02,
  /**
   * The default color of icons in Light and Dark modes.
   */
  gradientDarkPurple: palette.purpleDark,
  gradientCorePurple: palette.purpleCore,
  gradientColor2Light: palette.lilacBackground,
  gradientBackgroundLilac: palette.lilac,
  /**
   * The default color of divider in Light and Dark modes.
   */
  dividerDark: palette.dark05,
  dividerLight: palette.grey03,
  dividerAccent: palette.purpleLight03,
  dividerSecondary: palette.mediumPurple,
  errorInfoDividerLight: palette.grey03,
  errorInfoDividerDark: palette.grey09,
  /**
   * The default color of divider in Light and Dark modes.
   */
  contactListHeaderBackgroundDark: palette.dark01,
  contactListHeaderBackgroundLight: palette.grey01,
  contactListDividerLight: palette.grey03,
  contactListDividerDark: palette.dark05,
  contactListRecentItemIconBackgroundDark: palette.purpleLight03,
  contactListRecentItemIconBackgroundLight: palette.purpleLight02,
  contactListRecentItemIconTextDark: palette.corePurple,
  contactListRecentItemIconTextLight: palette.corePurple,
  contactListRecentHeaderDark: palette.dark02,
  contactListRecentHeaderLight: palette.grey07,

  /**
   * The default color of checkbox in Light and Dark modes.
   */
  checkBoxBorderLight: palette.purpleCore,
  checkBoxBorderDark: palette.purpleLight04,
  checkBoxBackgroundLight: palette.purpleCore,
  checkBoxBackgroundDark: palette.purpleLight04,
  pickerModalBackgroundDark: palette.grey08,
  pickerModalBackgroundLight: palette.grey11,
  pickerDoneButtonDark: palette.dark03,
  pickerDoneButtonLight: palette.blue01,
  pickerHeadingTextLight: palette.grey07,
  pickerHeadingTextDark: palette.dark02,
  pickerChevronLight: palette.grey04,
  pickerChevronDark: palette.dark02,
  /**
   * The default color of toast.
   */
  toastBackground: palette.greenDark,
  /**
   * The default color of switch.
   */
  switchThumb: palette.white,
  switchThumbDisabled: palette.white,
  switchThumbDisabledDark: palette.dark06,
  switchTrackOn: palette.purpleCore,
  switchTrackOnDark: palette.purpleLight04,
  switchTrackOff: palette.grey03,
  switchTrackOffDark: palette.grey06,
  switchTrackDisabled: palette.grey02,
  switchTrackDisabledDark: palette.dark05,
  /**
   * The default color of contact list item in Light and Dark modes.
   */
  subLabelText: palette.grey07,
  subLabelTextDark: palette.dark02,
  letterIconText: palette.grey07,
  letterIconTextDark: palette.dark03,

  expandableTextBackground: palette.lightPurple,
  expandableTextBackgroundDark: palette.dark01,
  expandableTextChevron: palette.corePurple,
  expandableTextChevronDark: palette.lightPurple,
  bulletPoint: palette.purpleLight06,
  bulletPointDark: palette.dark02,
  documentBackground: palette.grey05,

  disclaimerTextBackground: palette.lightPurple,
  disclaimerTextContent: palette.corePurple,
  disclaimerTextBorder: palette.mediumPurple,
};

export default color;
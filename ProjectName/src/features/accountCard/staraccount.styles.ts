import {StyleSheet} from 'react-native';

const theme = {
  light: {
    backgroundColor: 'white',
    color: '6E6E6E',
  },
  dark: {
    backgroundColor: '#5A6168',
    color: 'black',
  },
};

const AccountCardStyle = (isDark: string) => {
  const currentTheme = isDark == 'dark' ? theme.dark : theme.light;
  return StyleSheet.create({
    accountCardContainer: {
      backgroundColor: currentTheme.backgroundColor,
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 17,
      marginHorizontal: 12,
      marginTop: 31,
      marginVertical: 12,
      overflow: 'hidden',
    },
    bankContainer: {
      justifyContent: 'space-between',
      marginTop: 16,
    },
    bankInfo: {
      color: '#6E6E6E',
      fontFamily: 'Aspira',
      fontSize: 14,
    },
    bankNum: {
      color: '#6E6E6E',
      fontFamily: 'Aspira',
      fontSize: 14,
      marginBottom: 4,
    },
    bankTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bankTitleText: {
      color: currentTheme.color,
      fontFamily: 'Aspira',
    },
    greenStrip: {},
    money: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    moneyText: {
      color: 'black',
      fontFamily: 'Aspira-Medium',
      fontSize: 20,
      fontWeight: '500',
      lineHeight: 24,
      marginBottom: 14,
    },
    starContainer: {
      flexDirection: 'column',
      flex: 1,
      paddingHorizontal: 16,
    },
    starTitle: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 4,
      paddingTop: 11,
    },
    textTitle: {
      color: 'black',
      fontFamily: 'Aspira-Medium',
      fontSize: 18,
      fontWeight: '500',
    },
  });
};

export default AccountCardStyle;
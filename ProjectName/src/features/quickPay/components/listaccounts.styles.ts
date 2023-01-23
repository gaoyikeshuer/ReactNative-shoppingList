import {StyleSheet} from 'react-native';
const theme = {
  light: {
    color: 'black',
  },
  dark: {
    color: '#6E6E6E',
  },
};
const listAccountsStyle = (isDark: string) => {
  const currentTheme = isDark == 'dark' ? theme.dark : theme.light;
  return StyleSheet.create({
    avatarName: {
      color: currentTheme.color,
      fontFamily: 'Aspira-Medium',
      fontSize: 11,
      fontWeight: '500',
      marginTop: 5,
    },
    avatarWrap: {
      alignItems: 'center',
      flex: 0.2,
      marginTop: 15,
    },
  });
};
export default listAccountsStyle;

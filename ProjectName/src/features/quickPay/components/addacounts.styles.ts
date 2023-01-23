import {StyleSheet} from 'react-native';
const theme = {
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  dark: {
    backgroundColor: '#5A6168',
    color: '#6E6E6E',
  },
};
const addAcountStyles = (isDark: string) => {
  const currentTheme = isDark == 'dark' ? theme.dark : theme.light;
  return StyleSheet.create({
    addCircle: {
      alignItems: 'center',
      backgroundColor: currentTheme.backgroundColor,
      borderColor: '#C3C3C3',
      borderRadius: 52,
      borderWidth: 2,
      height: 52,
      justifyContent: 'center',
      width: 52,
    },
    addContainer: {
      alignItems: 'center',
      flex: 0.2,
      marginTop: 15,
    },
    addText: {
      color: currentTheme.color,
      fontFamily: 'Aspira',
      fontSize: 11,
      fontWeight: '500',
      marginTop: 4,
    },
  });
};
export default addAcountStyles;

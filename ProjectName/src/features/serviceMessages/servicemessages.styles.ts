import {StyleSheet} from 'react-native';
const theme = {
  light: {
    backgroundColor: '#5A6168',
  },
  dark: {
    backgroundColor: 'white',
  },
};
const ServiceMessagesStyle = (isDark: string) => {
  const currentTheme = isDark == 'dark' ? theme.dark : theme.light;
  return StyleSheet.create({
    modalClose: {
      position: 'absolute',
      right: 16,
    },
    modalContainer: {
      backgroundColor: currentTheme.backgroundColor,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      flex: 1,
      marginTop: 40,
    },
    modalHeader: {
      marginTop: 18,
    },
    modalText: {
      color: 'purple',
      fontFamily: 'Aspira',
      fontSize: 18,
      fontWeight: '500',
      textAlign: 'center',
    },
  });
};
export default ServiceMessagesStyle;

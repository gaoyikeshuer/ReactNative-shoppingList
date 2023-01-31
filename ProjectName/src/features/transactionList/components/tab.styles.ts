import {StyleSheet} from 'react-native';

const theme = {
  light: {
    backgroundColor: '#efefef',
    color: 'black',
  },
  dark: {
    backgroundColor: '#212529',
    color: '#efefef',
  },
};
const tabStyle = (isDark: string, opacityVal: any) => {
  const currentTheme = isDark == 'dark' ? theme.dark : theme.light;
  return StyleSheet.create({
    selectedTabText: {
      color: 'purple',
      fontFamily: 'Aspira',
      fontWeight: '500',
      marginHorizontal: 12,
      paddingVertical: 10,
    },

    tabContainer: {
      backgroundColor: currentTheme.backgroundColor,
      opacity: opacityVal,
      position: 'absolute',
      top: 24,
      width: '100%',
      zIndex: 15,
    },
    tabText: {
      color: currentTheme.color,
      fontFamily: 'Aspira',
      fontWeight: '500',
      marginHorizontal: 12,
      paddingVertical: 10,
    },
  });
};

export default tabStyle;

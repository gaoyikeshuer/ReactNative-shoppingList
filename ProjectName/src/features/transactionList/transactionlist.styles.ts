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
const TransactionListStyle = (isDark: string) => {
  const currentTheme = isDark == 'dark' ? theme.dark : theme.light;
  return StyleSheet.create({
    arrangeItem: {
      alignItems: 'flex-end',
    },
    itemSeparator: {
      borderBottomWidth: 1,
      borderColor: '#C3C3C3',
      marginHorizontal: 12,
    },
    listContainer: {
      backgroundColor: currentTheme.backgroundColor,
    },
    nameContainer: {
      width: 224,
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 17,
      marginHorizontal: 12,
      marginTop: 11,
    },
    textCurrency: {
      color: currentTheme.color,
      fontFamily: 'Aspira-Regular',
      marginBottom: 3,
    },
    textName: {
      color: 'black',
      fontFamily: 'Aspira-Medium',
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 3,
      width: 224,
    },
    textNumber: {
      color: 'black',
      fontFamily: 'Aspira-Medium',
      fontSize: 16,
      fontWeight: '500',
    },
    textType: {
      color: currentTheme.color,
      fontFamily: 'Aspira',
    },
    titleDate: {
      color: '#7F2B7B',
      marginVertical: 4,
    },
    transactionTitle: {
      borderBottomWidth: 1,
      borderColor: '#C3C3C3',
      borderTopWidth: 1,
      paddingHorizontal: 12,
    },
    wholeListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginHorizontal: 12,
    },
    wholeListShow: {
      color: '#7F2B7B',
      fontFamily: 'Aspira',
      fontWeight: '500',
    },
    wholeListTitle: {
      color: '#6E6E6E',
      fontFamily: 'Aspira',
      fontSize: 12,
      fontWeight: '500',
      letterSpacing: 1.5,
    },
  });
};

export default TransactionListStyle;

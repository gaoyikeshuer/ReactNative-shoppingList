import {StyleSheet} from 'react-native';
const TransactionListStyle = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
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
    color: '#6E6E6E',
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
});
export default TransactionListStyle;

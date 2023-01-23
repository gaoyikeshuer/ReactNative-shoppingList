import {StyleSheet} from 'react-native';
const TransactionListStyle = StyleSheet.create({
  transactionTitle: {
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#C3C3C3',
  },
  titleDate: {
    color: '#7F2B7B',
    marginVertical: 4,
  },
  listContainer: {
    backgroundColor: 'white',
  },
  textContainer: {
    marginHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
    marginBottom: 17,
  },
  nameContainer: {
    width: 224,
  },
  textNumber: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Aspira-Medium',
  },
  textCurrency: {
    color: '#6E6E6E',
    marginBottom: 3,
    fontFamily: 'Aspira-Regular',
  },
  textName: {
    fontSize: 16,
    width: 224,
    marginBottom: 3,
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Aspira-Medium',
  },
});
export default TransactionListStyle;

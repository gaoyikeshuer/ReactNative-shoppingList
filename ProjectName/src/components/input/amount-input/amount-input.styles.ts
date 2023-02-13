import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  currency: {
    color: '#4D4D4D',
    fontFamily: 'Aspira',
    fontSize: 14,
    fontWeight: '500',
    height: 15,
    lineHeight: 15,
  },
  currencyIcon: {
    flexDirection: 'row',
    padding: 16,
    width: '100%',
  },
  currencyIconContainer: {
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderBottomRightRadius: 3,
    borderColor: '#C3C3C3',
    borderTopRightRadius: 3,
    borderWidth: 1,
    height: 56,
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    width: 107,
  },
  flag: {
    height: 15,
    marginRight: 9,
    width: 24,
  },
  textAmountInput: {
    borderColor: '#C3C3C3',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    fontFamily: 'Aspira',
    fontSize: 16,
    height: 56,
    paddingLeft: 15,
  },
  title: {
    color: '#4D4D4D',
    fontFamily: 'Aspira',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
});

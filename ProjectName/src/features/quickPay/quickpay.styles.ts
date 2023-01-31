import {StyleSheet} from 'react-native';

const QuickPayStyle = StyleSheet.create({
  QuickPayText: {
    color: '#6E6E6E',
    fontFamily: 'Aspira-Regular',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1.5,
  },
  QuickPayTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  ShowAllText: {
    color: '#7F2B7B',
    fontFamily: 'Aspira-Medium',
    fontSize: 14,
    fontWeight: '500',
  },
  avatarContainer: {
    marginHorizontal: 12,
  },
  flatlistStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 0.2,
  },
});

export default QuickPayStyle;

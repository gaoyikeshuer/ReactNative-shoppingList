import React from 'react';
import {StyleSheet} from 'react-native';
const QuickPayStyle = StyleSheet.create({
  QuickPayTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  avatarContainer: {
    marginHorizontal: 12,
  },
  QuickPayText: {
    color: '#6E6E6E',
    fontWeight: '500',
    letterSpacing: 1.5,
    fontSize: 12,
    fontFamily: 'Aspira-Regular',
  },
  ShowAllText: {
    color: '#7F2B7B',
    fontWeight: '500',
    fontSize: 14,
    fontFamily: 'Aspira-Medium',
  },
});
export default QuickPayStyle;

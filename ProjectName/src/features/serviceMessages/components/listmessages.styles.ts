import {StyleSheet} from 'react-native';
const listMessagesStyle = StyleSheet.create({
  messageList: {
    alignItems: 'center',
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 14,
  },
  messageText: {
    flexWrap: 'wrap',
    flex: 1,
    fontFamily: 'Aspira',
    paddingBottom: 18,
    paddingLeft: 14,
    paddingTop: 12,
  },
});
export default listMessagesStyle;

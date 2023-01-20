import React from 'react';
import {Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {useAppDispatch} from '../../../store/hooks';
import {deleteMes} from '../../../store/messagesSlice/messagesSlice';
import {IconXCircle} from '../../../assets/icons';
import {Message} from '../../../types/Message';

const ListMessage = ({item}: {item: Message}) => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.messageList}>
      <Pressable onPress={() => dispatch(deleteMes({id: item.id}))}>
        <IconXCircle />
      </Pressable>
      <Text style={styles.messageText}>{item.text}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
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

export default ListMessage;

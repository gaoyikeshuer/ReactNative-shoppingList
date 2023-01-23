import React from 'react';
import {Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {useAppDispatch} from '../../../store/hooks';
import {deleteMes} from '../../../store/messagesSlice';
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
    marginHorizontal: 14,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    alignItems: 'center',
  },
  messageText: {
    flexWrap: 'wrap',
    paddingLeft: 14,
    flex: 1,
    paddingBottom: 18,
    paddingTop: 12,
    fontFamily: 'Aspira',
  },
});

export default ListMessage;

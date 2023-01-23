import React from 'react';
import {Text, SafeAreaView, Pressable} from 'react-native';
import {useAppDispatch} from '../../../store/hooks';
import {deleteMessage} from '../../../store/messagesSlice/messages.slice';
import {IconXCircle} from '../../../assets/icons';
import {Message} from '../../../types/message.interface';
import listMessagesStyle from './listmessages.styles';

const ListMessage = ({item}: {item: Message}) => {
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={listMessagesStyle.messageList}>
      <Pressable onPress={() => dispatch(deleteMessage({id: item.id}))}>
        <IconXCircle />
      </Pressable>
      <Text style={listMessagesStyle.messageText}>{item.text}</Text>
    </SafeAreaView>
  );
};

export default ListMessage;

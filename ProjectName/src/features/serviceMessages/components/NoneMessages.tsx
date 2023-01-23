import React from 'react';
import {Text, View} from 'react-native';
import {IconInbox} from '../../../assets/icons';
import noneMessagesStyle from './nonemessages.styles';

const NoneMessages = () => {
  return (
    <View style={noneMessagesStyle.NoneMessageContainer}>
      <IconInbox />
      <Text style={noneMessagesStyle.NoneMessageTitle}>No Messages</Text>
      <Text>You dont have any messages at this time.</Text>
    </View>
  );
};

export default NoneMessages;

import React from 'react';
import {Text, SafeAreaView, View, Pressable, FlatList} from 'react-native';

import ListMessage from './components/ListMessages';
import NoneMessages from './components/NoneMessages';
import ServiceMessagesStyle from './servicemessages.styles';
import {IconX} from '../../assets/icons';
import {useAppDispatch} from '../../store/hooks';
import {useMessages} from '../../store/messagesSlice';
import {toggleActive} from '../../store/modalToggleSlice/modaltoggle.slice';
import {useThemeToggle} from '../../store/themeToggleSlice';

const ServiceMessages = () => {
  const {messages: messages} = useMessages();
  const {isDarkModeState: isDarkMode} = useThemeToggle();
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={ServiceMessagesStyle(isDarkMode).modalContainer}>
      <View style={ServiceMessagesStyle(isDarkMode).modalHeader}>
        <Text style={ServiceMessagesStyle(isDarkMode).modalText}>
          Service Message
        </Text>
        <Pressable
          style={ServiceMessagesStyle(isDarkMode).modalClose}
          onPress={() => dispatch(toggleActive())}>
          <IconX />
        </Pressable>
      </View>
      {messages.length == 0 && <NoneMessages />}
      <FlatList
        scrollEnabled={false}
        data={messages}
        renderItem={({item}) => <ListMessage item={item} />}
      />
    </SafeAreaView>
  );
};

export default ServiceMessages;

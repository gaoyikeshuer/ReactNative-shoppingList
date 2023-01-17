import React from 'react';
import {Text, SafeAreaView, View, Pressable, FlatList} from 'react-native';
import {IconX} from '../../assets/icons';
import ListMessage from './components/ListMessages';
import NoneMessages from './components/NoneMessages';
import {toggleActive} from '../../store/modalToggleSlice/modalToggleSlice';
import ServiceMessagesStyle from './ServiceMessagesStyle';
import {useAppSelector, useAppDispatch} from '../../store/hooks';

const ServiceMessages = () => {
  const messages = useAppSelector(state => state.mes);
  const darkMode = useAppSelector(state => state.themeToggle);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView
      style={[
        ServiceMessagesStyle.modalContainer,
        {backgroundColor: darkMode.scheme == 'dark' ? '#5A6168' : 'white'},
      ]}>
      <View style={ServiceMessagesStyle.modalHeader}>
        <Text style={ServiceMessagesStyle.modalText}>Service Message</Text>
        <Pressable
          style={ServiceMessagesStyle.modalClose}
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

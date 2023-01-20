import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {IconInbox} from '../../../assets/icons';

const NoneMessages = () => {
  return (
    <View style={styles.NoneMessageContainer}>
      <IconInbox />
      <Text style={styles.NoneMessageTitle}>No Messages</Text>
      <Text>You don't have any messages at this time.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  NoneMessageContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 45,
    paddingTop: 29,
  },
  NoneMessageTitle: {
    fontFamily: 'Aspira',
    fontSize: 16,
    marginVertical: 3,
  },
});

export default NoneMessages;

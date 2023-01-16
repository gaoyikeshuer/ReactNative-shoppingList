import React from 'react';
import {StyleSheet} from 'react-native';
const ServiceMessagesStyle = StyleSheet.create({
  modalContainer: {
    marginTop: 40,
    backgroundColor: 'white',

    flex: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modalHeader: {
    marginTop: 18,
  },
  modalText: {
    color: 'purple',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Aspira',
    fontWeight: '500',
  },
  modalClose: {
    position: 'absolute',
    right: 16,
  },
});
export default ServiceMessagesStyle;

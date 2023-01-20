import {StyleSheet} from 'react-native';
const ServiceMessagesStyle = StyleSheet.create({
  modalClose: {
    position: 'absolute',
    right: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    marginTop: 40,
  },
  modalHeader: {
    marginTop: 18,
  },
  modalText: {
    color: 'purple',
    fontFamily: 'Aspira',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});
export default ServiceMessagesStyle;

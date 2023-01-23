import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const DimBackgroundStyle = StyleSheet.create({
  dimBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: windowHeight,
    position: 'absolute',
    width: windowWidth,
    zIndex: 1000,
  },
});

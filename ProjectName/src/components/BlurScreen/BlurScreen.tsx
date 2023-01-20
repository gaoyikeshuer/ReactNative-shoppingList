import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet} from 'react-native';

const BlurScreen = () => {
  return (
    <BlurView
      style={styles.absolute}
      blurType="light"
      blurAmount={10}
      blurRadius={5}
    />
  );
};
const styles = StyleSheet.create({
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
export default BlurScreen;

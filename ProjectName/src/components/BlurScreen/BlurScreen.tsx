import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {BlurScreenStyle} from './blurscreen.styles';

const BlurScreen = () => {
  return (
    <BlurView
      style={BlurScreenStyle.absolute}
      blurType="light"
      blurAmount={10}
      blurRadius={5}
    />
  );
};

export default BlurScreen;

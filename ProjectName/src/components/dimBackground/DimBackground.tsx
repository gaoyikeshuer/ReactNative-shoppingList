import React from 'react';
import {View} from 'react-native';
import {Dimensions} from 'react-native';

import {useAppSelector} from '../../store/hooks';

const DimBackground = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const modalToggle = useAppSelector(state => state.modalToggle);
  return (
    <View
      style={
        modalToggle.active
          ? {
              width: windowWidth,
              backgroundColor: 'rgba(0,0,0,0.5)',
              height: windowHeight,
              position: 'absolute',
              zIndex: 1000,
            }
          : {}
      }></View>
  );
};

export default DimBackground;

import React from 'react';
import {View} from 'react-native';

import {DimBackgroundStyle} from './dimbackground.styles';
import {useAppSelector} from '../../store/hooks';

const DimBackground = () => {
  const modalToggle = useAppSelector(state => state.modalToggle);
  return (
    <View style={modalToggle.active ? DimBackgroundStyle.dimBackground : {}} />
  );
};

export default DimBackground;

import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../../store/hooks';
import {DimBackgroundStyle} from './dimbackground.styles';

const DimBackground = () => {
  const modalToggle = useAppSelector(state => state.modalToggle);
  return (
    <View style={modalToggle.active ? DimBackgroundStyle.dimBackground : {}} />
  );
};

export default DimBackground;

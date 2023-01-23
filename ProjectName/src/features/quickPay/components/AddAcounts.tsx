import React from 'react';
import {View, Text} from 'react-native';
import {IconPlus} from '../../../assets/icons';
import addAcountStyles from './addacounts.styles';
import {useThemeToggle} from '../../../store/themeToggleSlice';

const AddAcounts = () => {
  const {isDarkModeState: isDarkMode} = useThemeToggle();
  return (
    <View style={addAcountStyles(isDarkMode).addContainer}>
      <View style={addAcountStyles(isDarkMode).addCircle}>
        <IconPlus color="green" />
      </View>
      <Text style={addAcountStyles(isDarkMode).addText}>Add new</Text>
    </View>
  );
};

export default AddAcounts;

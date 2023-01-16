import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconPlus} from '../../../assets/icons';
import {useAppSelector} from '../../../store/hooks';

const AddAcounts = () => {
  const darkMode = useAppSelector(state => state.themeToggle);
  return (
    <View style={styles.addContainer}>
      <View
        style={[
          styles.addCircle,
          {backgroundColor: darkMode.scheme == 'dark' ? '#5A6168' : 'white'},
        ]}>
        <IconPlus color="green" />
      </View>
      <Text
        style={[
          styles.addText,
          {color: darkMode.scheme == 'dark' ? '#6E6E6E' : 'black'},
        ]}>
        Add new
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  addContainer: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 15,
  },
  addCircle: {
    borderWidth: 2,
    height: 52,
    width: 52,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C3C3C3',
    backgroundColor: 'white',
  },
  addText: {
    fontSize: 11,
    marginTop: 4,
    fontFamily: 'Aspira',
    fontWeight: '500',
  },
});

export default AddAcounts;

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const AvatarGenerator = ({name}: {name: string}) => {
  const initials =
    name.split(' ')[0].charAt(0).toUpperCase() +
    name.split(' ').pop()?.charAt(0).toUpperCase();

  return (
    <View style={styles.avatarCircle}>
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  avatarCircle: {
    width: 52,
    height: 52,
    backgroundColor: '#7F2B7B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 52,
  },
  avatarText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 2,
    fontFamily: 'Aspira-Medium',
  },
});

export default AvatarGenerator;

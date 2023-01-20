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
    alignItems: 'center',
    backgroundColor: '#7F2B7B',
    borderRadius: 52,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  avatarText: {
    color: 'white',
    fontFamily: 'Aspira-Medium',
    fontSize: 24,
    fontWeight: '500',
    paddingTop: 2,
    textAlign: 'center',
  },
});

export default AvatarGenerator;

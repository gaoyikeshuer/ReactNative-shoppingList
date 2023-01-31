import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './avatargenerator.styles';

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

export default AvatarGenerator;

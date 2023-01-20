import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AvatarGenerator from './AvatarGenerator';
import {User} from '../../../types/User';
import {useAppSelector} from '../../../store/hooks';

const ListAccounts = ({item}: {item: User}) => {
  const darkMode = useAppSelector(state => state.themeToggle);
  return (
    <View style={styles.avatarWrap}>
      <AvatarGenerator name={item.name} />
      <Text
        numberOfLines={1}
        style={[
          styles.avatarName,
          {color: darkMode.scheme == 'dark' ? '#6E6E6E' : 'black'},
        ]}>
        {item.name}{' '}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  avatarName: {
    fontFamily: 'Aspira-Medium',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 5,
  },
  avatarWrap: {
    alignItems: 'center',
    flex: 0.2,
    marginTop: 15,
  },
});

export default ListAccounts;

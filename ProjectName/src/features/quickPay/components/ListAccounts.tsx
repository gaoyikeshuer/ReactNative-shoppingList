import React from 'react';
import {View, Text} from 'react-native';
import AvatarGenerator from './AvatarGenerator';
import {User} from '../../../types/user.interface';
import listAccountsStyle from './listaccounts.styles';
import {useThemeToggle} from '../../../store/themeToggleSlice';

const ListAccounts = ({item}: {item: User}) => {
  const {isDarkModeState: isDarkMode} = useThemeToggle();
  return (
    <View style={listAccountsStyle(isDarkMode).avatarWrap}>
      <AvatarGenerator name={item.name} />
      <Text numberOfLines={1} style={listAccountsStyle(isDarkMode).avatarName}>
        {item.name}{' '}
      </Text>
    </View>
  );
};

export default ListAccounts;

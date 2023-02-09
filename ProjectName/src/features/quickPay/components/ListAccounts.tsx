import React from 'react';
import {View, Text} from 'react-native';

import AvatarGenerator from './AvatarGenerator';
import listAccountsStyle from './listaccounts.styles';
import {useThemeToggle} from '../../../store/themeToggleSlice';
import {User} from '../../../types/user.interface';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  Home: undefined;
  Payments:{payeeName:string}
}

type NavigationProps = StackNavigationProp<StackParamList>

const ListAccounts = ({item}: {item: User}) => {
  const {isDarkModeState: isDarkMode} = useThemeToggle();
  const navigation = useNavigation<NavigationProps>();
  
  return (
    <View style={listAccountsStyle(isDarkMode).avatarWrap}>
       <Pressable onPress={()=>{navigation.navigate("Payments",{payeeName: item.name})}}>
      <AvatarGenerator name={item.name} />
      </Pressable>
      <Text numberOfLines={1} style={listAccountsStyle(isDarkMode).avatarName}>
        {item.name}{' '}
      </Text>
    </View>
  );
};

export default ListAccounts;

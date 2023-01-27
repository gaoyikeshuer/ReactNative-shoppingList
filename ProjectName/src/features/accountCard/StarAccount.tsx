import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {useThemeToggle} from 'src/store/themeToggleSlice';

import AccountCardStyle from './staraccount.styles';
import {IconFavouriteFill} from '../../assets/icons';

const StarAccount = () => {
  const {isDarkModeState: isDark} = useThemeToggle();
  return (
    <SafeAreaView style={AccountCardStyle(isDark).accountCardContainer}>
      <SafeAreaView style={AccountCardStyle(isDark).starContainer}>
        <View style={AccountCardStyle(isDark).starTitle}>
          <Text style={AccountCardStyle(isDark).textTitle}>
            Office Supplies / Expenses
          </Text>
          <IconFavouriteFill width={18} color={'purple'} />
        </View>
        <Text style={AccountCardStyle(isDark).bankNum}>
          IE67AIBK93132200031333
        </Text>
        <Text style={AccountCardStyle(isDark).bankInfo}>
          Current Account | EUR
        </Text>
        <View style={AccountCardStyle(isDark).bankContainer}>
          <View style={AccountCardStyle(isDark).bankTitle}>
            <Text style={AccountCardStyle(isDark).bankTitleText}>Balance</Text>
            <Text style={AccountCardStyle(isDark).bankTitleText}>
              Avaliable funds
            </Text>
          </View>
          <View style={AccountCardStyle(isDark).money}>
            <Text style={AccountCardStyle(isDark).moneyText}>15,678.89</Text>
            <Text style={AccountCardStyle(isDark).moneyText}>14,768.12</Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={AccountCardStyle(isDark).greenStrip} />
    </SafeAreaView>
  );
};

export default StarAccount;

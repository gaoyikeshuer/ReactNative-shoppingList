import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {IconFavouriteFill} from '../../assets/icons';
import AccountCardStyle from './staraccount.styles';
import {useAppSelector} from '../../store/hooks';

const StarAccount = () => {
  const isDarkMode = useAppSelector(state => state.themeToggle.scheme);
  return (
    <SafeAreaView style={AccountCardStyle(isDarkMode).accountCardContainer}>
      <SafeAreaView style={AccountCardStyle(isDarkMode).starContainer}>
        <View style={AccountCardStyle(isDarkMode).starTitle}>
          <Text style={AccountCardStyle(isDarkMode).textTitle}>
            Office Supplies / Expenses
          </Text>
          <IconFavouriteFill width={18} color={'purple'} />
        </View>
        <Text style={AccountCardStyle(isDarkMode).bankNum}>
          IE67AIBK93132200031333
        </Text>
        <Text style={AccountCardStyle(isDarkMode).bankInfo}>
          Current Account | EUR
        </Text>
        <View style={AccountCardStyle(isDarkMode).bankContainer}>
          <View style={AccountCardStyle(isDarkMode).bankTitle}>
            <Text style={AccountCardStyle(isDarkMode).bankTitleText}>
              Balance
            </Text>
            <Text style={AccountCardStyle(isDarkMode).bankTitleText}>
              Avaliable funds
            </Text>
          </View>
          <View style={AccountCardStyle(isDarkMode).money}>
            <Text style={AccountCardStyle(isDarkMode).moneyText}>
              15,678.89
            </Text>
            <Text style={AccountCardStyle(isDarkMode).moneyText}>
              14,768.12
            </Text>
          </View>
        </View>
      </SafeAreaView>
      <View style={AccountCardStyle(isDarkMode).greenStrip} />
    </SafeAreaView>
  );
};

export default StarAccount;

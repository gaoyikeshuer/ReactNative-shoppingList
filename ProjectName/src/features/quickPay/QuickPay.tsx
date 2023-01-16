import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import ListAccounts from './components/ListAccounts';

import AddAcounts from './components/AddAcounts';
import QuickPayStyle from './QuickPayStyle';
import { avatar } from '../../../types';
const QuickPay = ({payAccounts}:{payAccounts:avatar[]}) => {

  return (
    <SafeAreaView>
      <View style={QuickPayStyle.QuickPayTitle}>
        <Text style={QuickPayStyle.QuickPayText}>QUICK PAY</Text>
        <Pressable>
          <Text style={QuickPayStyle.ShowAllText}>Show all {`>`} </Text>
        </Pressable>
      </View>

      <FlatList
       
        numColumns={5}
        columnWrapperStyle={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          flex: 0.2,
        }}
      
        style={QuickPayStyle.avatarContainer}
        data={[...payAccounts.slice(0, 9), {plusImage: true}]}
        renderItem={({item}:{item:any}) => {
        if(item.plusImage){
        return(
        <AddAcounts/>)
        }
        return <ListAccounts item={item} />}}
      
      />
    
    </SafeAreaView>
  );
};


export default QuickPay;

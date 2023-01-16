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
const QuickPay = ({payAccounts}) => {

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
        data={[...payAccounts.slice(0, 9), {plusImgae: true}]}
        renderItem={({item}) => {
        if(item.plusImgae){
        return(
        <AddAcounts/>)
        }
        return <ListAccounts item={item} />}}
        keyExtractor={item => item.id}
      />
    
    </SafeAreaView>
  );
};


export default QuickPay;

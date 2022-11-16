import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import ListAccounts from './ListAccounts';
import {IconX} from '../assets/icons';
import {IconPlus} from '../assets/icons';
import AddAcounts from './AddAcounts';

const QuickPay = ({payAccounts}) => {

  return (
    <SafeAreaView>
      <View style={styles.QuickPayTitle}>
        <Text style={{fontFamily:'Aspira', color:'#6E6E6E', fontWeight:'500'}}>Quick Pay</Text>
        <Pressable>
          <Text style={{fontFamily:'Aspira', color:'#6E6E6E', fontWeight:'500'}}>Show all {`>`} </Text>
        </Pressable>
      </View>

      <FlatList
       
        numColumns={5}
        columnWrapperStyle={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          flex: 0.2,
        }}
      
        style={styles.avatarContainer}
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
const styles = StyleSheet.create({
  QuickPayTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
 
  },
  avatarContainer: {
    marginHorizontal: 12,
  },
});

export default QuickPay;

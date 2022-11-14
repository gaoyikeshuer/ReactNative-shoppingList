import React from 'react'
import { SafeAreaView, SectionList, View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import TransactionItem from './TransactionItem'

const TransactionList = ({transactionsData}) => {

 const DATA = Object.values(transactionsData.reduce((acc, currentVal) => {

    if (!acc[currentVal.date]) acc[currentVal.date] = {
      title: currentVal.date,
      data: []
    };
    acc[currentVal.date].data.push(currentVal);
    return acc;
  
  }, {}))
  return (
   <SafeAreaView>
  <SectionList sections={DATA}
  keyExtractor={(item, index)=> item +index} 
  renderItem ={
    ({item}) => {return(<View style={styles.listContainer}>
        <View>
            <Text>{item.name}</Text>
            <Text>{item.currency}</Text>
        </View>
       <View>
        <Text>{item.type}</Text>
        <Text>{item.number}</Text>
       </View>
        </View>)}
  }
  renderSectionHeader ={
    ({section}) =>{
        return(<View style={styles.transactionTitle} >
            <Text style={styles.titleDate}>{section.title}</Text>
        </View>)
    }
  }
  />
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
transactionTitle:{
    paddingHorizontal:12,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: '#C3C3C3'
},
titleDate:{
    color:'#7F2B7B',
    marginVertical:4
},
listContainer:{
    
}
})

export default TransactionList

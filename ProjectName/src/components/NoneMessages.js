import React from 'react'
import {Text, StyleSheet, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import { IconInbox } from '../src/assets/icons'


const NoneMessages = () => {
  return (
    <View style= {styles.NoneMessageContainer}>
      <IconInbox/>
      <Text style= {styles.NoneMessageTitle}>No Messages</Text>
      <Text>You don't have any messages at this time.</Text>
    </View>
  )
}
const styles = StyleSheet.create({
 NoneMessageContainer:{
   flex:1,
  alignItems:'center',
  marginTop:45,
  paddingTop:29,

 },
 NoneMessageTitle :{
 marginVertical:3,
 fontSize:16,
 fontFamily:'Aspira'
 }
})

export default NoneMessages

import React from 'react'
import {Text, StyleSheet, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import { IconXCircle } from '../assets/icons'

const ListMessage = ({item, deleteMessage}) => {
  console.log(item)
  return (

    <SafeAreaView style={styles.messageList}>
      <Pressable onPress={() => deleteMessage(item.id)}>
        <IconXCircle/>
      </Pressable>
      <Text style = {styles.messageText}>{item.text}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  messageList:{
   marginHorizontal:14,
 
   flexDirection: 'row',
  
   borderBottomWidth:1,
   borderBottomColor:'#D0D0D0',
   alignItems: 'center'
  },
  messageText:{
  flexWrap:'wrap',
  paddingLeft:14,
  flex:1,
  paddingBottom:18,
  paddingTop:12,
  fontFamily:'Aspira'
  
  }
})

export default ListMessage

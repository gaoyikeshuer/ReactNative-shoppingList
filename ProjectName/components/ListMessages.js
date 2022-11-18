import React from 'react'
import {Text, StyleSheet, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import { IconXCircle } from '../assets/icons'
import {useDispatch, useSelector} from 'react-redux'
import { deleteMes } from '../store/messageSlice'

const ListMessage = ({item}) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages)

 
  return (

    <SafeAreaView style={styles.messageList}>
      <Pressable onPress={() => dispatch(deleteMes({id:item.id}))}>
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

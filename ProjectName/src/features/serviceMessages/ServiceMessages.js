import React from 'react'
import {Text, StyleSheet, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import { IconX } from '../../assets/icons'
import ListMessage from './components/ListMessages'
import NoneMessages from './components/NoneMessages'
import {useDispatch, useSelector} from 'react-redux'
import { toggleActive } from '../../store/modalToggleSlice'
import ServiceMessagesStyle from './ServiceMessagesStyle'

const ServiceMessages = () => {
   
  const messages = useSelector(state => state.mes)
  const dispatch = useDispatch();

  return (
    <SafeAreaView style = {ServiceMessagesStyle.modalContainer}>
        <View style ={ServiceMessagesStyle.modalHeader}>
            <Text style ={ServiceMessagesStyle.modalText}>Service Message</Text>
            <Pressable style = {ServiceMessagesStyle.modalClose} onPress = {()=> dispatch(toggleActive())}>
             
              <IconX/>
            </Pressable>
         
        </View>
        {messages.length ==0 &&<NoneMessages/>}
     <FlatList  scrollEnabled={false} data={messages} renderItem = {({item}) =><ListMessage item ={item}/>} />

    </SafeAreaView>
  )
}



export default ServiceMessages

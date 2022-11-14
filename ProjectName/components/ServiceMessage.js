import React from 'react'
import {Text, StyleSheet, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import { IconX } from '../assets/icons'
import ListMessage from './ListMessages'
import NoneMessages from './NoneMessages'

const ServiceMessage = ({toggleModal, messages , deleteMessage}) => {
  return (
    <SafeAreaView style = {styles.modalContainer}>
        <View style ={styles.modalHeader}>
            <Text style ={styles.modalText}>Service Message</Text>
            <Pressable style = {styles.modalClose} onPress = {toggleModal}>
             
              <IconX/>
            </Pressable>
         
        </View>
        {messages.length ==0 &&<NoneMessages/>}
     <FlatList data={messages} renderItem = {({item}) =><ListMessage item ={item} deleteMessage={deleteMessage}/>} />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create ({
    modalContainer:{
     marginTop:40,
     backgroundColor: 'white',
   
     flex:1,
     borderTopLeftRadius: 8,
     borderTopRightRadius: 8,

    },
    modalHeader:{
     marginTop:18
    },
    modalText:{
      
            color:'purple',
            fontSize: 18,
            textAlign: 'center'
            
       
    },
    modalClose:{
        position:'absolute',
        right:16
    }
  })

export default ServiceMessage

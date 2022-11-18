import React from 'react'
import {Text, StyleSheet, SafeAreaView, View, Pressable, FlatList } from 'react-native'
import { IconX } from '../assets/icons'
import ListMessage from './ListMessages'
import NoneMessages from './NoneMessages'
<<<<<<< Updated upstream
=======
import {useDispatch, useSelector} from 'react-redux'
import { toggleActive } from '../store/modalToggleSlice'

const ServiceMessage = () => {
  const messages = useSelector(state => state.mes)
  const dispatch = useDispatch();
>>>>>>> Stashed changes

const ServiceMessage = ({toggleModal, messages , deleteMessage}) => {
  return (
    <SafeAreaView style = {styles.modalContainer}>
        <View style ={styles.modalHeader}>
            <Text style ={styles.modalText}>Service Message</Text>
<<<<<<< Updated upstream
            <Pressable style = {styles.modalClose} onPress = {toggleModal}>
=======
            <Pressable style = {styles.modalClose} onPress = {()=> dispatch(toggleActive())}>
>>>>>>> Stashed changes
             
              <IconX/>
            </Pressable>
         
        </View>
        {messages.length ==0 &&<NoneMessages/>}
     <FlatList  scrollEnabled={false} data={messages} renderItem = {({item}) =><ListMessage item ={item} deleteMessage={deleteMessage}/>} />

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
            textAlign: 'center',
            fontFamily:'Aspira',
            fontWeight:'500'
            
       
    },
    modalClose:{
        position:'absolute',
        right:16
    }
  })

export default ServiceMessage

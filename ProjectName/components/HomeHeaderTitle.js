import React from 'react'
import { View,Text, StyleSheet,Pressable ,SafeAreaView } from 'react-native'
import { IconAlert } from '../assets/icons'
import {useDispatch, useSelector} from 'react-redux'
import { toggleActive } from '../store/modalToggleSlice'
import { useNavigation } from '@react-navigation/native';

const HomeHeaderTitle = () => {
  const messages = useSelector(state => state.mes)
 const dispatch = useDispatch()
 const navigation = useNavigation();
 const modalToggle = useSelector((state) => state.modalToggle)
  return (
    <View style={styles.header}> 
      {/* <Text style={styles.text}>{title}</Text> */}
      <Pressable style= {styles.alert} onPress= {()=>{dispatch(toggleActive())
 
      }}>
      
        { messages.length !=0 && <View style={styles.alertNum}>
          <Text style = {styles.messagesNum}>{messages.length}</Text>
        </View>}
      <IconAlert width={22} height={22} color='purple'/>
      </Pressable>
 
    </View>
  )
}
const styles = StyleSheet.create({
 
 
    text:{
        color:'#7F2B7B',
        fontSize: 18,
        textAlign: 'center',
        fontFamily:'Aspira',
        fontWeight:'500'
        
    },
    alert:{
  
    },
    alertNum:{
      position:'absolute',
      alignItems:"center",
      left:-13,
      top:5,
      width:21,
      height: 16,
      backgroundColor: '#E00885',
      zIndex:10,
      borderRadius:12,
      borderColor: '#efefef',
      borderWidth: 2
    },
    messagesNum:{
      color: 'white',
      fontSize:11,

    }
})

export default HomeHeaderTitle

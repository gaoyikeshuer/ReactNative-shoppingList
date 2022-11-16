import React from 'react'
import { View,Text, StyleSheet,Pressable ,SafeAreaView } from 'react-native'
import { IconAlert } from '../assets/icons'

const HomeHeaderTitle = ({title, toggleModal, messages}) => {
  return (
    <View style={styles.header}> 
      <Text style={styles.text}>{title}</Text>
      <Pressable style= {styles.alert} onPress= {toggleModal}>
        { messages.length !=0 && <View style={styles.alertNum}>
          <Text style = {styles.messagesNum}>{messages.length}</Text>
        </View>}
      <IconAlert width={22} height={22} color='purple'/>
      </Pressable>
 
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
      paddingBottom:14
    },
    text:{
        color:'#7F2B7B',
        fontSize: 18,
        textAlign: 'center',
        fontFamily:'Aspira',
        fontWeight:'500'
        
    },
    alert:{
      position:'absolute',
      right:20
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

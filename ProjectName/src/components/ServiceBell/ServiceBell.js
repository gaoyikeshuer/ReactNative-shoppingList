import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet,Pressable ,Animated, Platform } from 'react-native'
import { IconAlert } from '../../assets/icons'
import {useDispatch, useSelector} from 'react-redux'
import { toggleActive } from  '../../store/modalToggleSlice'
import { TouchableOpacity } from 'react-native-gesture-handler'



const ServiceBell = () => {
  const messages = useSelector(state => state.mes)
 const dispatch = useDispatch()
 const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const spinValue = useState(new Animated.Value(0))[0]



const spinBell = () =>{

  Animated.sequence([
    Animated.timing(spinValue,{toValue:1,duration:70,useNativeDriver:true}),
    Animated.timing(spinValue,{toValue:-1,duration:70,useNativeDriver:true}),
    Animated.timing(spinValue,{toValue:1,duration:70,useNativeDriver:true}),
    Animated.timing(spinValue,{toValue:0,duration:70,useNativeDriver:true}),
  ])
 .start()
}
const spin = spinValue.interpolate({
  inputRange:[-1,1],
  outputRange:['-10deg','10deg']
})



  return (
    
    <View style={styles.header}> 


      <Pressable style= {styles.alert} 
      onPressIn ={spinBell
      }
      
      onPress= {()=>{dispatch(toggleActive())}}
      >
      
        { messages.length !=0 && <View style={styles.alertNum}>
          <Text style = {[styles.messagesNum]}  >{messages.length}</Text>
        </View>}
     
        <Animated.View style={{transform:[{rotate:spin}]}}>
 
   
    <IconAlert width={22} height={22} color='purple'/>
    
 
        </Animated.View>

      </Pressable>
 
    </View>
  )
}
const styles = StyleSheet.create({
 
    alertNum:{
      position:'absolute',
      alignItems:'center',
      left:-13,
      top:5,
      width:21,
     
      backgroundColor: '#E00885',
      zIndex:13,
      borderRadius:12,
      borderColor: '#efefef',
      borderWidth: 2,
      
  
    

      
    
    },
    messagesNum:{
      color: 'white',
      fontSize:11,
      fontFamily:'Aspira-Regular'
      
     

    }
})

export default ServiceBell

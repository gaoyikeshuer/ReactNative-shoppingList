import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet,Pressable ,Animated } from 'react-native'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

const Header = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const modalToggle = useSelector((state) => state.modalToggle)
  return (
     <View style={modalToggle.active ?{width:windowWidth, backgroundColor:'rgba(0,0,0,0.5)', height:windowHeight, position:'absolute',zIndex:1000}:''}> 
  
    </View>

    
  
  )
}
const styles = StyleSheet.create({
 
})

export default Header

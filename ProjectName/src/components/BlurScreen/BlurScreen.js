import { View, Text } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur'
import { StyleSheet } from 'react-native'

const BlurScreen = () => {
  return (
    
   <BlurView
    style={styles.absolute}
        blurType="light"
        blurAmount={10}
        blurRadius={5}
        
        />

 
  )
}
const styles = StyleSheet.create({
    absolute: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  });
export default BlurScreen
import React from 'react'
import { View,Text, StyleSheet,SafeAreaView } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.header}> 
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header:{
      paddingBottom:14
    },
    text:{
        color:'purple',
        fontSize: 18,
        textAlign: 'center'
        
    }
})

export default Header

import React from 'react'
import { View ,StyleSheet,Text } from 'react-native'
import { IconPlus } from '../assets/icons'

const AddAcounts = () => {
  return (
    <View style={styles.addContainer}>
        <View style={styles.addCircle}>
        <IconPlus color='green'/>
        </View>
        <Text style={styles.addText}>Add new</Text>
      

    </View>
  )
}
const styles = StyleSheet.create({
    addContainer:{
     flex:0.2,
     alignItems:'center',
     marginTop:15
    },
    addCircle:{
        borderWidth:2,
        height:52,
        width:52,
        borderRadius:52,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#C3C3C3'
        

    },
    addText:{
        fontSize:11,
        marginTop:5
    }
})

export default AddAcounts

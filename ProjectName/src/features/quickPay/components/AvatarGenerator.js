import React from 'react'
import { View, StyleSheet, Text, SwipeableListView } from 'react-native'

const AvatarGenerator = ({name}) => {
   
    const initials = name.split(' ')[0].charAt(0).toUpperCase() + name.split(' ').pop().charAt(0).toUpperCase()
   
  return (
    <View style={styles.avatarCircle} >
      <Text style={styles.avatarText}>{initials}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  avatarCircle:{
    width: 52,
    height: 52,
    backgroundColor:'#7F2B7B',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 52
  },
  avatarText:{
    color:'white',
    fontSize:24,
    fontFamily:'Aspira',
    fontWeight:'500',
    textAlign:'center',
    paddingTop:4
  }
})

export default AvatarGenerator

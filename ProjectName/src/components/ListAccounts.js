import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

import AvatarGenerator from './AvatarGenerator'

const ListAccounts = ({item}) => {

  return (
    <View style={styles.avatarWrap} >
      <AvatarGenerator name={item.name} />
        {/* <UserAvatar size={52} name={item.name} bgColor= 'purple' borderRadius={52} style={styles.avatar}/> */}
        <Text  numberOfLines={1}  style= {styles.avatarName}>{item.name} </Text>
    </View>
  )
}
const styles = StyleSheet.create({
 avatarWrap: {
  flex:0.2,
  alignItems: 'center',
  marginTop:15
 },
  avatar:{
    width:52,


  
  },
  avatarName:{
    fontSize:11,
    marginTop:5,
    fontFamily:'aspira',
    fontWeight:'500'
  }
})

export default ListAccounts

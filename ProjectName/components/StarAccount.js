import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { IconFavouriteFill } from '../assets/icons'

const StarAccount = () => {
  return (
   <SafeAreaView style={styles.starContainer}>
    <View style={styles.starTitle}>
        <Text style={styles.textTitle}>Office Supplies / Expenses</Text>
        <IconFavouriteFill/>
    </View>
    <Text style={styles.bankNum}>
        IE67AIBK93132200031333
    </Text>
    <Text style={styles.bankInfo}>Current Account | EUR</Text>
    <View style={styles.bankContainer}>
      <View style={styles.bankTitle}>
        <Text>Balance</Text>
        <Text>Avaliable funds</Text>
      </View>
      <View style={styles.money}>
      
        <Text style={styles.moneyText}>15,678.89</Text>
        <Text style={styles.moneyText}>14,768.12</Text>
      </View>
    </View>

   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  starContainer:{
height:137,
marginHorizontal:12,
backgroundColor:'white',
marginVertical:12,
paddingHorizontal:16
  },
  starTitle:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:11,
 
  },
  bankNum:{
  marginTop:4,
  color:'#6E6E6E',
  fontSize:14
  },
  bankInfo:{
 color:'#6E6E6E',
 fontSize:14
  },
  bankContainer:{

    justifyContent:'space-between',
    marginTop:6
  },
  textTitle:{
    fontSize:18
  },

  bankTitle:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  money:{
    flexDirection:'row',
    justifyContent:'space-between',
    
  },
  moneyText:{
    fontSize:20
  }
})

export default StarAccount

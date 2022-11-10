import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { IconHome } from '../assets/icons'



const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <IconHome width={45} height= {45}/>
         <Text>Homeeeeee</Text>
    </View>
  )
}

export default Home

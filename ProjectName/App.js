import React, {useState} from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
const App = () => {
  const [items, setItems] = useState([
    {id: Math.random(), text:'Milk'},
    {id: Math.random(), text:'Beef'},
    {id: Math.random(), text:'Coffe'},
    {id: Math.random(), text:'Candy'}
  ])
  console.log('title')
  return (
    <SafeAreaView style= {styles.container}>
     <Header title = 'Home' />
     <></>
      {/* <FlatList data = {items} renderItem = {({item}) => <ListItem item = {item}/> }/> */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  container:{
    flex:1,
   
  }
})

export default App

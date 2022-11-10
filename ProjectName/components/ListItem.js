import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native'

const ListItem = ({item}) => {
  return (
    <TouchableOpacity>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default ListItem

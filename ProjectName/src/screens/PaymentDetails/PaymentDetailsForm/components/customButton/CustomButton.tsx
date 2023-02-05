import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const CustomButton = ({title}) => {
  return (
    <View>
      <Pressable onPress={}>
      <Text>
        {title}
      </Text>
      </Pressable>
    </View>
  )
}

export default CustomButton
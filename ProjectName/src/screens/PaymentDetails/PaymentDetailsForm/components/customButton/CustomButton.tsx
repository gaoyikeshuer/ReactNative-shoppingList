import { View, Text } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { styles } from './custom-button.styles'

const CustomButton = ({title,onPressFunction}) => {
  return (

      <Pressable style={styles.button} onPress={onPressFunction}>
      <Text style={styles.buttonText} >
        {title}
      </Text>
      </Pressable>

  )
}

export default CustomButton
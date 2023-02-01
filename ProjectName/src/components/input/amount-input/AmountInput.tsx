import { View, Text } from 'react-native'
import React from 'react'

const AmountInput:React.FC<AmountInputTypes> = ({
    currency = 'EUR',
    errorMessage,
    ...rest
}) => {
  return (
    <View>
      <Text>AmountInput</Text>
    </View>
  )
}

export default AmountInput
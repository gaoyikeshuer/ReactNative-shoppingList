import { View, Text } from 'react-native'
import React from 'react'
import PaymentDetailsForm from './PaymentDetailsForm/PaymentDetailsForm'
import { styles } from './payment-details.styles'


const PaymentDetails = () => {
  return (
    <View style={styles.container}>
      <PaymentDetailsForm/>
    </View>
  )
}

export default PaymentDetails
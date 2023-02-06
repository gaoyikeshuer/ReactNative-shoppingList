import { View, Text } from 'react-native'
import React from 'react'
import PaymentDetailsForm from './PaymentDetailsForm/PaymentDetailsForm'
import { styles } from './payment-details.styles'
import PaymentDetailsFooter from './PaymentDetailsFooter/PaymentDetailsFooter'


const PaymentDetails = () => {
  return (
    <View style={styles.container}>
      <PaymentDetailsForm/>
      <PaymentDetailsFooter/>
    </View>
  )
}

export default PaymentDetails
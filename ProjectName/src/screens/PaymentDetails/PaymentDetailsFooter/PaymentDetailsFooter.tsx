import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './payment-details-footer.styles'

const PaymentDetailsFooter = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>Tap here for timelines of payments made to AIB and other financial institutions within Ireland. For further assistance please contact us at 0818 72 47 24 or +353 1 771 2424.</Text>
    </View>
  )
}

export default PaymentDetailsFooter
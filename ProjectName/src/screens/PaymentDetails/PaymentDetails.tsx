import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './payment-details.styles';
import PaymentDetailsFooter from './PaymentDetailsFooter/PaymentDetailsFooter';
import PaymentDetailsForm from './PaymentDetailsForm/PaymentDetailsForm';

const PaymentDetails = () => {
  return (
    <View style={styles.container}>
      <PaymentDetailsForm />
      <PaymentDetailsFooter />
    </View>
  );
};

export default PaymentDetails;

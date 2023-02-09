import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './payment-details.styles';
import PaymentDetailsFooter from './PaymentDetailsFooter/PaymentDetailsFooter';
import PaymentDetailsForm from './PaymentDetailsForm/PaymentDetailsForm';
import {useTheme} from '../../components/theming';

const PaymentDetails: React.FC = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <PaymentDetailsForm />
      <PaymentDetailsFooter />
    </View>
  );
};

export default PaymentDetails;

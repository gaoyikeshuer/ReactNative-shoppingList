import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import {Text, View, Pressable} from 'react-native';

import AmountInput from './components/amount-input/AmountInput';
import BaseInput from './components/base-Input/BaseInput';
import CustomButton from './components/customButton/CustomButton';
import MessageInput from './components/message-Input/MessageInput';
import {styles} from './payment-details-form.styles';
import {PaymentDetailsFormData} from './payment-details-form.types';
import {useTheme} from '../../../components/theming';
import {NavigationType} from '../../../navigation/navigation.types';
// import { useRoute } from '@react-navigation/native';

const PaymentDetailsForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  // let route: RouteProp<{Payments:{payeeName:string}},'Payments'> = useRoute()
  //   const {payeeName} = route.params
  // console.log(payeeName)
  const {colors} = useTheme();

  const form = useForm<PaymentDetailsFormData>({
    defaultValues: {
      ToPayee: 'Jack',
      statementMessage: '',
      payeeMessage: '',
    },
  });

  const {formState, handleSubmit} = form;

  const onSubmit: SubmitHandler<PaymentDetailsFormData> = data =>
    console.log(data);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <FormProvider {...form}>
        <View style={styles.toPayeeContainer}>
          <BaseInput name="ToPayee" title="To" placeholder="Jack" />
        </View>
        <View style={styles.amountContainer}>
          <AmountInput
            name="amountToSend"
            title="Amount to send"
            placeholder="0.00"
          />
        </View>

        <View>
          <Text style={styles.paymentMessages}>Payment messages</Text>
        </View>

        <MessageInput
          name="statementMessage"
          title="Your statement message"
          placeholder="none"
          maxLength={12}
        />
        <MessageInput
          name="payeeMessage"
          title="Payee message"
          placeholder="none"
          maxLength={18}
        />
      </FormProvider>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Continue"
          onPressFunction={handleSubmit(onSubmit)}
        />
      </View>
      <Pressable
        style={styles.textButtonContainer}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textButton}>Back</Text>
      </Pressable>
    </View>
  );
};
export default PaymentDetailsForm;

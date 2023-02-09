import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Text, View, Pressable} from 'react-native';

import CustomAmountInput from './components/amount-input/AmountInput';
import CustomButton from './components/customButton/CustomButton';
import CustomInput from './components/base-Input/BaseInput';
import CustomMessageInput from './components/message-Input/MessageInput';
import {styles} from './payment-details-form.styles';
import {PaymentDetailsFormData} from './payment-details-form.types';
import {NavigationType} from '../../../navigation/navigation.types';
// import { useRoute } from '@react-navigation/native';
import { useTheme } from '../../../components/theming';



const PaymentDetailsForm: React.FC= () => {
  const navigation = useNavigation<NavigationType>();
  // let route: RouteProp<{Payments:{payeeName:string}},'Payments'> = useRoute()
 
  //   const {payeeName} = route.params
  
  // console.log(payeeName)
  const {colors} = useTheme()

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<PaymentDetailsFormData>({
    defaultValues: {
      ToPayee: "Jack" ,
      statementMessage: '',
      payeeMessage: '',
    },
  });

  const onSubmit: SubmitHandler<PaymentDetailsFormData> = data =>
    console.log(data);

  return (
    <View style={[styles.container, {backgroundColor:colors.background}]}>
      <View style={styles.toPayeeContainer}>
        <CustomInput
          name="ToPayee"
          title="To"
          placeholder="Jack"
          control={control}
        />
      </View>
      <View style={styles.amountContainer}>
        <CustomAmountInput
          name="amountToSend"
          title="Amount to send"
          placeholder="0.00"
          control={control}
        />
      </View>

      <View>
        <Text style={styles.paymentMessages}>Payment messages</Text>
      </View>

      <CustomMessageInput
        name="statementMessage"
        title="Your statement message"
        placeholder="none"
        control={control}
        maxLength={12}
      />
      <CustomMessageInput
        name="payeeMessage"
        title="Payee message"
        placeholder="none"
        control={control}
        maxLength={18}
      />
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

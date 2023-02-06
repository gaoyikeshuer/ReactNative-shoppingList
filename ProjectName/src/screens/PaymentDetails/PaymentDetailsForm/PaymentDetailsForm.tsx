import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';
import {Text, View, Pressable} from 'react-native';

import CustomAmountInput from './components/customAmountInput/CustomAmountInput';
import CustomButton from './components/customButton/CustomButton';
import CustomInput from './components/customInput/CustomInput';
import CustomMessageInput from './components/customMessageInput/CustomMessageInput';
import {styles} from './payment-details-form.styles';
import {PaymentDetailsFormData} from './payment-details-form.types';
import {NavigationType} from '../../../navigation/navigation.types';

const PaymentDetailsForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<PaymentDetailsFormData>({
    defaultValues: {
      ToPayee: 'John McCabe',
      statementMessage: '',
      payeeMessage: '',
    },
  });

  const onSubmit: SubmitHandler<PaymentDetailsFormData> = data =>
    console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.inputBox1}>
        <CustomInput
          name="ToPayee"
          title="To"
          placeholder="Jack"
          control={control}
        />
      </View>
      <View style={styles.inputBox2}>
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

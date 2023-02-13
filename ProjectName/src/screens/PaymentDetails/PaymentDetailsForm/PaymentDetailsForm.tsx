import {zodResolver} from '@hookform/resolvers/zod';
import {RouteProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import {Text, View, Pressable} from 'react-native';
import {z} from 'zod';

import AmountInput from './components/amount-input/AmountInput';
import BaseInput from './components/base-Input/BaseInput';
import Button from './components/Button/Button';
import MessageInput from './components/message-Input/MessageInput';
import {styles} from './payment-details-form.styles';
import {PaymentDetailsFormData} from './payment-details-form.types';
import {useTheme} from '../../../components/theming';
import {NavigationType} from '../../../navigation/navigation.types';
import { useRoute } from '@react-navigation/native';

const PaymentDetailsForm: React.FC = () => {
  const validationSchema = z.object({
    toPayee: z.string().min(1, {message: 'to payee name is required'}),
    statementMessage: z
      .string()
      .min(1, {message: 'statement messages are required'}),
    payeeMessage: z
      .string()
      .min(1, {message: 'statement messages are required'}),
    amountToSend: z.string().min(1).max(6),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const navigation = useNavigation<NavigationType>();
  let route: RouteProp<{Payments:{payeeName:string}},'Payments'> = useRoute()
    const {payeeName} = route.params
  console.log(payeeName)
  const {colors} = useTheme();

  const form = useForm<ValidationSchema>({
    defaultValues: {
      toPayee: 'Jack',
      statementMessage: '',
      payeeMessage: '',
    },
    resolver: zodResolver(validationSchema),
  });

  const {formState, handleSubmit} = form;

  const onSubmit: SubmitHandler<ValidationSchema> = data => console.log(data);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <FormProvider {...form}>
        <View style={styles.toPayeeContainer}>
          <BaseInput name="toPayee" title="To" placeholder="Jack" />
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
        <Button
          label="Continue"
          onPress={handleSubmit(onSubmit)}
          textStyle={styles.buttonText}
        />
      </View>
      <Button
        label="Back"
        variant="text"
        onPress={() => navigation.navigate('Home')}
        textStyle={styles.textButton}
      />
    </View>
  );
};
export default PaymentDetailsForm;

import {zodResolver} from '@hookform/resolvers/zod';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {useForm, SubmitHandler, FormProvider} from 'react-hook-form';
import {Text, View, Pressable} from 'react-native';

import {validationSchema} from './payment-details-form.constants';
import {styles} from './payment-details-form.styles';
import {ValidationSchema} from './payment-details-form.types';
import Button from '../../../components/Button/Button';
import AmountInput from '../../../components/input/amount-input/AmountInput';
import BaseInput from '../../../components/input/base-Input/BaseInput';
import MessageInput from '../../../components/input/message-Input/MessageInput';
import {useTheme} from '../../../components/theming';
import {NavigationType} from '../../../navigation/navigation.types';

const PaymentDetailsForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const route: RouteProp<{Payments: {payeeName: string}}, 'Payments'> =
    useRoute();
  const {payeeName} = route.params;
  const {colors} = useTheme();

  const form = useForm<ValidationSchema>({
    defaultValues: {
      toPayee: payeeName,
      statementMessage: '',
      payeeMessage: '',
      amountToSend: 0,
    },
    resolver: zodResolver(validationSchema),
  });

  const {
    formState: {errors},
    handleSubmit,
  } = form;

  const onSubmit: SubmitHandler<ValidationSchema> = data => console.log(data);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <FormProvider {...form}>
        <View style={styles.toPayeeContainer}>
          <BaseInput
            name="toPayee"
            title="To"
            placeholder="Jack"
            maxLength={18}
          />
        </View>
        <View style={styles.amountContainer}>
          <AmountInput
            name="amountToSend"
            title="Amount to send"
            placeholder="0.00"
            message={errors.amountToSend?.message}
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

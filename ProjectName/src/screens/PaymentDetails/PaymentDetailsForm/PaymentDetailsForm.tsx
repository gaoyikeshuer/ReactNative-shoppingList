import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm } from "react-hook-form";
import { PaymentDetailsFormData } from "./payment-details-form.types";
import CustomInput from "./components/customInput/CustomInput";
import {styles} from './payment-details-form.styles'
import CustomAmountInput from "./components/customAmountInput/CustomAmountInput";
import CustomMessageInput from "./components/customMessageInput/customMessageInput";
import CustomButton from "./components/customButton/CustomButton";
import { Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';


const PaymentDetailsForm:React.FC = () =>{
  const navigation = useNavigation();
  
  const { control, handleSubmit, formState: { errors } } = useForm<PaymentDetailsFormData>({
    defaultValues: {
      ToPayee:'John McCabe'
    }
  });

  
  const onSubmit = data => console.log(data);

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
   placeholder="0"
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
   <CustomButton title="Continue" onPressFunction={handleSubmit(onSubmit)}/>
   </View>
   <Pressable style={styles.textButtonContainer} onPress={()=>navigation.navigate('Home')}>
<Text style={styles.textButton} >Back</Text>
   </Pressable>
    </View>
  );
}
export default PaymentDetailsForm
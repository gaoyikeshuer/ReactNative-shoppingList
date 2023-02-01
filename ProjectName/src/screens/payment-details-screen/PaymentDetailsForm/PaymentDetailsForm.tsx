import { Text, View, TextInput, Button, Alert, SafeAreaView } from "react-native";
import React,{FC} from 'react'
import { useForm, Controller } from "react-hook-form";
import { styles } from "./payment-details-form.styles";

interface PaymentDetails {
    toUser: string;
    amountToSend:number;
    statementMessage:string;
    payeeMessage:string;
}

const PaymentDetailsForm: FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          firstName: '',
          lastName: ''
        }
      });
      const onSubmit = data => console.log(data);
  return (
    <SafeAreaView style={styles.container}>
    <View style ={styles.formContainer}>

   
    <Text>To</Text>
    <Controller
      control={control}
      rules={{
       required: true,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={{width:100, height:20,backgroundColor:'white', paddingLeft:30, margin:20}}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name="firstName"
    />
    {errors.firstName && <Text>This is required.</Text>}

    <Controller
      control={control}
      rules={{
       maxLength: 100,
      }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          style={{width:100, height:20, backgroundColor:'white', paddingLeft:30, margin:20 }}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
      name="lastName"
    />

    <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  </SafeAreaView>
  )
}

export default PaymentDetailsForm
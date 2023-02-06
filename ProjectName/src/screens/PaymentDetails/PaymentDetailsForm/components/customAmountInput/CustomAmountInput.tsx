import { View, Text } from 'react-native'
import { Controller } from "react-hook-form";
import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './custom-amount-input.styles';
import { Image } from 'react-native';


const CustomAmountInput = ({control,name, title, placeholder}) => {
  
  const decimalRegex = /^\d+(\.\d{0,2})?$/;
  
  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>
 <Controller
    control={control}
    name={name}
    render={
      ({field:{value, onChange, onBlur}})=>(
        <View style={styles.container}>
            <TextInput
        keyboardType="decimal-pad"
        value={value}
        onChangeText={
          (text)=>{
            if (decimalRegex.test(text)) {
              let formattedValue = text;
            
              // setVal(formattedValue);
              onChange(formattedValue);
            }
          }
          }
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={12}
        style={styles.textAmountInput}
       
        // selection={{ start: val.indexOf('.') , end: val.indexOf('.') }}
        />
         <View style={styles.currencyIconContainer}>
          <View style={styles.currencyIcon}>
        
          <Image source={require('../../../../../assets/pictures/FlagofEurope.png')} style={styles.flag}/>
          <Text style={styles.currency}>EUR</Text>
          </View>
     
        
         
</View>

        </View>
      
      )
    }/>
    </View>
   
   

  )
}

export default CustomAmountInput
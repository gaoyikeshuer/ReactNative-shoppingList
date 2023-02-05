import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { Controller } from "react-hook-form";
import { styles } from './custom-input.styles';
import React from 'react'

const CustomInput= ({ control,name, title, placeholder}) => {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text> 
    <Controller
    control={control}
    name={name}
    render={
      ({field:{value, onChange, onBlur}})=>(
        <TextInput
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={styles.textInput}
        />
      )
    }/>
    </View>
  )
}



export default CustomInput
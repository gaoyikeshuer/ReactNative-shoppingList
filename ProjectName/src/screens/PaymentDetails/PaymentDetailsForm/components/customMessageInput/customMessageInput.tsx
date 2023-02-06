import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { Controller } from "react-hook-form";
import { styles } from './custom-message-input.styles';
import { useState } from 'react';
import React from 'react'

const CustomMessageInput= ({ control,name, title, placeholder, maxLength}) => {
 const [input, setInput] = useState('');
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
        onChangeText={
            (text)=>{
                setInput(text)
                onChange(text)
            }
        }
        onBlur={onBlur}
        placeholder={placeholder}
        style={styles.textInput}
        maxLength={maxLength}
        />
      )
    }/>
    <View style={styles.inputAmountContainer}>
    <Text style={styles.inputAmount}> {input.length}/{maxLength}</Text>
    </View>
    
    </View>
  )
}



export default CustomMessageInput
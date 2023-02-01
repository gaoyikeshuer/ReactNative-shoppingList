import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TextInputMask from 'react-native-text-input-mask'
import { MaskInputTypes } from './mask-input.types';
import { defaultFormatter } from '../utils';

const MaskInput: React.FC<MaskInputTypes> = ({
onChangeText, maxLength, formatter = defaultFormatter, value ='',...rest
}) => {
const [viewText, setViewText] = useState(value);
//why extracted = '' but not itself?
return (
    <View style = {styles.container}>
      <Text style={inputViewStyles}> {viewText}</Text>
      
       <TextInputMask 
       onChangeText={(masked,extracted) =>{
        setViewText(masked)
       }}
       />
    </View>
)
}
import React from "react";
import { useController } from "react-hook-form";

const FormInput: React.FC =({
type,name,rules,defaultValue,onOnceDirty,checkRulesOnMount,...props
})=>{
    const {field, fieldState} = useController({name,rules,defaultValue})
    const FormInputComponent = 
    return(
        <FormInputComponent
    )
}
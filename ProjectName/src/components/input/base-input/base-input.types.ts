import { StyleProp, ViewStyle } from "react-native";
import { TextInputProps } from "react-native";
export interface BaseInputTypes extends TextInputProps{
    label?:string;
    hint?:string;
    errorMessage?:string;
    iconSize?:number;
    iconColor?: string;
    inputBlockStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    disabled?:boolean;
    onChangeText?:(text:string) =>void;
    hideCharactersLengthCounter?:boolean;
    hintAccessibilityLabel?:string;
    onIconPress?:()=>void;
    forceValueUpdate?: boolean;
    border?: 'primary' | 'secondary';
    hidePlaceholderOnFocus?:boolean



}
import React from "react";
import { View,Text } from "react-native";
import  useTheme  from '../../../../theming/use-theme.hook'
import { TopComponentTypes } from "./top-component.types";
import { styles } from "./top-component.styles";
const TopComponent: React.FC<TopComponentTypes> = ({
  label, hint, isFocused, isError, hintAccessibilityLabel = hint
}) =>{
     const {colors} = useTheme()
     const labelStyle = [
        {
          color: isFocused ? colors.labelFocused : colors.label,
        },
        isError && {
          color: colors.error,
        },
      ];
    return(
        <View style={styles.container}>
        {!!label && (
          <Text style={labelStyle}
          accessibilityLabel={hintAccessibilityLabel} >
            {label}
          </Text>
        )}
        {!!hint && (
          <Text style={labelStyle}
            accessibilityLabel={hintAccessibilityLabel}>
            {hint}
          </Text>
        )}
      </View>
    )
}

export default TopComponent;
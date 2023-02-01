import { View, Text } from 'react-native'
import React, { FC,useState } from 'react'
import { BaseInputTypes } from './base-input.types'
import { styles } from './base-input.presets'
import useTheme from '@aib/components/theming/use-theme.hook'
import TopComponent from './components/top-component/TopComponent'
const BasicInput:FC<BaseInputTypes> = ({
    label,
    onFocus,
    onBlur,
    value,
    maxLength,
    errorMessage,
    inputBlockStyle,
    inputContainerStyle:inputContainerStyleProps,
    style,
    iconSize,
    iconColor,
    hint,
    disabled = false,
    hideCharactersLengthCounter = false,
    hintAccessibilityLabel,
    onIconPress,
    border ='primary',
    placeholder,
    hidePlaceholderOnFocus=false,
    ...rest

}) => {
    const {colors} = useTheme()
    const [isFocused, setIsFocused] = useState(false);
    const isError = !!errorMessage; // why double !!
    const borderVariant = {
        primary: isFocused ? colors.borderFocused : colors.border,
        secondary: isFocused ? colors.borderFocused : colors.borderInputSecondary,
      };
      const inputContainerStyle = [
        styles.inputContainer,
        {
          borderColor: borderVariant[border],
        },
        isError && {
          borderColor: colors.error,
        },
        disabled && {
          backgroundColor: colors.seat1,
        },
        !rest.multiline && styles.singleLineInputContainer,
        inputContainerStyleProps,
      ];
      const inputStyle = [
        styles.input,
        // { color: colors.typography.text.primary },
        style,
      ];
    

  return (
    <>
    <TopComponent
      label={label}
      hint={hint}
      isFocused={isFocused}
      isError={isError}
      hintAccessibilityLabel={hintAccessibilityLabel}
    />

    <View style={inputBlockStyle}>
      <View style={inputContainerStyle}>
        <TextInput
          style={inputStyle}
          onFocus={e => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          placeholderTextColor={colors.typography.textPlaceholder}
          placeholder={hidePlaceholderOnFocus && isFocused ? '' : placeholder}
          value={value}
          maxLength={maxLength}
          accessibilityLabel={label}
          accessibilityHint="Double tap to enter"
          editable={!disabled}
          inputAccessoryViewID={inputAccessoryViewID}
          testID={TestId.generate('input_field', testIdName)}
          accessible
          {...rest}
        />
        {rightComponent}
        <InputIcon
          iconName={iconName}
          iconSize={iconSize}
          iconColor={iconColor}
          isFocused={isFocused}
          onPress={onIconPress}
        />
      </View>

      <View style={styles.bottomLabelContainer}>
        <ErrorLabel
          testID={TestId.generate('input_error', testIdName)}
          message={errorMessage}
        />
        <CharactersLengthCounter
          hideCounter={hideCharactersLengthCounter}
          length={value?.length}
          maxLength={maxLength}
          style={styles.maxLengthLabel}
          testID={TestId.generate('input_counter', testIdName)}
        />
      </View>
    </View>
  </>
  )
}

export default BasicInput
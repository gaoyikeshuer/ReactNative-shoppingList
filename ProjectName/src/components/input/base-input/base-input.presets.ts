import { Platform, StyleSheet } from "react-native";

const FIX_IOS_VERTICAL_FONT_ALIGN = Platform.select({
    ios: {
      position: 'relative',
      top: -2,
    } as const,
  });

  export const styles = StyleSheet.create({
    input:{
        flex:1,
        fontSize:16,
        fontWeight:400,
        fontFamily:'Aspira',
        ...FIX_IOS_VERTICAL_FONT_ALIGN
    },
    inputContainer: {
        borderRadius: 4,
        borderWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        overflow: 'hidden',
        paddingLeft: 15,
        position: 'relative',
      },
      label:{
        marginBottom:6
      },
      maxLengthLabel:{
        position:'absolute',
        right:0,
        top:0
      },
      singleLineInputContainer:{
        alignItems:'center'
      }
  })
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    title:{
        fontFamily:'Aspira',
        fontSize:14,
        color:'#4D4D4D',
        fontWeight:'500',
        lineHeight:18
    },
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    textAmountInput:{
        height:56,
        borderRadius:4,
        borderColor:'#C3C3C3',
        borderWidth:1,
        paddingLeft:15,
        fontFamily:'Aspira',
        fontSize:16,
        flex:1
    },
    currencyIconContainer:{
        position:'absolute',
        right:0,
        width:107,
        height:56,
        backgroundColor:'#F5F5F5',
        borderBottomRightRadius:3,
        borderTopRightRadius:3,
        borderColor:'#C3C3C3',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
        
       
    },
    currencyIcon:{
        flexDirection:'row',
        width:'100%',
        padding:16,
        
        
    },
    flag:{
        width:24,
        height:15,
        marginRight:9
    },
    currency:{
        lineHeight:15,
        fontSize:14,
        fontFamily:'Aspira',
        fontWeight:'500',
        color:'#4D4D4D',
        height:15
    }
})
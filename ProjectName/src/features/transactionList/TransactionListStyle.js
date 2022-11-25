import React from "react";
import { StyleSheet } from "react-native";
const TransactionListStyle =StyleSheet.create({
    transactionTitle: {
        paddingHorizontal: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#C3C3C3',
      },
      titleDate: {
        color: '#7F2B7B',
        marginVertical: 4,
      },
      listContainer: {
        backgroundColor: 'white',
      },
      textContainer: {
        marginHorizontal: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 11,
        marginBottom: 17,
      },
      nameContainer: {
        width: 224,
      },
      textNumber:{
        fontSize: 16, fontFamily: 'Aspira', fontSize:16, fontWeight:'500'
      },
      textCurrency:{
        color: '#6E6E6E', fontFamily: 'Aspira', marginBottom:3
      },
      textName:{
        fontSize: 16,
        width: 224,
        marginBottom: 3,
        fontFamily: 'Aspira',
        fontWeight: '500',
      }
})
export default TransactionListStyle
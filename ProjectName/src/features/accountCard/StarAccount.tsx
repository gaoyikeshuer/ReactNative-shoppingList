import React from "react"
import {View, Text, SafeAreaView} from "react-native"
import {IconFavouriteFill} from "../../assets/icons"
import AccountCardStyle from "./AccountCardStyle"
import {useAppSelector} from "../../store/hooks"

const StarAccount = () => {
    const darkMode = useAppSelector(state => state.themeToggle)
    return (
        <SafeAreaView style={AccountCardStyle.accountCardContainer}>
            <SafeAreaView
                style={[
                    AccountCardStyle.starContainer,
                    {backgroundColor: darkMode.scheme == "dark" ? "#5A6168" : "white"},
                ]}>
                <View style={AccountCardStyle.starTitle}>
                    <Text style={AccountCardStyle.textTitle}>
            Office Supplies / Expenses
                    </Text>
                    <IconFavouriteFill width={18} color={"purple"} />
                </View>
                <Text
                    style={[
                        AccountCardStyle.bankNum,
                        {color: darkMode.scheme == "dark" ? "black" : "#6E6E6E"},
                    ]}>
          IE67AIBK93132200031333
                </Text>
                <Text
                    style={[
                        AccountCardStyle.bankInfo,
                        {color: darkMode.scheme == "dark" ? "black" : "#6E6E6E"},
                    ]}>
          Current Account | EUR
                </Text>
                <View style={AccountCardStyle.bankContainer}>
                    <View style={AccountCardStyle.bankTitle}>
                        <Text
                            style={{
                                color: darkMode.scheme == "dark" ? "black" : "#6E6E6E",
                                fontFamily: "Aspira",
                            }}>
              Balance
                        </Text>
                        <Text
                            style={{
                                color: darkMode.scheme == "dark" ? "black" : "#6E6E6E",
                                fontFamily: "Aspira",
                            }}>
              Avaliable funds
                        </Text>
                    </View>
                    <View style={AccountCardStyle.money}>
                        <Text style={AccountCardStyle.moneyText}>15,678.89</Text>
                        <Text style={AccountCardStyle.moneyText}>14,768.12</Text>
                    </View>
                </View>
            </SafeAreaView>
            <View style={{width: 5, backgroundColor: "green", height: "100%"}} />
        </SafeAreaView>
    )
}

export default StarAccount

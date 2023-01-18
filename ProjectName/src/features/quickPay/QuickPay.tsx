import React from "react"
import {Text, SafeAreaView, View, Pressable, FlatList} from "react-native"
import ListAccounts from "./components/ListAccounts"
import AddAcounts from "./components/AddAcounts"
import QuickPayStyle from "./QuickPayStyle"
import {Avatar} from "../../types/Avatar"
const QuickPay = ({payAccounts}: {payAccounts: Avatar[]}) => {
    return (
        <SafeAreaView>
            <View style={QuickPayStyle.QuickPayTitle}>
                <Text style={QuickPayStyle.QuickPayText}>QUICK PAY</Text>
                <Pressable>
                    <Text style={QuickPayStyle.ShowAllText}>Show all {">"} </Text>
                </Pressable>
            </View>

            <FlatList
                numColumns={5}
                columnWrapperStyle={{
                    alignItems: "flex-start",
                    flexDirection: "row",
                    flex: 0.2,
                }}
                style={QuickPayStyle.avatarContainer}
                data={[...payAccounts.slice(0, 9), {plusImage: true}]}
                renderItem={({item}: {item: any}) => {
                    if (item.plusImage) {
                        return <AddAcounts />
                    }
                    return <ListAccounts item={item} />
                }}
            />
        </SafeAreaView>
    )
}

export default QuickPay

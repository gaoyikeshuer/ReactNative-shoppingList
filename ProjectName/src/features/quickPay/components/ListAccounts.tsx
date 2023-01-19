import React from "react"
import {View, Text, StyleSheet} from "react-native"
import AvatarGenerator from "./AvatarGenerator"
import {User} from "../../../types/User"
import {useAppSelector} from "../../../store/hooks"

const ListAccounts = ({item}: {item: User}) => {
    const darkMode = useAppSelector(state => state.themeToggle)
    return (
        <View style={styles.avatarWrap}>
            <AvatarGenerator name={item.name} />
            <Text
                numberOfLines={1}
                style={[
                    styles.avatarName,
                    {color: darkMode.scheme == "dark" ? "#6E6E6E" : "black"},
                ]}>
                {item.name}{" "}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    avatarWrap: {
        flex: 0.2,
        alignItems: "center",
        marginTop: 15,
    },
    avatarName: {
        fontSize: 11,
        marginTop: 5,
        fontWeight: "500",
        fontFamily: "Aspira-Medium",
    },
})

export default ListAccounts

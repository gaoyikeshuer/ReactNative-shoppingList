import React from "react"
import {View, Text} from "react-native"
import {IconPlus} from "../../../assets/icons"
import {useAppSelector} from "../../../store/hooks"
import addAcountStyles from "./AddAcount.style"

const AddAcounts = () => {
    const darkMode = useAppSelector(state => state.themeToggle)
    return (
        <View style={addAcountStyles.addContainer}>
            <View
                style={[
                    addAcountStyles.addCircle,
                    {backgroundColor: darkMode.scheme == "dark" ? "#5A6168" : "white"},
                ]}>
                <IconPlus color="green" />
            </View>
            <Text
                style={[
                    addAcountStyles.addText,
                    {color: darkMode.scheme == "dark" ? "#6E6E6E" : "black"},
                ]}>
        Add new
            </Text>
        </View>
    )
}

export default AddAcounts

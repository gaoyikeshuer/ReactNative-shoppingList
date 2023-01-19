import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingVertical: 14,
        display: "flex",
        flex: 1,
    },
    darkContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
    },
    absolute: {
        position: "absolute",
        top: 0,
    },
})

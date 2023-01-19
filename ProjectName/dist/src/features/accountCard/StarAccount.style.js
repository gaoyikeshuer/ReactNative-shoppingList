"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const AccountCardStyle = react_native_1.StyleSheet.create({
    accountCardContainer: {
        marginHorizontal: 12,
        backgroundColor: "white",
        marginVertical: 12,
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
        marginTop: 31,
        marginBottom: 17,
    },
    starContainer: {
        flexDirection: "column",
        paddingHorizontal: 16,
        flex: 1,
    },
    starTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 11,
        paddingBottom: 4,
    },
    bankNum: {
        color: "#6E6E6E",
        fontSize: 14,
        fontFamily: "Aspira",
        marginBottom: 4,
    },
    bankInfo: {
        color: "#6E6E6E",
        fontSize: 14,
        fontFamily: "Aspira",
    },
    bankContainer: {
        marginTop: 16,
        justifyContent: "space-between",
    },
    textTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "black",
        fontFamily: "Aspira-Medium",
    },
    bankTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    money: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    moneyText: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 24,
        fontFamily: "Aspira-Medium",
        color: "black",
        marginBottom: 14,
    },
});
exports.default = AccountCardStyle;
//# sourceMappingURL=StarAccount.style.js.map
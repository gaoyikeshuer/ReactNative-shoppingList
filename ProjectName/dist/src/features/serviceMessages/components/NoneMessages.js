"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const icons_1 = require("../../../assets/icons");
const NoneMessages = () => {
    return (react_1.default.createElement(react_native_1.View, { style: styles.NoneMessageContainer },
        react_1.default.createElement(icons_1.IconInbox, null),
        react_1.default.createElement(react_native_1.Text, { style: styles.NoneMessageTitle }, "No Messages"),
        react_1.default.createElement(react_native_1.Text, null, "You don't have any messages at this time.")));
};
const styles = react_native_1.StyleSheet.create({
    NoneMessageContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 45,
        paddingTop: 29,
    },
    NoneMessageTitle: {
        marginVertical: 3,
        fontSize: 16,
        fontFamily: "Aspira",
    },
});
exports.default = NoneMessages;
//# sourceMappingURL=NoneMessages.js.map
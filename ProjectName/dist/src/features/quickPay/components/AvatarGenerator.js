"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const AvatarGenerator = ({ name }) => {
    var _a;
    const initials = name.split(" ")[0].charAt(0).toUpperCase() +
        ((_a = name.split(" ").pop()) === null || _a === void 0 ? void 0 : _a.charAt(0).toUpperCase());
    return (react_1.default.createElement(react_native_1.View, { style: styles.avatarCircle },
        react_1.default.createElement(react_native_1.Text, { style: styles.avatarText }, initials)));
};
const styles = react_native_1.StyleSheet.create({
    avatarCircle: {
        width: 52,
        height: 52,
        backgroundColor: "#7F2B7B",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 52,
    },
    avatarText: {
        color: "white",
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
        paddingTop: 2,
        fontFamily: "Aspira-Medium",
    },
});
exports.default = AvatarGenerator;
//# sourceMappingURL=AvatarGenerator.js.map
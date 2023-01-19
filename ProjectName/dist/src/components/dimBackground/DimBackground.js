"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_2 = require("react-native");
const hooks_1 = require("../../store/hooks");
const DimBackground = () => {
    const windowWidth = react_native_2.Dimensions.get("window").width;
    const windowHeight = react_native_2.Dimensions.get("window").height;
    const modalToggle = (0, hooks_1.useAppSelector)(state => state.modalToggle);
    return (react_1.default.createElement(react_native_1.View, { style: modalToggle.active
            ? {
                width: windowWidth,
                backgroundColor: "rgba(0,0,0,0.5)",
                height: windowHeight,
                position: "absolute",
                zIndex: 1000,
            }
            : {} }));
};
exports.default = DimBackground;
//# sourceMappingURL=DimBackground.js.map
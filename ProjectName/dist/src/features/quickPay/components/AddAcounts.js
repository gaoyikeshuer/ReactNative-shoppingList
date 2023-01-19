"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const icons_1 = require("../../../assets/icons");
const hooks_1 = require("../../../store/hooks");
const AddAcount_style_1 = __importDefault(require("./AddAcount.style"));
const AddAcounts = () => {
    const darkMode = (0, hooks_1.useAppSelector)(state => state.themeToggle);
    return (react_1.default.createElement(react_native_1.View, { style: AddAcount_style_1.default.addContainer },
        react_1.default.createElement(react_native_1.View, { style: [
                AddAcount_style_1.default.addCircle,
                { backgroundColor: darkMode.scheme == "dark" ? "#5A6168" : "white" },
            ] },
            react_1.default.createElement(icons_1.IconPlus, { color: "green" })),
        react_1.default.createElement(react_native_1.Text, { style: [
                AddAcount_style_1.default.addText,
                { color: darkMode.scheme == "dark" ? "#6E6E6E" : "black" },
            ] }, "Add new")));
};
exports.default = AddAcounts;
//# sourceMappingURL=AddAcounts.js.map
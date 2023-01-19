"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const native_1 = require("@react-navigation/native");
const native_stack_1 = require("@react-navigation/native-stack");
const tabs_1 = __importDefault(require("./src/navigation/tabs"));
const react_native_1 = require("react-native");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("./src/store/store");
require("intl");
require("intl/locale-data/jsonp/en");
const Stack = (0, native_stack_1.createNativeStackNavigator)();
function App() {
    (0, react_1.useEffect)(() => {
        react_native_1.LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);
    return (React.createElement(native_1.NavigationContainer, null,
        React.createElement(react_redux_1.Provider, { store: store_1.store },
            React.createElement(Stack.Navigator, { screenOptions: {
                    headerShown: false,
                }, initialRouteName: "Home" },
                React.createElement(Stack.Group, null,
                    React.createElement(Stack.Screen, { name: "Home", component: tabs_1.default }))))));
}
exports.default = App;
//# sourceMappingURL=App.js.map
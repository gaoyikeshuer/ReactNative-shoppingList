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
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const QuickPay_1 = __importDefault(require("../features/quickPay/QuickPay"));
const StarAccount_1 = __importDefault(require("../features/accountCard/StarAccount"));
const TransactionList_1 = __importDefault(require("../features/transactionList/TransactionList"));
const ServiceMessages_1 = __importDefault(require("../features/serviceMessages/ServiceMessages"));
const themeToggleSlice_1 = require("../store/themeToggleSlice/themeToggleSlice");
const DarkModeStyle_1 = __importDefault(require("../theme/DarkModeStyle"));
const react_native_2 = require("react-native");
const BlurScreen_1 = __importDefault(require("../components/BlurScreen/BlurScreen"));
const hooks_1 = require("../store/hooks");
const Users_constant_1 = require("../constants/Users.constant");
const themeToggleSlice_2 = require("../store/themeToggleSlice");
const Home_style_1 = require("./Home.style");
const Home = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const darkmode = (0, themeToggleSlice_2.useThemeToggle)().isDarkModeState;
    react_native_1.Appearance.addChangeListener(scheme => {
        dispatch((0, themeToggleSlice_1.isDarkMode)({ scheme: scheme.colorScheme }));
    });
    (0, react_1.useEffect)(() => {
        const appStateListener = react_native_2.AppState.addEventListener("change", nextAppState => {
            setAppState(nextAppState);
        });
        return () => {
            appStateListener === null || appStateListener === void 0 ? void 0 : appStateListener.remove();
        };
    }, []);
    const [appState, setAppState] = (0, react_1.useState)(react_native_2.AppState.currentState);
    const modalToggle = (0, hooks_1.useAppSelector)(state => state.modalToggle);
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: darkmode == "dark" ? DarkModeStyle_1.default.container : Home_style_1.styles.container },
        react_1.default.createElement(react_native_1.Modal, { animationType: "slide", visible: modalToggle.active, presentationStyle: "overFullScreen", transparent: true },
            react_1.default.createElement(ServiceMessages_1.default, null)),
        react_1.default.createElement(QuickPay_1.default, { payAccounts: Users_constant_1.Users }),
        react_1.default.createElement(StarAccount_1.default, null),
        react_1.default.createElement(react_native_1.View, { style: { flex: 1 } },
            react_1.default.createElement(TransactionList_1.default, null)),
        appState != "active" ? react_1.default.createElement(BlurScreen_1.default, null) : null));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map
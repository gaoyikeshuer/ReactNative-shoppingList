"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeToggle = void 0;
const hooks_1 = require("../hooks");
const themeToggleSlice_1 = require("./themeToggleSlice");
const useThemeToggle = () => {
    const isDarkModeState = (0, hooks_1.useAppSelector)(themeToggleSlice_1.isDarkModeSelector);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const isDarkModeAction = dispatch(themeToggleSlice_1.isDarkMode);
    return {
        isDarkModeState,
        isDarkModeAction,
    };
};
exports.useThemeToggle = useThemeToggle;
//# sourceMappingURL=index.js.map
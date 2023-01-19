"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDarkModeSelector = exports.isDarkMode = exports.themeToggle = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    scheme: "light",
};
exports.themeToggle = (0, toolkit_1.createSlice)({
    name: "themeToggle",
    initialState,
    reducers: {
        isDarkMode: (state, action) => {
            state.scheme = action.payload.scheme;
        },
    },
});
exports.isDarkMode = exports.themeToggle.actions.isDarkMode;
const isDarkModeSelector = (state) => state.themeToggle.scheme;
exports.isDarkModeSelector = isDarkModeSelector;
exports.default = exports.themeToggle.reducer;
//# sourceMappingURL=themeToggleSlice.js.map
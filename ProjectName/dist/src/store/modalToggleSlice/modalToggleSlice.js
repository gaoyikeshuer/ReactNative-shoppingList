"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isModalActiveSelector = exports.toggleActive = exports.modalToggle = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    active: false,
};
exports.modalToggle = (0, toolkit_1.createSlice)({
    name: "modalToggle",
    initialState,
    reducers: {
        toggleActive: state => {
            state.active = !state.active;
        },
    },
});
exports.toggleActive = exports.modalToggle.actions.toggleActive;
const isModalActiveSelector = (state) => state.modalToggle.active;
exports.isModalActiveSelector = isModalActiveSelector;
exports.default = exports.modalToggle.reducer;
//# sourceMappingURL=modalToggleSlice.js.map
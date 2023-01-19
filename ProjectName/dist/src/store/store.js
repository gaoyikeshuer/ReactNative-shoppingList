"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const messagesSlice_1 = __importDefault(require("./messagesSlice/messagesSlice"));
const modalToggleSlice_1 = __importDefault(require("./modalToggleSlice/modalToggleSlice"));
const monthTabSlice_1 = __importDefault(require("./monthTabSlice/monthTabSlice"));
const themeToggleSlice_1 = __importDefault(require("./themeToggleSlice/themeToggleSlice"));
const AppStateSlice_1 = __importDefault(require("./AppStateSlice/AppStateSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        mes: messagesSlice_1.default,
        modalToggle: modalToggleSlice_1.default,
        monthTab: monthTabSlice_1.default,
        themeToggle: themeToggleSlice_1.default,
        AppState: AppStateSlice_1.default,
    },
});
//# sourceMappingURL=store.js.map
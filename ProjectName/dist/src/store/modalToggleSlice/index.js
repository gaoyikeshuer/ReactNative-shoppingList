"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalToggle = void 0;
const hooks_1 = require("../hooks");
const modalToggleSlice_1 = require("./modalToggleSlice");
const useModalToggle = () => {
    const isModalActiveState = (0, hooks_1.useAppSelector)(modalToggleSlice_1.isModalActiveSelector);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const toggleActiveAction = dispatch(modalToggleSlice_1.toggleActive);
    return {
        isModalActiveState,
        toggleActiveAction,
    };
};
exports.useModalToggle = useModalToggle;
//# sourceMappingURL=index.js.map
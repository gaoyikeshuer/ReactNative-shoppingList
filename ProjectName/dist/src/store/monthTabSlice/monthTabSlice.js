'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.monthSelector = exports.changeMonth = exports.monthTabSlice = void 0;
const toolkit_1 = require('@reduxjs/toolkit');
const initialState = {
  item: 0,
};
exports.monthTabSlice = (0, toolkit_1.createSlice)({
  name: 'monthTab',
  initialState,
  reducers: {
    changeMonth: (state, action) => {
      var _a;
      state.item =
        (_a = action.payload.item) === null || _a === void 0
          ? void 0
          : _a.month;
    },
  },
});
exports.changeMonth = exports.monthTabSlice.actions.changeMonth;
const monthSelector = state => state.monthTab.item;
exports.monthSelector = monthSelector;
exports.default = exports.monthTabSlice.reducer;
//# sourceMappingURL=monthTabSlice.js.map

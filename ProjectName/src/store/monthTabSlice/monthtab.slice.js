'use strict';
exports.__esModule = true;
exports.monthSelector = exports.changeMonth = exports.monthTabSlice = void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var initialState = {
  item: 0,
};
exports.monthTabSlice = (0, toolkit_1.createSlice)({
  name: 'monthTab',
  initialState: initialState,
  reducers: {
    changeMonth: function (state, action) {
      var _a;
      state.item =
        (_a = action.payload.item) === null || _a === void 0
          ? void 0
          : _a.month;
    },
  },
});
exports.changeMonth = exports.monthTabSlice.actions.changeMonth;
var monthSelector = function (state) {
  return state.monthTab.item;
};
exports.monthSelector = monthSelector;
exports['default'] = exports.monthTabSlice.reducer;

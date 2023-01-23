'use strict';
exports.__esModule = true;
exports.isModalActiveSelector =
  exports.toggleActive =
  exports.modalToggle =
    void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var initialState = {
  active: false,
};
exports.modalToggle = (0, toolkit_1.createSlice)({
  name: 'modalToggle',
  initialState: initialState,
  reducers: {
    toggleActive: function (state) {
      state.active = !state.active;
    },
  },
});
exports.toggleActive = exports.modalToggle.actions.toggleActive;
var isModalActiveSelector = function (state) {
  return state.modalToggle.active;
};
exports.isModalActiveSelector = isModalActiveSelector;
exports['default'] = exports.modalToggle.reducer;

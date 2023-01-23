'use strict';
exports.__esModule = true;
exports.isDarkModeSelector = exports.isDarkMode = exports.themeToggle = void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var initialState = {
  scheme: 'light',
};
exports.themeToggle = (0, toolkit_1.createSlice)({
  name: 'themeToggle',
  initialState: initialState,
  reducers: {
    isDarkMode: function (state, action) {
      state.scheme = action.payload.scheme;
    },
  },
});
exports.isDarkMode = exports.themeToggle.actions.isDarkMode;
var isDarkModeSelector = function (state) {
  return state.themeToggle.scheme;
};
exports.isDarkModeSelector = isDarkModeSelector;
exports['default'] = exports.themeToggle.reducer;

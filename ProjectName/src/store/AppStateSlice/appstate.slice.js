'use strict';
exports.__esModule = true;
exports.isAppActiveSelector =
  exports.AppStateActive =
  exports.AppState =
    void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var initialState = {
  active: false,
};
exports.AppState = (0, toolkit_1.createSlice)({
  name: 'AppState',
  initialState: initialState,
  reducers: {
    AppStateActive: function (state) {
      state.active = !state.active;
    },
  },
});
exports.AppStateActive = exports.AppState.actions.AppStateActive;
var isAppActiveSelector = function (state) {
  return state.AppState.active;
};
exports.isAppActiveSelector = isAppActiveSelector;
exports['default'] = exports.AppState.reducer;

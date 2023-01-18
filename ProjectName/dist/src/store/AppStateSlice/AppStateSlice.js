'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.isAppActiveSelector =
  exports.AppStateActive =
  exports.AppState =
    void 0;
const toolkit_1 = require('@reduxjs/toolkit');
const initialState = {
  active: false,
};
exports.AppState = (0, toolkit_1.createSlice)({
  name: 'AppState',
  initialState,
  reducers: {
    AppStateActive: state => {
      state.active = !state.active;
    },
  },
});
exports.AppStateActive = exports.AppState.actions.AppStateActive;
const isAppActiveSelector = state => state.AppState.active;
exports.isAppActiveSelector = isAppActiveSelector;
exports.default = exports.AppState.reducer;
//# sourceMappingURL=AppStateSlice.js.map

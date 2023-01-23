'use strict';
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var messages_slice_1 = require('./messagesSlice/messages.slice');
var modaltoggle_slice_1 = require('./modalToggleSlice/modaltoggle.slice');
var monthtab_slice_1 = require('./monthTabSlice/monthtab.slice');
var themetoggle_slice_1 = require('./themeToggleSlice/themetoggle.slice');
var appstate_slice_1 = require('./AppStateSlice/appstate.slice');
exports.store = (0, toolkit_1.configureStore)({
  reducer: {
    mes: messages_slice_1['default'],
    modalToggle: modaltoggle_slice_1['default'],
    monthTab: monthtab_slice_1['default'],
    themeToggle: themetoggle_slice_1['default'],
    AppState: appstate_slice_1['default'],
  },
});

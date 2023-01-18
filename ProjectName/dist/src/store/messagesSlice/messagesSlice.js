'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.MessagesSelector = exports.deleteMes = exports.messageSlice = void 0;
const toolkit_1 = require('@reduxjs/toolkit');
const initialState = [
  {
    id: 1,
    text: 'We are continuing to improve your new iBB service, and it will be unavailable on Friday 7th September from 17:00 until 19:00.',
  },
  {
    id: 2,
    text: 'There has been a recent rise in text messages asking users for their login details. At AIB, we will never ask you for your password or PIN code.',
  },
  {id: 3, text: 'Hello'},
];
exports.messageSlice = (0, toolkit_1.createSlice)({
  name: 'mes',
  initialState,
  reducers: {
    deleteMes: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});
exports.deleteMes = exports.messageSlice.actions.deleteMes;
const MessagesSelector = state => state.mes;
exports.MessagesSelector = MessagesSelector;
exports.default = exports.messageSlice.reducer;
//# sourceMappingURL=messagesSlice.js.map

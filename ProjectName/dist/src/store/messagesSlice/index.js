'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.useMessages = void 0;
const hooks_1 = require('../hooks');
const messagesSlice_1 = require('./messagesSlice');
const useMessages = () => {
  const MessagesState = (0, hooks_1.useAppSelector)(
    messagesSlice_1.MessagesSelector,
  );
  const dispatch = (0, hooks_1.useAppDispatch)();
  const deleteMesAction = dispatch(messagesSlice_1.deleteMes);
  return {
    MessagesState,
    deleteMesAction,
  };
};
exports.useMessages = useMessages;
//# sourceMappingURL=index.js.map

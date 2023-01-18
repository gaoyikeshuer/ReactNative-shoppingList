'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const react_native_1 = require('react-native');
const icons_1 = require('../../assets/icons');
const ListMessages_1 = __importDefault(require('./components/ListMessages'));
const NoneMessages_1 = __importDefault(require('./components/NoneMessages'));
const modalToggleSlice_1 = require('../../store/modalToggleSlice/modalToggleSlice');
const ServiceMessagesStyle_1 = __importDefault(
  require('./ServiceMessagesStyle'),
);
const hooks_1 = require('../../store/hooks');
const messagesSlice_1 = require('../../store/messagesSlice');
const ServiceMessages = () => {
  const messages = (0, messagesSlice_1.useMessages)().MessagesState;
  const darkMode = (0, hooks_1.useAppSelector)(state => state.themeToggle);
  const dispatch = (0, hooks_1.useAppDispatch)();
  return react_1.default.createElement(
    react_native_1.SafeAreaView,
    {
      style: [
        ServiceMessagesStyle_1.default.modalContainer,
        {backgroundColor: darkMode.scheme == 'dark' ? '#5A6168' : 'white'},
      ],
    },
    react_1.default.createElement(
      react_native_1.View,
      {style: ServiceMessagesStyle_1.default.modalHeader},
      react_1.default.createElement(
        react_native_1.Text,
        {style: ServiceMessagesStyle_1.default.modalText},
        'Service Message',
      ),
      react_1.default.createElement(
        react_native_1.Pressable,
        {
          style: ServiceMessagesStyle_1.default.modalClose,
          onPress: () => dispatch((0, modalToggleSlice_1.toggleActive)()),
        },
        react_1.default.createElement(icons_1.IconX, null),
      ),
    ),
    messages.length == 0 &&
      react_1.default.createElement(NoneMessages_1.default, null),
    react_1.default.createElement(react_native_1.FlatList, {
      scrollEnabled: false,
      data: messages,
      renderItem: ({item}) =>
        react_1.default.createElement(ListMessages_1.default, {item: item}),
    }),
  );
};
exports.default = ServiceMessages;
//# sourceMappingURL=ServiceMessages.js.map

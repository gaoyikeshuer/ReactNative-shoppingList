'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const react_native_1 = require('react-native');
const hooks_1 = require('../../../store/hooks');
const messagesSlice_1 = require('../../../store/messagesSlice/messagesSlice');
const icons_1 = require('../../../assets/icons');
const ListMessage = ({item}) => {
  const dispatch = (0, hooks_1.useAppDispatch)();
  return react_1.default.createElement(
    react_native_1.SafeAreaView,
    {style: styles.messageList},
    react_1.default.createElement(
      react_native_1.Pressable,
      {onPress: () => dispatch((0, messagesSlice_1.deleteMes)({id: item.id}))},
      react_1.default.createElement(icons_1.IconXCircle, null),
    ),
    react_1.default.createElement(
      react_native_1.Text,
      {style: styles.messageText},
      item.text,
    ),
  );
};
const styles = react_native_1.StyleSheet.create({
  messageList: {
    marginHorizontal: 14,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    alignItems: 'center',
  },
  messageText: {
    flexWrap: 'wrap',
    paddingLeft: 14,
    flex: 1,
    paddingBottom: 18,
    paddingTop: 12,
    fontFamily: 'Aspira',
  },
});
exports.default = ListMessage;
//# sourceMappingURL=ListMessages.js.map

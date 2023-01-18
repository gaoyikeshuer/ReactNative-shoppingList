'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const react_native_1 = require('react-native');
const ListAccounts_1 = __importDefault(require('./components/ListAccounts'));
const AddAcounts_1 = __importDefault(require('./components/AddAcounts'));
const QuickPayStyle_1 = __importDefault(require('./QuickPayStyle'));
const QuickPay = ({payAccounts}) => {
  return react_1.default.createElement(
    react_native_1.SafeAreaView,
    null,
    react_1.default.createElement(
      react_native_1.View,
      {style: QuickPayStyle_1.default.QuickPayTitle},
      react_1.default.createElement(
        react_native_1.Text,
        {style: QuickPayStyle_1.default.QuickPayText},
        'QUICK PAY',
      ),
      react_1.default.createElement(
        react_native_1.Pressable,
        null,
        react_1.default.createElement(
          react_native_1.Text,
          {style: QuickPayStyle_1.default.ShowAllText},
          'Show all ',
          '>',
          ' ',
        ),
      ),
    ),
    react_1.default.createElement(react_native_1.FlatList, {
      numColumns: 5,
      columnWrapperStyle: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 0.2,
      },
      style: QuickPayStyle_1.default.avatarContainer,
      data: [...payAccounts.slice(0, 9), {plusImage: true}],
      renderItem: ({item}) => {
        if (item.plusImage) {
          return react_1.default.createElement(AddAcounts_1.default, null);
        }
        return react_1.default.createElement(ListAccounts_1.default, {
          item: item,
        });
      },
    }),
  );
};
exports.default = QuickPay;
//# sourceMappingURL=QuickPay.js.map

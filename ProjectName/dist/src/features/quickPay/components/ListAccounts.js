'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const react_native_1 = require('react-native');
const AvatarGenerator_1 = __importDefault(require('./AvatarGenerator'));
const hooks_1 = require('../../../store/hooks');
const ListAccounts = ({item}) => {
  const darkMode = (0, hooks_1.useAppSelector)(state => state.themeToggle);
  return react_1.default.createElement(
    react_native_1.View,
    {style: styles.avatarWrap},
    react_1.default.createElement(AvatarGenerator_1.default, {name: item.name}),
    react_1.default.createElement(
      react_native_1.Text,
      {
        numberOfLines: 1,
        style: [
          styles.avatarName,
          {color: darkMode.scheme == 'dark' ? '#6E6E6E' : 'black'},
        ],
      },
      item.name,
      ' ',
    ),
  );
};
const styles = react_native_1.StyleSheet.create({
  avatarWrap: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 52,
  },
  avatarName: {
    fontSize: 11,
    marginTop: 5,
    fontWeight: '500',
    fontFamily: 'Aspira-Medium',
  },
});
exports.default = ListAccounts;
//# sourceMappingURL=ListAccounts.js.map

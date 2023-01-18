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
const AccountCardStyle_1 = __importDefault(require('./AccountCardStyle'));
const hooks_1 = require('../../store/hooks');
const StarAccount = () => {
  const darkMode = (0, hooks_1.useAppSelector)(state => state.themeToggle);
  return react_1.default.createElement(
    react_native_1.SafeAreaView,
    {style: AccountCardStyle_1.default.accountCardContainer},
    react_1.default.createElement(
      react_native_1.SafeAreaView,
      {
        style: [
          AccountCardStyle_1.default.starContainer,
          {backgroundColor: darkMode.scheme == 'dark' ? '#5A6168' : 'white'},
        ],
      },
      react_1.default.createElement(
        react_native_1.View,
        {style: AccountCardStyle_1.default.starTitle},
        react_1.default.createElement(
          react_native_1.Text,
          {style: AccountCardStyle_1.default.textTitle},
          'Office Supplies / Expenses',
        ),
        react_1.default.createElement(icons_1.IconFavouriteFill, {
          width: 18,
          color: 'purple',
        }),
      ),
      react_1.default.createElement(
        react_native_1.Text,
        {
          style: [
            AccountCardStyle_1.default.bankNum,
            {color: darkMode.scheme == 'dark' ? 'black' : '#6E6E6E'},
          ],
        },
        'IE67AIBK93132200031333',
      ),
      react_1.default.createElement(
        react_native_1.Text,
        {
          style: [
            AccountCardStyle_1.default.bankInfo,
            {color: darkMode.scheme == 'dark' ? 'black' : '#6E6E6E'},
          ],
        },
        'Current Account | EUR',
      ),
      react_1.default.createElement(
        react_native_1.View,
        {style: AccountCardStyle_1.default.bankContainer},
        react_1.default.createElement(
          react_native_1.View,
          {style: AccountCardStyle_1.default.bankTitle},
          react_1.default.createElement(
            react_native_1.Text,
            {
              style: {
                color: darkMode.scheme == 'dark' ? 'black' : '#6E6E6E',
                fontFamily: 'Aspira',
              },
            },
            'Balance',
          ),
          react_1.default.createElement(
            react_native_1.Text,
            {
              style: {
                color: darkMode.scheme == 'dark' ? 'black' : '#6E6E6E',
                fontFamily: 'Aspira',
              },
            },
            'Avaliable funds',
          ),
        ),
        react_1.default.createElement(
          react_native_1.View,
          {style: AccountCardStyle_1.default.money},
          react_1.default.createElement(
            react_native_1.Text,
            {style: AccountCardStyle_1.default.moneyText},
            '15,678.89',
          ),
          react_1.default.createElement(
            react_native_1.Text,
            {style: AccountCardStyle_1.default.moneyText},
            '14,768.12',
          ),
        ),
      ),
    ),
    react_1.default.createElement(react_native_1.View, {
      style: {width: 5, backgroundColor: 'green', height: '100%'},
    }),
  );
};
exports.default = StarAccount;
//# sourceMappingURL=StarAccount.js.map

'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const react_native_1 = require('react-native');
const icons_1 = require('../../../assets/icons');
const hooks_1 = require('../../../store/hooks');
const AddAcounts = () => {
  const darkMode = (0, hooks_1.useAppSelector)(state => state.themeToggle);
  return react_1.default.createElement(
    react_native_1.View,
    {style: styles.addContainer},
    react_1.default.createElement(
      react_native_1.View,
      {
        style: [
          styles.addCircle,
          {backgroundColor: darkMode.scheme == 'dark' ? '#5A6168' : 'white'},
        ],
      },
      react_1.default.createElement(icons_1.IconPlus, {color: 'green'}),
    ),
    react_1.default.createElement(
      react_native_1.Text,
      {
        style: [
          styles.addText,
          {color: darkMode.scheme == 'dark' ? '#6E6E6E' : 'black'},
        ],
      },
      'Add new',
    ),
  );
};
const styles = react_native_1.StyleSheet.create({
  addContainer: {
    flex: 0.2,
    alignItems: 'center',
    marginTop: 15,
  },
  addCircle: {
    borderWidth: 2,
    height: 52,
    width: 52,
    borderRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C3C3C3',
    backgroundColor: 'white',
  },
  addText: {
    fontSize: 11,
    marginTop: 4,
    fontFamily: 'Aspira',
    fontWeight: '500',
  },
});
exports.default = AddAcounts;
//# sourceMappingURL=AddAcounts.js.map

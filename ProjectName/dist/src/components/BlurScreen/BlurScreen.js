'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importDefault(require('react'));
const blur_1 = require('@react-native-community/blur');
const react_native_1 = require('react-native');
const BlurScreen = () => {
  return react_1.default.createElement(blur_1.BlurView, {
    style: styles.absolute,
    blurType: 'light',
    blurAmount: 10,
    blurRadius: 5,
  });
};
const styles = react_native_1.StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
exports.default = BlurScreen;
//# sourceMappingURL=BlurScreen.js.map

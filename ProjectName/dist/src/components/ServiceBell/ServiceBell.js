'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {enumerable: true, value: v});
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importStar(require('react'));
const react_native_1 = require('react-native');
const icons_1 = require('../../assets/icons');
const modalToggleSlice_1 = require('../../store/modalToggleSlice/modalToggleSlice');
const hooks_1 = require('../../store/hooks');
const index_1 = require('../../store/modalToggleSlice/index');
const messagesSlice_1 = require('../../store/messagesSlice');
const ServiceBell = () => {
  console.log((0, index_1.useModalToggle)().toggleActiveAction);
  const messages = (0, messagesSlice_1.useMessages)().MessagesState;
  const dispatch = (0, hooks_1.useAppDispatch)();
  const spinValue = (0, react_1.useState)(
    new react_native_1.Animated.Value(0),
  )[0];
  const spinBell = () => {
    react_native_1.Animated.sequence([
      react_native_1.Animated.timing(spinValue, {
        toValue: 1,
        duration: 70,
        useNativeDriver: true,
      }),
      react_native_1.Animated.timing(spinValue, {
        toValue: -1,
        duration: 70,
        useNativeDriver: true,
      }),
      react_native_1.Animated.timing(spinValue, {
        toValue: 1,
        duration: 70,
        useNativeDriver: true,
      }),
      react_native_1.Animated.timing(spinValue, {
        toValue: 0,
        duration: 70,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const spin = spinValue.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-10deg', '10deg'],
  });
  return react_1.default.createElement(
    react_native_1.View,
    null,
    react_1.default.createElement(
      react_native_1.Pressable,
      {
        onPressIn: spinBell,
        onPress: () => {
          dispatch((0, modalToggleSlice_1.toggleActive)());
        },
      },
      messages.length != 0 &&
        react_1.default.createElement(
          react_native_1.View,
          {style: styles.alertNum},
          react_1.default.createElement(
            react_native_1.Text,
            {style: [styles.messagesNum]},
            messages.length,
          ),
        ),
      react_1.default.createElement(
        react_native_1.Animated.View,
        {style: {transform: [{rotate: spin}]}},
        react_1.default.createElement(icons_1.IconAlert, {
          width: 22,
          height: 22,
          color: 'purple',
        }),
      ),
    ),
  );
};
const styles = react_native_1.StyleSheet.create({
  alertNum: {
    position: 'absolute',
    alignItems: 'center',
    left: -13,
    top: 5,
    width: 21,
    backgroundColor: '#E00885',
    zIndex: 13,
    borderRadius: 12,
    borderColor: '#efefef',
    borderWidth: 2,
  },
  messagesNum: {
    color: 'white',
    fontSize: 11,
    fontFamily: 'Aspira-Regular',
  },
});
exports.default = ServiceBell;
//# sourceMappingURL=ServiceBell.js.map

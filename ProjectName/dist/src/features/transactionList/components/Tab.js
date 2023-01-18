'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_native_1 = require('react-native');
const react_1 = __importDefault(require('react'));
const monthTabSlice_1 = require('../../../store/monthTabSlice/monthTabSlice');
const react_native_2 = require('react-native');
const hooks_1 = require('../../../store/hooks');
const monthTabSlice_2 = require('../../../store/monthTabSlice');
const themeToggleSlice_1 = require('../../../store/themeToggleSlice');
const Tab = ({monthData, Ref, DATA, scrollA}) => {
  const dispatch = (0, hooks_1.useAppDispatch)();
  const monthTab = (0, monthTabSlice_2.useMonthTab)().monthState;
  const scrollValue = scrollA.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 1],
  });
  const darkMode = (0, themeToggleSlice_1.useThemeToggle)().isDarkModeState;
  return react_1.default.createElement(
    react_native_1.Animated.View,
    {
      style: {
        opacity: scrollValue,
        position: 'absolute',
        top: 24,
        zIndex: 15,
        backgroundColor: darkMode == 'dark' ? '#212529' : '#efefef',
        width: '100%',
      },
    },
    react_1.default.createElement(react_native_1.Animated.FlatList, {
      data: monthData,
      horizontal: true,
      renderItem: ({item}) => {
        return react_1.default.createElement(
          react_native_1.Pressable,
          {
            onPress: () => {
              dispatch((0, monthTabSlice_1.changeMonth)({item: item.month}));
              Ref.current.scrollToLocation({
                sectionIndex: DATA.findIndex(object => {
                  return object.month == item.month;
                }),
                itemIndex: 0,
              });
            },
          },
          react_1.default.createElement(
            react_native_1.Text,
            {
              style:
                (item === null || item === void 0 ? void 0 : item.month) ==
                monthTab
                  ? styles.selectedTabText
                  : [
                      styles.tabText,
                      {
                        color: darkMode == 'dark' ? '#efefef' : 'black',
                      },
                    ],
            },
            item.monthName,
          ),
        );
      },
    }),
  );
};
const styles = react_native_2.StyleSheet.create({
  tabText: {
    marginHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Aspira',
    fontWeight: '500',
    color: 'black',
  },
  selectedTabText: {
    marginHorizontal: 12,
    paddingVertical: 10,
    fontFamily: 'Aspira',
    fontWeight: '500',
    color: 'purple',
  },
});
exports.default = Tab;
//# sourceMappingURL=Tab.js.map

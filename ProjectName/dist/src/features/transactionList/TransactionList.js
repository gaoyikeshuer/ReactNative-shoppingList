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
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const react_1 = __importStar(require('react'));
const react_native_1 = require('react-native');
const firebase_1 = require('../../../firebase');
const firestore_1 = require('firebase/firestore');
const Tab_1 = __importDefault(require('./components/Tab'));
const TransactionListStyle_1 = __importDefault(
  require('./TransactionListStyle'),
);
const monthTabSlice_1 = require('../../store/monthTabSlice/monthTabSlice');
const hooks_1 = require('../../store/hooks');
const themeToggleSlice_1 = require('../../store/themeToggleSlice');
const TransactionList = () => {
  const darkMode = (0, themeToggleSlice_1.useThemeToggle)().isDarkModeState;
  const [listData, setListData] = (0, react_1.useState)([]);
  const dispatch = (0, hooks_1.useAppDispatch)();
  (0, react_1.useEffect)(() => {
    function getData() {
      return __awaiter(this, void 0, void 0, function* () {
        const listRef = (0, firestore_1.collection)(
          firebase_1.db,
          'TransactionList',
        );
        const q = (0, firestore_1.query)(
          listRef,
          (0, firestore_1.orderBy)('date', 'desc'),
        );
        const querySnapshot = yield (0, firestore_1.getDocs)(q);
        const data = [];
        const dateFormat = new Intl.DateTimeFormat('en-US');
        querySnapshot.forEach(doc => {
          const {currency, name, number, type} = doc.data();
          const dateObj = new Date(doc.data().date.seconds * 1000);
          data.push({
            key: doc.id,
            date: dateFormat.format(dateObj),
            currency,
            name,
            number,
            type,
            month: dateObj.getMonth() + 1,
          });
        });
        setListData(data);
      });
    }
    getData();
  }, []);
  const DATA = Object.values(
    listData.reduce((acc, currentVal) => {
      if (!acc[currentVal.date]) {
        acc[currentVal.date] = {
          title: currentVal.date,
          data: [],
          month: currentVal.month,
        };
      }
      acc[currentVal.date].data.push(currentVal);
      return acc;
    }, {}),
  );
  const monthData = Object.values(
    listData.reduce((acc, currentVal) => {
      if (!acc[currentVal.month]) {
        acc[currentVal.month] = {
          month: currentVal.month,
          data: [],
          monthName: toMonthName(currentVal.month),
        };
      }
      acc[currentVal.month].data.push(currentVal);
      return acc;
    }, {}),
  );
  const Ref = (0, react_1.useRef)(null);
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }
  const scrollA = (0, react_1.useRef)(
    new react_native_1.Animated.Value(0),
  ).current;
  const _onViewableItemsChanged = react_1.default.useCallback(
    ({viewableItems, changed}) => {
      var _a;
      dispatch(
        (0, monthTabSlice_1.changeMonth)({
          item:
            (_a = viewableItems[1]) === null || _a === void 0
              ? void 0
              : _a.item,
        }),
      );
    },
    [],
  );
  const _viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };
  return react_1.default.createElement(
    react_native_1.SafeAreaView,
    null,
    react_1.default.createElement(
      react_native_1.View,
      {
        style: {
          flexDirection: 'row',
          marginHorizontal: 12,
          justifyContent: 'space-between',
          marginBottom: 10,
        },
      },
      react_1.default.createElement(
        react_native_1.Text,
        {
          style: {
            color: '#6E6E6E',
            fontFamily: 'Aspira',
            fontWeight: '500',
            letterSpacing: 1.5,
            fontSize: 12,
          },
        },
        'RECENT INCOMING TRANSACTIONS',
      ),
      react_1.default.createElement(
        react_native_1.Text,
        {style: {color: '#7F2B7B', fontFamily: 'Aspira', fontWeight: '500'}},
        'Show all ',
        '>',
      ),
    ),
    react_1.default.createElement(Tab_1.default, {
      monthData: monthData,
      Ref: Ref,
      DATA: DATA,
      scrollA: scrollA,
    }),
    react_1.default.createElement(react_native_1.SectionList, {
      onViewableItemsChanged: _onViewableItemsChanged,
      viewabilityConfig: _viewabilityConfig,
      onScroll: react_native_1.Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollA}}}],
        {useNativeDriver: false},
      ),
      ref: Ref,
      sections: DATA,
      scrollEnabled: true,
      stickySectionHeadersEnabled: false,
      keyExtractor: (item, index) => item.key + index,
      renderItem: ({item}) => {
        return react_1.default.createElement(
          react_native_1.View,
          {
            style: [
              TransactionListStyle_1.default.listContainer,
              {
                backgroundColor: darkMode == 'dark' ? '#5A6168' : 'white',
              },
            ],
          },
          react_1.default.createElement(
            react_native_1.View,
            {style: TransactionListStyle_1.default.textContainer},
            react_1.default.createElement(
              react_native_1.View,
              {style: TransactionListStyle_1.default.nameContainer},
              react_1.default.createElement(
                react_native_1.Text,
                {style: TransactionListStyle_1.default.textName},
                item.name,
              ),
              react_1.default.createElement(
                react_native_1.Text,
                {
                  style: {
                    color: darkMode == 'dark' ? 'black' : '#6E6E6E',
                    fontFamily: 'Aspira',
                  },
                },
                item.type,
              ),
            ),
            react_1.default.createElement(
              react_native_1.View,
              {style: {alignItems: 'flex-end'}},
              react_1.default.createElement(
                react_native_1.Text,
                {
                  style: [
                    TransactionListStyle_1.default.textCurrency,
                    {color: darkMode == 'dark' ? 'black' : '#6E6E6E'},
                  ],
                },
                item.currency,
              ),
              react_1.default.createElement(
                react_native_1.Text,
                {style: TransactionListStyle_1.default.textNumber},
                item.number > 0
                  ? '+' + item.number.toFixed(2).toLocaleString()
                  : item.number.toFixed(2).toLocaleString(),
              ),
            ),
          ),
        );
      },
      ItemSeparatorComponent: () => {
        return react_1.default.createElement(react_native_1.View, {
          style: {
            borderBottomWidth: 1,
            marginHorizontal: 12,
            borderColor: '#C3C3C3',
          },
        });
      },
      renderSectionHeader: ({section}) => {
        return react_1.default.createElement(
          react_native_1.View,
          {style: TransactionListStyle_1.default.transactionTitle},
          react_1.default.createElement(
            react_native_1.Text,
            {style: TransactionListStyle_1.default.titleDate},
            section.title,
          ),
        );
      },
    }),
  );
};
exports.default = TransactionList;
//# sourceMappingURL=TransactionList.js.map

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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod};
  };
Object.defineProperty(exports, '__esModule', {value: true});
const React = __importStar(require('react'));
const react_native_1 = require('react-native');
const icons_1 = require('../assets/icons');
const screens_1 = require('../screens');
const bottom_tabs_1 = require('@react-navigation/bottom-tabs');
const DimBackground_1 = __importDefault(
  require('../components/dimBackground/DimBackground'),
);
const themeToggleSlice_1 = require('../store/themeToggleSlice/themeToggleSlice');
const ServiceBell_1 = __importDefault(
  require('../components/ServiceBell/ServiceBell'),
);
const hooks_1 = require('../store/hooks');
const themeToggleSlice_2 = require('../store/themeToggleSlice');
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
const Tabs = () => {
  const dispatch = (0, hooks_1.useAppDispatch)();
  const darkmode = (0, themeToggleSlice_2.useThemeToggle)().isDarkModeState;
  react_native_1.Appearance.addChangeListener(scheme => {
    dispatch((0, themeToggleSlice_1.isDarkMode)({scheme: scheme.colorScheme}));
  });
  return React.createElement(
    Tab.Navigator,
    {
      screenOptions: {
        tabBarStyle: {
          paddingHorizontal: 0,
          backgroundColor: darkmode == 'dark' ? '#212529' : 'white',
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      },
    },
    React.createElement(Tab.Screen, {
      name: 'Home',
      component: screens_1.Home,
      options: {
        tabBarIcon: ({focused}) =>
          React.createElement(icons_1.IconHome, {
            width: 15,
            height: 15,
            color: focused ? 'purple' : 'gray',
          }),
        headerTitle: () =>
          React.createElement(
            react_native_1.Text,
            {
              style: {
                fontSize: 18,
                fontFamily: 'Aspira',
                fontWeight: '500',
                color: '#7F2B7B',
              },
            },
            'Home',
          ),
        headerRight: () =>
          React.createElement(
            react_native_1.View,
            {style: {paddingRight: 12}},
            React.createElement(ServiceBell_1.default, null),
          ),
        headerStyle: {
          backgroundColor: darkmode == 'dark' ? '#212529' : 'transparent',
        },
        headerLeft: () => React.createElement(DimBackground_1.default, null),
        headerLeftContainerStyle: {
          zIndex: 1000,
        },
        headerTitleContainerStyle: {
          position: 'relative',
          flex: 1,
          alignItems: 'center',
        },
        headerTitleAlign: 'center',
      },
    }),
    React.createElement(Tab.Screen, {
      name: 'Accounts',
      component: screens_1.Home,
      options: {
        tabBarIcon: ({focused}) =>
          React.createElement(icons_1.IconList, {
            width: 18,
            height: 18,
            color: focused ? 'purple' : 'gray',
          }),
      },
    }),
    React.createElement(Tab.Screen, {
      name: 'Payments',
      component: screens_1.Home,
      options: {
        tabBarIcon: ({focused}) =>
          React.createElement(icons_1.IconArrowRight, {
            width: 18,
            height: 18,
            color: focused ? 'purple' : 'gray',
          }),
      },
    }),
    React.createElement(Tab.Screen, {
      name: 'Settings',
      component: screens_1.Home,
      options: {
        tabBarIcon: ({focused}) =>
          React.createElement(icons_1.IconSettings, {
            width: 18,
            height: 18,
            color: focused ? 'purple' : 'gray',
          }),
      },
    }),
  );
};
exports.default = Tabs;
//# sourceMappingURL=tabs.js.map

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View, Text, Appearance} from 'react-native';

import navTabsStyle from './navtabs.styles';
import {
  IconHome,
  IconArrowRight,
  IconList,
  IconSettings,
} from '../assets/icons';
import DimBackground from '../components/dimBackground/DimBackground';
import ServiceBell from '../components/ServiceBell/ServiceBell';
import {Home, PaymentDetailsScreen} from '../screens/index';
import {useAppDispatch} from '../store/hooks';
import {useThemeToggle} from '../store/themeToggleSlice';
import {isDarkMode} from '../store/themeToggleSlice/themetoggle.slice';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const dispatch = useAppDispatch();
  const {isDarkModeState: darkmode} = useThemeToggle();
  Appearance.addChangeListener(scheme => {
    dispatch(isDarkMode({scheme: scheme.colorScheme}));
  });

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingHorizontal: 0,
          backgroundColor: darkmode == 'dark' ? '#212529' : 'white',
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconHome
              width={15}
              height={15}
              color={focused ? 'purple' : 'gray'}
            />
          ),
          headerTitle: () => <Text style={navTabsStyle.HomeStyle}>Home</Text>,
          headerRight: () => (
            <View style={navTabsStyle.BellContainer}>
              <ServiceBell />
            </View>
          ),
          headerStyle: {
            backgroundColor: darkmode == 'dark' ? '#212529' : 'transparent',
          },

          headerLeft: () => <DimBackground />,
          headerLeftContainerStyle: {
            zIndex: 1000,
          },
          headerTitleContainerStyle: {
            position: 'relative',
            flex: 1,
            alignItems: 'center',
          },
          headerTitleAlign: 'center', // ios defalt center but android deflaut left
        }}
      />

      <Tab.Screen
        name="Accounts"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconList
              width={18}
              height={18}
              color={focused ? 'purple' : 'gray'}
            />
          ),
     
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentDetailsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <IconArrowRight
              width={18}
              height={18}
              color={focused ? 'purple' : 'gray'}
            />
          ),
          headerLeft:()=>(
            <View style={{backgroundColor:'purple', width:12, height:12, padding:4}}>
             <Text> Return</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconSettings
              width={18}
              height={18}
              color={focused ? 'purple' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

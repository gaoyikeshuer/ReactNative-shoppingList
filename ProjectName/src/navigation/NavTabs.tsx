import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View, Text} from 'react-native';

import navTabsStyle from './navtabs.styles';
import {
  IconHome,
  IconArrowRight,
  IconList,
  IconSettings,
} from '../assets/icons';
import DimBackground from '../components/dimBackground/DimBackground';
import ServiceBell from '../components/ServiceBell/ServiceBell';
import {Home, PaymentDetails} from '../screens/index';
import { StackParamList } from './navigation.types';
import { useTheme } from '../components/theming';



const Tab = createBottomTabNavigator<StackParamList>();

const Tabs = () => {

  const {colors} = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingHorizontal: 0,
          backgroundColor: colors.background,
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconHome
              width={15}
              height={15}
              color={color}
            />
          ),
          headerTitle: () => <Text style={navTabsStyle.homeBlock}>Home</Text>,
          headerRight: () => (
            <View style={navTabsStyle.bellContainer}>
              <ServiceBell />
            </View>
          ),
          headerStyle: {
            backgroundColor: colors.backgroundSecondary,
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
          headerTitleAlign: 'center', // ios defalt center but android default left
        }}
      />

      <Tab.Screen
        name="Accounts"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconList
              width={18}
              height={18}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentDetails}
        options={{
          tabBarIcon: ({color}) => (
            <IconArrowRight
              width={18}
              height={18}
              color={color}
            />
          ),
          headerStyle: {
            backgroundColor: colors.backgroundSecondary,
          },
          headerTitle: () => (
            <Text style={navTabsStyle.paymentBlock}>Payment details</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconSettings
              width={18}
              height={18}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

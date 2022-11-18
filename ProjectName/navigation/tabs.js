import * as React from 'react';
import {Modal, Pressable, View, Text} from 'react-native';
import {IconHome, IconArrowRight, IconList, IconSettings} from '../assets/icons';
import {Home} from '../screens';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import HomeHeaderTitle from '../components/HomeHeaderTitle';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: { paddingLeft : 20, paddingRight :20},
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          
          tabBarIcon: ({focused}) => <IconHome width={18} height={18} color={focused? 'purple' :'gray'} />,
          headerTitle: () => (<Text>Home</Text>),
          headerRight: () => <HomeHeaderTitle />,
          headerStyle:{
            backgroundColor:'transparent'
          }
          

        }}
      />

        <Tab.Screen
        name="Accounts"
        component={Home}
        options={{
        
          tabBarIcon: ({focused}) => <IconList width={18} height={18} color={focused? 'purple' :'gray'} />
        }}
      />
        <Tab.Screen
        name="Payments"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <IconArrowRight width={18} height={18} color={focused? 'purple' :'gray'} />
        }}
      />
        <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <IconSettings width={18} height={18} color={focused? 'purple' :'gray'}/>
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

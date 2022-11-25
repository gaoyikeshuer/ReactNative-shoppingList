import * as React from 'react';
import {View, Text, AppRegistry, Appearance} from 'react-native';
import {
  IconHome,
  IconArrowRight,
  IconList,
  IconSettings,
} from '../assets/icons';
import {Home} from '../screens';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import HomeHeaderTitle from '../components/ServiceBell/HomeHeaderTitle';
import DimBackground from '../components/dimBackground/DimBackground';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkMode } from '../store/themeToggleSlice';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const dispatch = useDispatch()
  const darkmode= useSelector(state => state.themeToggle)
  Appearance.addChangeListener((scheme) =>{
    dispatch(isDarkMode({scheme : scheme.colorScheme}))

  })

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingHorizontal:0, height:70, 
        
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
        headerMode: 'screen',
      
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
          headerTitle: () => <Text style={{fontSize:18, fontFamily:'Aspira', fontWeight:'500', color:'#7F2B7B'}}>Home</Text>,
          headerRight: () => <HomeHeaderTitle />,
          headerStyle: {
            backgroundColor: darkmode.scheme=='dark'?'#212529':'transparent',
          },

          headerRightContainerStyle: {
            paddingRight: 12,
          },
          headerLeft: () => <DimBackground />,
          headerLeftContainerStyle: {
            zIndex: 1000,
          },
          headerTitleContainerStyle: {
            position: 'relative',
            flex: 1,
            alignItems: 'center',
          }
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
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <IconArrowRight
              width={18}
              height={18}
              color={focused ? 'purple' : 'gray'}
            />
          ),
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

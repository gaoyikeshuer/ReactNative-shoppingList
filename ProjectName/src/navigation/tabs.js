import * as React from 'react';
import {View, Text, AppRegistry, Appearance, Platform} from 'react-native';
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
import DimBackground from '../components/dimBackground/DimBackground';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkMode } from '../store/themeToggleSlice';
import { useEffect } from 'react';
import ServiceBell from '../components/ServiceBell/ServiceBell';
import { useNavigation } from '@react-navigation/native';


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
        tabBarStyle: {paddingHorizontal:0, 
          backgroundColor:darkmode.scheme == 'dark'?'#212529':'white'
        
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
          headerTitle: () => <Text style={{fontSize:18, fontFamily:'Aspira', fontWeight:'500', color:'#7F2B7B',}}>Home</Text>,
          headerRight: () => <View style={{paddingRight:12}}><ServiceBell /></View>,
          headerStyle: {
            backgroundColor: darkmode.scheme=='dark'?'#212529':'transparent',
          },

       
          headerLeft: () => <DimBackground/>,
          headerLeftContainerStyle: {
            zIndex: 1000,
          
   
          },
          headerTitleContainerStyle: {
            position: 'relative',
            flex: 1,
            alignItems: 'center',
    
          },
        headerTitleAlign:'center' // ios defalt center but android deflaut left
         
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

import * as React from 'react';
import {View, Text, AppRegistry} from 'react-native';
import {IconHome, IconArrowRight, IconList, IconSettings} from '../assets/icons';
import {Home} from '../screens';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import HomeHeaderTitle from '../components/HomeHeaderTitle';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();



const Tabs = () => {
 
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: { paddingLeft : 20, paddingRight :20},
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
         headerShown:true,
         headerMode:'screen'
    }}>
  
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <IconHome width={18} height={18} color={focused? 'purple' :'gray'} />,
          headerTitle: () => (<Text>Home</Text>),
          headerRight: () => (<HomeHeaderTitle /> ),
          headerStyle:{
            backgroundColor:'transparent',
          
          },
        
  
          
          headerRightContainerStyle:{
      
           paddingRight:12,

          },
      headerLeft:()=><Header/>,
      headerLeftContainerStyle:{
        
        zIndex:1000,
       
      },
 headerTitleContainerStyle:{
 
  position:'relative',
  flex:1,
  alignItems:'center',




  
 },
 headerTitleStyle:{
 
 
 }
 
        
          
          
        }}
      />
      
        <Tab.Screen
        name="Accounts"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <IconList width={18} height={18} color={focused? 'purple' :'gray'} />,
        
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

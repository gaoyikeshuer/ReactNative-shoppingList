// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs'


import { LogBox } from 'react-native';
import { useEffect } from 'react';
import { store } from './store/store';
import { Provider } from 'react-redux';
import ServiceMessage from './components/ServiceMessage';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(()=>{
  LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  },[])
  return (

   <NavigationContainer>
        <Provider store = {store}>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={"Home"}
 >
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Group screenOptions={{presentation:'modal'}}>
          <Stack.Screen name='ServiceMessage' component={ServiceMessage}/>
        </Stack.Group>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
   
 
  );
}

export default App;
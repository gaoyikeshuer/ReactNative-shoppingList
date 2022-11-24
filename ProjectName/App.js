// In App.js in a new project

import * as React from 'react';
import { View, Text, Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigation/tabs';

import { LogBox } from 'react-native';
import { useEffect } from 'react';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Header from './src/components/Header';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Stack = createNativeStackNavigator();


function App() {
  const[theme, setTheme]  = useState( Appearance.getColorScheme())
  Appearance.addChangeListener((scheme) =>{
    console.log(scheme.colorScheme);
  })


  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Tabs}/>
      </Stack.Navigator>
   
      </Provider>
 
    </NavigationContainer>
  );
}

export default App;
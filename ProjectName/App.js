// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens'
import Tabs from './navigation/Tabs'



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';

import Tabs from './src/navigation/NavTabs';
import {store} from './src/store/store';

import 'intl';
import 'intl/locale-data/jsonp/en';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <Stack.Group>
            <Stack.Screen name="Home" component={Tabs} />
          </Stack.Group>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;

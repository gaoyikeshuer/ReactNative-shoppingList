import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useEffect} from 'react';
import {LogBox, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';

import {DarkTheme, DefaultTheme, ThemeProvider} from './src/components/theming';
import Tabs from './src/navigation/NavTabs';
import {store} from './src/store/store';

import 'intl';
import 'intl/locale-data/jsonp/en';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
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
    </ThemeProvider>
  );
}

export default App;

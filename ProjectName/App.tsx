// In App.js in a new project

import * as React from "react"

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Tabs from "./src/navigation/tabs"

import {LogBox} from "react-native"
import {useEffect} from "react"

import {Provider} from "react-redux"
import {store} from "./src/store/store"

import "intl"
import "intl/locale-data/jsonp/en"

const Stack = createNativeStackNavigator()

function App() {
    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])

    return (
        <NavigationContainer>
            <Provider store={store}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={"Home"}>
                    <Stack.Group>
                        <Stack.Screen name="Home" component={Tabs} />
                    </Stack.Group>
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    )
}

export default App

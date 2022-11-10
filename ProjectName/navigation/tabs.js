import React from "react";
import{
    View
} from 'react-native';
import { Home } from "../screens";
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={
                {
                   
                }
            } />
        </Tab.Navigator>
    )
}

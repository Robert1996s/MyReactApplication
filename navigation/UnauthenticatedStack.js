import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn'

//User NOT logged in

const Stack = createStackNavigator();

export default function UnauthenticatedStack () {
    return(
        <Stack.Navigator initialRuoteName="LogIn">
            <Stack.Screen name = "LogIn" component={LogIn} />
        </Stack.Navigator>
    );
}
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'
import Categories from '../screens/Categories';
import Game from '../screens/Game';

//User already logged in

const Stack = createStackNavigator();

export default function AuthenticatedStack () {
    return(
        <Stack.Navigator initialRuoteName="Home">
            <Stack.Screen name = "Home" component={Home} options={{title: 'Welcome'}}/>
            <Stack.Screen name = "Categories" component={Categories} />
            <Stack.Screen name = "Game" component={Game} />
        </Stack.Navigator>
    );
}
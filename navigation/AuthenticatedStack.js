import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Game from '../screens/Game';
import Score from '../screens/Score';

//User already logged in

const Stack = createStackNavigator();

export default function AuthenticatedStack() {
  return (
    <Stack.Navigator initialRuoteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome', headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Score"
        component={Score}
        options={{ headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}

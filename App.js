import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <ScreenNavigator />
  );
}

const ScreenNavigator = () => {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <ScreenNavigator>
        <Stack.Screen name= "HomeScreen" component={HomeScreen}/>
        <Stack.Screen name= "CategoryScreen" component={CategoryScreen}/>
      </ScreenNavigator>
    </NavigationContainer>
  )
}

const CategoryScreen = () => {
  const route = useRoute()
  return(
    <View style={styles.header}>
      <Text style={styles.header}>Choose Category</Text>
      <Button title="Sport" 
      onPress={() => console.log('Play pressed')}/>
      <Button title="Movies" 
      onPress={() => console.log('Play pressed')}/>
    </View>
  )
}

const HomeScreen = () => {
  const route = useRoute()
  const navigation = useNavigation();
  return(
    <View style={styles.header}>
      <Text style={styles.header}>50/50 Game</Text>
      <Button title="Play" 
      onPress={() => navigation.navigate("CategoryScreen")}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    color: 'green'
  },
});

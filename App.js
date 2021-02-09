import React from 'react';
import AuthContextProvider from './context/AuthContext';
import AuthNavigation from './navigation/AuthNavigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './screens/Home';
import LogIn from './screens/LogIn';

export default function App() {
  return (
    <AuthContextProvider>
    <AuthNavigation />
    </AuthContextProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

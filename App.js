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

/*const ScreenNavigator = () => {
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
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

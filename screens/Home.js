import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { setIsLoggedIn, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  const submit = () => {
    signOut();
  };


  return (

      <View style={styles.container}>
      <Text style={styles.header}>50/50 Game</Text>
      <TouchableOpacity style={styles.playButton}>
        <Text style={{color: 'white', fontWeight: 'bold'}} onPress={() => navigation.navigate('Categories')}>Play</Text>
      </TouchableOpacity>

      <Button style={styles.signOutButton} title="Sign Out" onPress={submit} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    color: 'green',
    textAlign: 'center',
  },
  playButton: {
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  signOutButton: {
    marginBottom: 10,
  }
});
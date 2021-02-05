import React from 'react';
import { useState, useContext } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [logIn] = useContext(AuthContext);

  const submit = () => {
    console.log('log in submit');
    gg;
    logIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 10 }}>
        Log In
      </Text>
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Email:</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter email"
          onChangeText={setEmail}
        />

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Password:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          onChangeText={setPassword}
        />

        <Button title="Submit" onPress={submit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
});

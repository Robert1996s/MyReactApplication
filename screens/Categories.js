import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getCategories } from '../screens/firebaseData';

export default function Categories({ navigation, route }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
    getCategories()
      .then((categoryList) => {
        setCategories(categoryList);
        console.log('List Success');
      })
      .catch((e) => console.log(e));
  }, []);

  //console.log(categories[0].categoryName); Works sometimes...

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Category:</Text>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Game', { cat: 'History' })}
        >
          History
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Game', { cat: 'Sport' })}
        >
          Sport
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Game', { cat: 'Music' })}
        >
          Music
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    borderRadius: 8,
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    padding: 10,
    color: 'green',
  },
});

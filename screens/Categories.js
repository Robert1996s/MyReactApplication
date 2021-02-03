import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { firebaseDB } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function Categories() {
  const { category, setCategory } = useState();
  const navigation = useNavigation();


  //return firebaseDB.ref('/Categories/').once('value').then(())


    const categories= [
      {id: 1, text: 'Sport'},
      {id: 2, text: 'Music'},
      {id: 3, text: 'History'}];
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Category:</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Game')} >Sport</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Game')} >Music</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Game')} >History</Text>
      </TouchableOpacity>
    </View>
  );
}


const categoryList = () => {
  const [cat, setCat] = useState([
    {id: 1, text: 'Sport'},
    {id: 2, text: 'Music'},
    {id: 3, text: 'History'},
  ])
}

//make answer 0 or 1 for true/false
const questionListArray = () => {
  const questionList = [
    {id: 1, text: 'Sport', answer: 0},
    {id: 2, text: 'Music', answer: 1},
    {id: 3, text: 'History', answer: 0}]
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
    color: 'green'
  },
});
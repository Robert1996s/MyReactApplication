import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { firebaseDB } from '../firebase';

export default function Game() {
  //const { category, setCategory } = useState();



  //TODO text display an array, from firebase? buttons always display true or false

  let category = 'Sport'

  let questions = []
  

  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>Chosen Category: </Text>
      <Text style={styles.categoryText}>{category}</Text>
      <Text style={styles.questionText}>Display question text {category}</Text>
     
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.buttonTrue}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>True</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonFalse}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const questionListArray = () => {
  const questionList = [
    {id: 1, text: 'Sport'},
    {id: 2, text: 'Music'},
    {id: 3, text: 'History'}]
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTrue: {
    padding: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'green',
    width: 70,
    textAlign: 'center',
    margin: 10,
  },
  buttonFalse: {
    padding: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'red',
    width: 70,
    textAlign: 'center',
    margin: 10,
  },
  questionText: {
    fontSize: 16,
    padding: 10,
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  }
});
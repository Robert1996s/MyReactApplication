import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Game({ route, navigation }) {
  //const route = useRoute();
  //const navigation = useNavigation();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState(0);
  const totalQuestions = 7;

  const [whichList, setWhichList] = useState([]);

  const onPress = () => setQuestionIndex((prevCount) => prevCount + 1);
  const increaseScore = () => setScore((prev) => prev + 1);
  //const setGame = () => setGameOver(prev => !prev)

  /*useEffect(() => { historyQuestions()
    historyQuestions().then(console.log(questionsHistory)).catch(e => console.log(e))
  }, []) */

  useEffect(() => {
    //TODO Get firebase data, set one of the lists to current
    if (route.params.cat == 'History') {
      console.log('HISTORY');
    } else if (route.params.cat == 'Sport') {
      console.log('SPORT');
    } else {
      console.log('MUSIC');
    }
  }, []);

  const historyQuestions = [
    { text: 'Second world war started 1937', correctAnswer: 1 },
    { text: 'Second world war ended 1945', correctAnswer: 0 },
    { text: 'First world war started 1914', correctAnswer: 0 },
    { text: 'First world war ended 1918', correctAnswer: 0 },
    { text: 'Tesla war created 2003', correctAnswer: 0 },
    { text: 'Apple was founded 1986', correctAnswer: 1 },
    { text: 'Zlatan is born 1980', correctAnswer: 1 },
    { text: 'Game Finished', correctAnswer: 1 },
  ];

  const questionList = [
    { text: 'Zlatan Shirt number is 11', correctAnswer: 0 },
    { text: 'Really True?', correctAnswer: 1 },
    { text: 'Really False?', correctAnswer: 1 },
    { text: 'Question 4', correctAnswer: 1 },
    { text: 'Question 5', correctAnswer: 1 },
    { text: 'Question 6', correctAnswer: 1 },
    { text: 'Question 7', correctAnswer: 1 },
    { text: 'Game Finished' },
  ];

  return (
    <View style={styles.container}>
      <Text>
        Score: {score}/{totalQuestions}
      </Text>
      <Text style={styles.categoryText}>Chosen Category: </Text>
      <Text style={styles.categoryText}>{route.params.cat}</Text>
      <Text style={styles.questionText}>
        {historyQuestions[questionIndex].text}
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.buttonTrue}
          onPress={() => {
            if (questionIndex > 5) {
              navigation.navigate('Score', { points: score });
            }
            onPress(),
              checkAnswer(
                0,
                historyQuestions[questionIndex].correctAnswer,
                increaseScore
              );
          }}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>True</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonFalse}
          onPress={() => {
            if (questionIndex > 5) {
              navigation.navigate('Score', { points: score });
            }
            onPress(),
              checkAnswer(
                1,
                historyQuestions[questionIndex].correctAnswer,
                increaseScore
              );
          }}
        >
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const checkAnswer = (answer, correctAnswer, increaseScore) => {
  if (answer == correctAnswer) {
    increaseScore();
  }
};

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
  },
});

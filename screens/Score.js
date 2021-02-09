import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Score({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Score: {route.params.points}/7</Text>

      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => navigation.navigate('Home')}
        >
          Continue
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
    width: 200,
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

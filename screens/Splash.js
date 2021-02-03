import React, { useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Splash() {

  return (
    <View style={styles.container}>
        <Text>App</Text>
      <ActivityIndicator animating={true} />
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
});
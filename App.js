import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Happy Accidents!</Text>
      <Text style = {styles.subtitle}>
        fostering genuine, authentic friendships and relationships
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE635', // Light yellow background
    padding: 20,
  },
  welcomeText: {
    fontSize: 24, // Large font size
    fontWeight: 'bold', // Bold text
    color: '#2f4f4f', // Dark Slate Gray color
    textAlight: 'center',
    marginBottom: 10,
  },
  subtitle:
  {
    fontSize: 16,
    fontWeight: 400,
    color: "#696969",
    textAlign: 'center',
  },
});
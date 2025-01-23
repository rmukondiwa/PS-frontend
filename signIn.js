import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    Alert.alert('Sign In', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Accidents!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Hides password input
        placeholderTextColor="#888"
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE635',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 20,
  },
  input: {
    width: "85%",
    paddingVertical: 15, // Larger padding for height
    paddingHorizontal: 20, // Horizontal padding for content inside
    marginVertical: 10, // Spacing between inputs
    borderWidth: 1,
    borderColor: '#ccc', // Light border
    borderRadius: 10, // Rounded edges
    backgroundColor: '#fff', // White background
    fontSize: 16, // Larger font size
  },
});

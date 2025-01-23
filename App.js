import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomePage from './homepage'; // Import homepage.js
import MatchesPage from './matchesPage'; // Import MatchesPage
import PostSignUpScreen from './postSignUp'; // Import PostSignUpScreen
import PostSignUp2Screen from './postSignUp2'; // Import PostSignUp2Screen
import LogInScreen from './signIn'; // Import LogInScreen from the new file
import SignUpScreen from './signUp'; // Import SignUpScreen from the new file

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to ...</Text>
      <Text style={styles.subtitle}>
        fostering genuine, authentic friendships and relationships
      </Text>
      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.logInButton}
        onPress={() => navigation.navigate('LogIn')}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="PostSignUp" component={PostSignUpScreen} />
        <Stack.Screen name="PostSignUp2" component={PostSignUp2Screen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MatchesPage" component={MatchesPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE635',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#2F4F4F",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    fontWeight: "400",
    textAlign: "center",
    color: '#696969', // Dim Gray
  },
  logInButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#2F4F4F',
  },

  signUpButton: {
    backgroundColor: '#fff', // White background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // Rounded edges
    borderWidth: 1, // Light border
    borderColor: '#ccc',
    marginVertical: 10,
  },
  signUpText: {
    fontSize: 18,
    color: '#2F4F4F', // Dark Slate Gray for text
    textAlign: 'center',
  },
});

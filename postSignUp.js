import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PostSignUpScreen = ({ navigation }) => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [intent, setIntent] = useState('');

  const handleNext = () => {
    if (!gender || !age || !intent) {
      Alert.alert('Error', 'Please fill out all fields before proceeding.');
      return;
    }
    navigation.navigate('PostSignUp2'); // Navigate to PostSignUp2Screen
    // Navigate to the next screen or finalize sign-up flow
    // navigation.navigate('NextScreen'); // Uncomment if another page exists
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Us More About You</Text>

      {/* Gender Input */}
      <TextInput
        style={styles.input}
        placeholder="Gender (e.g., Male, Female, Non-binary)"
        value={gender}
        onChangeText={setGender}
      />

      {/* Age Input */}
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      {/* Intent Selection */}
      <View style={styles.intentContainer}>
        <TouchableOpacity
          style={[styles.intentButton, intent === 'friends' && styles.selectedButton]}
          onPress={() => setIntent('friends')}
        >
          <Text style={styles.intentText}>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.intentButton, intent === 'relationship' && styles.selectedButton]}
          onPress={() => setIntent('relationship')}
        >
          <Text style={styles.intentText}>Relationship</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.intentButton, intent === 'idk yet' && styles.selectedButton]}
          onPress={() => setIntent('idk yet')}
        >
          <Text style={styles.intentText}>IDK Yet</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECE635',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 20,
  },
  input: {
    width: '85%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginVertical: 10,
  },
  intentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginVertical: 20,
  },
  intentButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  intentText: {
    fontSize: 16,
    color: '#2F4F4F',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
});

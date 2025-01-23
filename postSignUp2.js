import { Picker } from '@react-native-picker/picker'; // Import Picker for dropdown
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PostSignUp2Screen = ({ navigation }) => {
  const [places, setPlaces] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [height, setHeight] = useState('');
  const [year, setYear] = useState('');

  const hashtags = [
    'Scuba Diving',
    'Game Development',
    'Traveling',
    'Photography',
    'Fitness',
    'Music',
    'Art',
    'Cooking',
    'Tech Enthusiast',
    'Entrepreneurship',
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag)); // Remove tag
    } else {
      setSelectedTags([...selectedTags, tag]); // Add tag
    }
  };

  const handleNext = () => {
    if (!height || !year || selectedTags.length === 0 || !places) {
      Alert.alert('Error', 'Please fill out all fields before proceeding.');
      return;
    }
    navigation.navigate('HomePage');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Us More About You</Text>
      <Text style={styles.subtitle}>Tap to select your interests:</Text>

      {/* Hashtags */}
      <View style={styles.tagsContainer}>
        {hashtags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[styles.tag, selectedTags.includes(tag) && styles.selectedTag]}
            onPress={() => toggleTag(tag)}
          >
            <Text style={[styles.tagText, selectedTags.includes(tag) && styles.selectedTagText]}>
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Height Input */}
      <TextInput
        style={styles.input}
        placeholder="'Enter your height (e.g., 5\'10')"
        value={height}
        onChangeText={setHeight}
        keyboardType="default"
      />

      {/* Year Picker */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Select your year (if in college):</Text>
        <Picker
          selectedValue={year}
          onValueChange={(itemValue) => setYear(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select your year" value="" />
          <Picker.Item label="Freshman" value="Freshman" />
          <Picker.Item label="Sophomore" value="Sophomore" />
          <Picker.Item label="Junior" value="Junior" />
          <Picker.Item label="Senior" value="Senior" />
          <Picker.Item label="Graduate" value="Graduate" />
          <Picker.Item label="Not in College" value="Not in College" />
        </Picker>
      </View>

      {/* Places Text Box */}
      <TextInput
        style={styles.input}
        placeholder="Places you frequent (e.g., coffee shops, gyms)"
        value={places}
        onChangeText={setPlaces}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostSignUp2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ECE635',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#696969',
    marginBottom: 20,
    textAlign: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedTag: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  tagText: {
    fontSize: 14,
    color: '#2F4F4F',
  },
  selectedTagText: {
    color: '#fff',
  },
  input: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2F4F4F',
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
});

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './BottomNavigation'; // Import the navigation bar

const MatchesPage = () => {
  const matches = [
    {
      name: 'Lucky 1',
      type: 'Friend',
      age: 20,
      height: "5'9''",
      interests: 'Content Creation, Settlers of Catan, going out, lifting, frolicking',
      frequents: 'Wu, LSRC, FFSC',
    },
    {
      name: 'Lucky 100',
      type: 'S/O',
      age: 19,
      height: "4'10''",
      interests: 'Health and Wellness, Wicked, golf, baking, rock climbing',
      frequents: 'Few Quad, FFSC Bathroom, Pitch',
    },
    {
      name: 'Lucky 122',
      type: 'S/O',
      age: 18,
      height: "6'2''",
      interests: 'Entrepreneurship, reading, going on hikes, dancing',
      frequents: 'Bella, BC, Krafthouse',
    },
    {
      name: 'Lucky 1000',
      type: 'Friend',
      age: 20,
      height: "7'0''",
      interests: 'Basketball, NBA 2K, sleeping, crocheting, saving puppies',
      frequents: 'Cameron Indoor, Krafthouse, Heavenly Buffaloes',
    },
    {
      name: 'Lucky 1527',
      type: 'Friend',
      age: 18,
      height: "5'5''",
      interests: 'Swimming, traveling, fitness, going to concerts, drawing, interior design',
      frequents: 'Brodie Gym, Shooters, Duke Gardens',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Matches</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {matches.map((match, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{match.name}</Text>
            <Text style={styles.cardText}>
              <Text style={styles.label}>{match.type}: </Text>
              Age: {match.age} | Height: {match.height}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.label}>Interests: </Text>
              {match.interests}
            </Text>
            <Text style={styles.cardText}>
              <Text style={styles.label}>Frequents: </Text>
              {match.frequents}
            </Text>
          </View>
        ))}
      </ScrollView>
      {/* Add Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

export default MatchesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ab2da', // Light blue-green background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    backgroundColor: '#2C88D9', // Blue header background
    paddingVertical: 10,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Adds shadow for Android
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15789A', // Match the blue theme
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#2F4F4F',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
});

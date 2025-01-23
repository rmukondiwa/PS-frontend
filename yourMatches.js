import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import BottomNavigation from './BottomNavigation'; // Import the persistent navigation bar

// Example clover data
const cloverData = [
  { id: '1', number: 7, status: 'together' },
  { id: '2', number: 2, status: 'together' },
  { id: '3', number: 0, status: 'active' },
  { id: '4', number: 6, status: 'active' },
  { id: '5', number: 12, status: 'active' },
  { id: '6', number: 3, status: 'inactive' },
  { id: '7', number: 5, status: 'inactive' },
  { id: '8', number: '+', status: 'add' },
];

const CloverIcon = ({ color }) => (
  <Svg width="40" height="40" viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.5">
    <Path d="m4.75 2.75c-.50 1.5 1.25 3.25 3.25 5.25 2-2 3.75-3.75 3.25-5.25s-2.5-1-3.25.50c-.75-1.5-2.75-2-3.25-.50zm3.25 5.25c2 2 3.75 3.75 5.25 3.25s1-2.5-.5-3.25c1.5-.75 2-2.75.5-3.25s-3.25 1.25-5.25 3.25zm0 0c-2 2-3.75 3.75-3.25 5.25s2.5 1 3.25-.5c.75 1.5 2.75 2 3.25.5s-1.25-3.25-3.25-5.25zm0 0c-2-2-3.75-3.75-5.25-3.25s-1 2.5.5 3.25c-1.5.75-2 2.75-.5 3.25s3.25-1.25 5.25-3.25z" />
  </Svg>
);

const YourMatches = () => {
  const getColor = (status) => {
    switch (status) {
      case 'active':
        return '#A4D4AE'; // Green
      case 'together':
        return '#FFC857'; // Yellow
      case 'inactive':
        return '#A9A9A9'; // Gray
      case 'add':
        return '#000000'; // Black
      default:
        return '#000000';
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <CloverIcon color={getColor(item.status)} />
      <Text style={styles.cardText}>{item.number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Your Matches</Text>
      <FlatList
        data={cloverData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display in 3 columns
        contentContainerStyle={styles.scrollContainer}
      />
      <View style={styles.legend}>
        <Text style={styles.legendHeader}># of Happy Accidents</Text>
        <View style={styles.legendRow}>
          <Text style={styles.legendText}>
            <CloverIcon color="#A4D4AE" /> Active
          </Text>
          <Text style={styles.legendText}>
            <CloverIcon color="#FFC857" /> Together
          </Text>
          <Text style={styles.legendText}>
            <CloverIcon color="#A9A9A9" /> Inactive
          </Text>
        </View>
      </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

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
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Shadow for Android
  },
  cardText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15789A',
  },
  legend: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#E8E8E8',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  legendHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2F4F4F',
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  legendText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
});

export default YourMatches;

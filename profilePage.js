import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomNavigation from './BottomNavigation'; // Import the persistent navigation bar

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require('./images/johnProf.png')} // Replace with the profile image path
            style={styles.profileImage}
          />
        </View>

        {/* Profile Information */}
        <Text style={styles.profileName}>John Schappert</Text>
        <Text style={styles.profileClass}>Class of ‘26</Text>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Height:</Text> 6'6
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Age:</Text> 21
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Looking for:</Text> Friends
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Interested in:</Text> Game development, scuba diving, entrepreneurship
          </Text>
          <Text style={styles.detailText}>
            <Text style={styles.detailLabel}>Frequents:</Text> Shooters, Club ERA, Wilson 206A
          </Text>
        </View>

        {/* Additional Photo */}
        <Image
          source={require('./images/scubaPic.png')} // Replace with the additional image path
          style={styles.additionalImage}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECE735', // Light yellow background
  },
  scrollContainer: {
    padding: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
  profileClass: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2, // Adds shadow for Android
  },
  detailText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
  additionalImage: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginBottom: 20,
  },
});

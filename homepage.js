import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomePage = () => {
  const navigation = useNavigation(); // Access navigation prop
    
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {/* Greeting Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.greetingText}>Good Evening, John</Text>
        </View>

        {/* Daily Pickup Line Section */}
        <View style={styles.pickupLineSection}>
          <Text style={styles.pickupLineTitle}>Daily Pickup Line:</Text>
          <Text style={styles.pickupLine}>
            Am I three mice? Because your smile is blinding.
          </Text>
        </View>

        {/* Map Section */}
        <View style={styles.mapSection}>
          <Image
            source={require('./images/dukeMap.png')} // Replace with your map image
            style={styles.mapImage}
          />
          <Text style={styles.mapText}>Three of your matches are nearby!</Text>
        </View>

        {/* Nudge Section */}
        <View style={styles.nudgeSection}>
          <Text style={styles.nudgeTitle}>Nudge 😉</Text>
          <Text style={styles.nudgeText}>
            One of your matches is in Ginger and Soy!
          </Text>
        </View>

        {/* Invitation Section */}
        <View style={styles.invitationSection}>
          {/* Envelope Icon */}
          <Image
            source={require('./images/envelope.png')} // Replace with your uploaded image
            style={styles.envelopeIcon}
          />
          <View style={styles.invitationCard}>
            <Text style={styles.invitationText}>
              You’ve been invited to an exclusive event! View with LuckyBucks Membership
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🔗</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MatchesPage')}>
            <Text style={styles.navIcon}>👥</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4D4AE', // Light green background
  },
  scrollView: {
    flex: 1,
    marginBottom: 70, // Space for fixed navigation bar
  },
  content: {
    padding: 20,
  },
  greetingSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  pickupLineSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  pickupLineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 10,
  },
  pickupLine: {
    fontSize: 16,
    color: '#2F4F4F',
    textAlign: 'center',
  },
  mapSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  mapText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2F4F4F',
  },
  nudgeSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  nudgeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700', // Golden yellow
    marginBottom: 10,
  },
  nudgeText: {
    fontSize: 16,
    color: '#2F4F4F',
    textAlign: 'center',
  },
  invitationSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  envelopeIcon: {
    width: 150, // Adjust size as needed
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  invitationCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  invitationText: {
    fontSize: 14,
    color: '#2F4F4F',
    textAlign: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navIcon: {
    fontSize: 24,
  },
});

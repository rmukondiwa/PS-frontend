import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.navIcon}>🔗</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MatchesPage')}>
        <Text style={styles.navIcon}>👥</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
        <Text style={styles.navIcon}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navIcon: {
    fontSize: 24,
    color: '#2F4F4F',
  },
});

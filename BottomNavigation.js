import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import HomeIcon from './HomeIcon'; // Import the SVG component
import LikeIcon from './LikeIcon'; // Import the SVG component
import LinkIcon from './LinkIcon'; // Import the SVG component
import ProfileIcon from './ProfileIcon'; // Import the SVG component

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
        <HomeIcon width={30} height={30} fill="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('YourMatches')}>
        <LikeIcon width={50} height={30} fill="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MatchesPage')}>
        <LinkIcon width={50} height={30} fill="#000" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfilePage')}>
        <ProfileIcon width={50} height={30} fill="#000" />
      </TouchableOpacity>
    </View>
  );
};


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
export default BottomNavigation;


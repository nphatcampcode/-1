import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://i.postimg.cc/KzM6HSrC/OIP-3.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Lionel Messi</Text>
        <Text style={styles.profileUsername}>@johndoe</Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.detailText}>Email: johndoe@example.com</Text>
        <Text style={styles.detailText}>Location: New York, USA</Text>
        {/* Add more profile details as needed */}
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileUsername: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  profileDetails: {
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
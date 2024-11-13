import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '../../context/AuthContext'; // Adjust the path as necessary
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual user image URL
          style={styles.profilePicture}
        />
        <ThemedText style={styles.name}>Username</ThemedText>
      </View>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Current Enrolled Class</ThemedText>
        <ThemedText>Align 1B: Intermediate Ballet</ThemedText>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            borderWidth: 1,
            borderColor: '#fff',
            width: 100,
          }}
          onPress={() => {
            /* Navigate to CheckIn */
          }}
        >
          <ThemedText>CHECK IN</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <View style={{ marginTop: 'auto' }}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#000',
            width: 100,
          }}
          onPress={signOut}
        >
          <ThemedText style={{ color: '#000' }}>SIGN OUT</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  card: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    marginTop: 'auto', // This will ensure the button stays at the bottom
  },
});

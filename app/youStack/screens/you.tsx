import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function YouScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profilePicture}
        />
        <ThemedText style={styles.name}>Jane Doe</ThemedText>
      </View>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Enrolled Class</ThemedText>
        <ThemedText>Align 1B: Intermediate Ballet</ThemedText>
        <ThemedText>Instructor: Sarah Smith</ThemedText>
      </ThemedView>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.cardTitle}>Upcoming Class</ThemedText>
        <ThemedText>Align 2A: Advanced Pointe</ThemedText>
        <ThemedText>Date: June 15, 2023</ThemedText>
        <ThemedText>Time: 2:00 PM - 3:30 PM</ThemedText>
      </ThemedView>
    </View>
  );
}

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
});
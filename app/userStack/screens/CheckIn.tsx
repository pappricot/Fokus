import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check In</Text>
      <Text>Welcome to the Check In screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CheckIn;

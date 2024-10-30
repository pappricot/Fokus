import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';

const categories = [
  'Basics',
  'At the barre and in center',
  'Center',
  'Turns',
  'Allegros',
];

// Define the type for navigation if not already defined
type NavigationParams = {
    DictionaryCategory: { category: string };
};



export default function Dictionary() {
    const navigation: NavigationProp<NavigationParams> = useNavigation();
  return (
    <View style={styles.container}>
    <FlatList
      data={categories}
     
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('DictionaryCategory', { category: item })}
        >
          <ThemedText style={styles.itemText}>{item}</ThemedText>
        </TouchableOpacity>
      )}
      keyExtractor={(item: string) => item}
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

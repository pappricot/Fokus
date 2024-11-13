import React, { useEffect, useState } from 'react';
import { suggestOutfit } from '@/app/util/weather';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActivityIndicator from '@/components/ActivityIndicator';

const OutfitScreen = () => {
  const [loading, setLoading] = useState(true);
  const [outfitItems, setOutfitItems] = useState<string[]>([]);
  console.log('outfitItems', outfitItems);

  useEffect(() => {
    const fetchOutfitItems = async () => {
      if (!outfitItems.length) {
        try {
          const items = await suggestOutfit();
          setOutfitItems(items || []);
        } catch (error) {
          console.error('Error fetching classes:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchOutfitItems();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator loading={loading} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested Outfit</Text>
      <FlatList
        data={outfitItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default OutfitScreen;

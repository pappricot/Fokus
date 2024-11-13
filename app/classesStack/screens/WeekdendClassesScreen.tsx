import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import ActivityIndicator from '@/components/ActivityIndicator';
import { styles as globalStyles } from '../../globalStyle';
import { LOCAL_API_URL } from '@/constants/URLs';

interface ClassItem {
  text: string;
  value: string;
}

const ClassCard = ({ item }: { item: ClassItem }) => {
  console.log('item', item.value);
  return (
    <ThemedView style={styles.card}>
      <ThemedText>{item.value}</ThemedText>
      {/* <ThemedText>Instructor: John Doe</ThemedText>
    <ThemedText>Time: 10:00 AM - 11:30 AM</ThemedText>
    <ThemedText>Date: Monday, Wednesday, Friday</ThemedText> */}
    </ThemedView>
  );
};

export default function WeekdendClassesScreen() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      if (!classes.length) {
        try {
          const response = await axios.get(
            `${LOCAL_API_URL}/api/weekdend-classes`
          );
          setClasses(response.data);
        } catch (error) {
          console.error('Error fetching classes:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchClasses();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator loading={loading} />
      </View>
    );
  }
  return (
    <View
      style={[globalStyles.container, { padding: 20, backgroundColor: '#fff' }]}
    >
      <FlatList
        data={classes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ClassCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  className: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
});

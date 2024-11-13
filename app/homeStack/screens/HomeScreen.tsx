import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styles as globalStyles } from '../../globalStyle';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '@/App';
import { getWeather } from '@/app/util/weather';
import ActivityIndicator from '@/components/ActivityIndicator';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'OutfitScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [temperature, setTemperature] = useState<number | null>(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [loading, setLoading] = useState(true);

  // Function to convert Celsius to Fahrenheit
  const convertToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

  // Toggle function to switch between Celsius and Fahrenheit
  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  // Display the temperature based on the selected unit
  const displayedTemperature = isCelsius
    ? temperature
    : temperature !== null
      ? convertToFahrenheit(temperature)
      : null;

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const result = await getWeather();
      if (result && result.current) {
        setTemperature(result.current.temperature);
      } else {
        console.log('Weather data could not be retrieved.');
      }
      setLoading(false);
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator loading={loading} />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <TouchableOpacity onPress={toggleTemperatureUnit}>
        <Text style={styles.greeting}>
          Good morning, @morphofokus. It's{' '}
          <Text style={{ textDecorationLine: 'underline' }}>
            {displayedTemperature !== null
              ? displayedTemperature.toFixed(1)
              : '...'}
            °{isCelsius ? 'C' : 'F'}
          </Text>
          . Today at a glance and siggested outfit:
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OutfitScreen');
        }}
        style={globalStyles.button}
      >
        <Text style={globalStyles.buttonText}>EXPLORE OUTFITS</Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/images/mockProfile.png')}
          style={styles.profileImage}
          resizeMode="center"
        />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.doContainer}>
          <Text style={styles.listTitle}>Do</Text>
          <Text>Extension</Text>
          <Text>Back scratch</Text>
          <Text>Midnight oil</Text>
        </View>

        <View style={styles.dontContainer}>
          <Text style={styles.listTitle}>Don't</Text>
          <Text>Lukewarm coffee</Text>
          <Text>Clothes on floor</Text>
          <Text>Spreadsheets</Text>
        </View>
      </View>
      <Text style={styles.advice}>
        Flirt to find possibility of connection, not to boost your ego.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  advice: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  doContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dontContainer: {
    flex: 1,
    alignItems: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: 'black',
  },
  profileImage: {
    width: '100%', // Makes the image fill the container
    height: '100%', // Makes the image fill the container
  },
});

export default HomeScreen;

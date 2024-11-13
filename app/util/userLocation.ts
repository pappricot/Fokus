import * as Location from 'expo-location';

export const DEFAULT_LOCATION = { latitude: 34.0522, longitude: -118.2437 }; // fuzzy check for now Los Angeles, will use what user input in zipcode when register

export const getUserLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.log('Permission to access location was denied');
    return null;
  }
  let location = await Location.getCurrentPositionAsync({});
  return location.coords;
};

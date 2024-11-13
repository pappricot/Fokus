import { WEATHERSTACK_API_KEY } from '@env';
import { DEFAULT_LOCATION, getUserLocation } from './userLocation';

export const fetchWeatherData = async (latitude: number, longitude: number) => {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_API_KEY}&query=${latitude},${longitude}`;
  const response = await fetch(url);
  return response.json();
};

export const getWeather = async () => {
  const location = (await getUserLocation()) || DEFAULT_LOCATION;
  if (!location) return null;

  const weatherData = await fetchWeatherData(
    location.latitude,
    location.longitude
  );
  return weatherData;
};

export const classifyWeather = (temperature: number, description: string) => {
  let weatherType;
  if (temperature < 10) weatherType = 'cold';
  else if (temperature >= 10 && temperature < 20) weatherType = 'cool';
  else if (temperature >= 20 && temperature < 30) weatherType = 'warm';
  else weatherType = 'hot';

  if (description.includes('rain') || description.includes('showers')) {
    weatherType += '_rainy';
  } else if (description.includes('snow')) {
    weatherType += '_snowy';
  }

  return weatherType;
};

const outfitSuggestions: { [key: string]: string[] } = {
  cold: ['heavy jacket', 'scarf', 'gloves'],
  cold_rainy: ['raincoat', 'umbrella', 'waterproof boots'],
  cool: ['light jacket', 'sweater', 'jeans'],
  warm: ['t-shirt', 'shorts', 'sunglasses'],
  hot: ['tank top', 'flip flops', 'hat'],
  warm_rainy: ['light rain jacket', 'water-resistant shoes', 'umbrella'],
};

export const suggestOutfit = async () => {
  const weatherData = await getWeather();
  if (!weatherData) {
    console.log("Weather data couldn't be retrieved.");
    return [];
  }

  const weatherType = classifyWeather(
    weatherData.current.temperature,
    weatherData.current.weather_descriptions[0]
  );
  const outfit = outfitSuggestions[weatherType] || ['Comfortable outfit'];
  return outfit;
};

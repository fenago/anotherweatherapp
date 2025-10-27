import axios from 'axios';

const GEOCODING_API = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';

/**
 * Fetch coordinates for a given city name
 */
export const fetchCityCoordinates = async (cityName) => {
  try {
    const response = await axios.get(GEOCODING_API, {
      params: {
        name: cityName,
        count: 1,
        language: 'en',
        format: 'json'
      }
    });

    if (!response.data.results || response.data.results.length === 0) {
      throw new Error('City not found. Please try another search.');
    }

    const result = response.data.results[0];
    return {
      latitude: result.latitude,
      longitude: result.longitude,
      name: result.name,
      country: result.country
    };
  } catch (error) {
    if (error.message === 'City not found. Please try another search.') {
      throw error;
    }
    throw new Error('Failed to fetch city coordinates');
  }
};

/**
 * Fetch weather data from OpenMeteo API
 */
export const fetchWeatherData = async (latitude, longitude) => {
  try {
    const response = await axios.get(WEATHER_API, {
      params: {
        latitude,
        longitude,
        current_weather: true,
        hourly: 'temperature_2m,relativehumidity_2m,precipitation,visibility,surface_pressure',
        daily: 'weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum',
        timezone: 'auto'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

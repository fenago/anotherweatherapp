import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  Cloudy
} from 'lucide-react';

/**
 * Get weather icon based on WMO weather code
 * https://open-meteo.com/en/docs
 */
export const getWeatherIcon = (code) => {
  if (code === 0) return Sun; // Clear sky
  if (code === 1 || code === 2) return Cloudy; // Mainly clear, partly cloudy
  if (code === 3) return Cloud; // Overcast
  if (code >= 45 && code <= 48) return CloudFog; // Fog
  if (code >= 51 && code <= 57) return CloudDrizzle; // Drizzle
  if (code >= 61 && code <= 67) return CloudRain; // Rain
  if (code >= 71 && code <= 77) return CloudSnow; // Snow
  if (code >= 80 && code <= 82) return CloudRain; // Rain showers
  if (code >= 85 && code <= 86) return CloudSnow; // Snow showers
  if (code >= 95 && code <= 99) return CloudLightning; // Thunderstorm
  
  return Cloud; // Default
};

/**
 * Get weather description based on WMO weather code
 */
export const getWeatherDescription = (code) => {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
  };

  return descriptions[code] || 'Unknown';
};

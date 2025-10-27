/**
 * Convert Celsius to Fahrenheit
 */
export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

/**
 * Convert temperature based on unit preference
 */
export const convertTemperature = (celsius, isFahrenheit) => {
  return isFahrenheit ? celsiusToFahrenheit(celsius) : celsius;
};

/**
 * Get temperature unit symbol
 */
export const getTemperatureUnit = (isFahrenheit) => {
  return isFahrenheit ? '°F' : '°C';
};

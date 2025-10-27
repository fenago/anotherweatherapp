import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ForecastCard from './components/ForecastCard';
import { fetchWeatherData, fetchCityCoordinates } from './services/weatherService';
import { Loader2 } from 'lucide-react';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('New York');
  const [isFahrenheit, setIsFahrenheit] = useState(true);

  useEffect(() => {
    loadWeatherData('New York');
  }, []);

  const loadWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      const coords = await fetchCityCoordinates(cityName);
      const data = await fetchWeatherData(coords.latitude, coords.longitude);
      setWeatherData({ ...data, cityName: coords.name });
      setCity(coords.name);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (cityName) => {
    loadWeatherData(cityName);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Weather Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Professional weather insights at your fingertips
          </p>
        </header>

        <div className="mb-8">
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />
          
          {/* Temperature Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsFahrenheit(!isFahrenheit)}
              className="glass-effect card-shadow rounded-xl px-6 py-3 flex items-center gap-2 text-gray-800 font-medium hover:bg-purple-50 transition-colors"
            >
              <span className="text-lg font-semibold">
                {isFahrenheit ? '°F' : '°C'}
              </span>
              <span className="text-sm">Switch to {isFahrenheit ? 'Celsius' : 'Fahrenheit'}</span>
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-purple-600 animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="glass-effect card-shadow rounded-2xl p-6 text-center text-gray-800">
            <p className="text-xl">⚠️ {error}</p>
            <p className="text-sm mt-2 text-gray-600">Please try searching for another city</p>
          </div>
        )}

        {/* Weather Content */}
        {!loading && !error && weatherData && (
          <div className="space-y-6">
            {/* Current Weather */}
            <WeatherCard data={weatherData} city={city} isFahrenheit={isFahrenheit} />

            {/* 7-Day Forecast */}
            <div className="glass-effect card-shadow rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                7-Day Forecast
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                {weatherData.daily.time.map((date, index) => (
                  <ForecastCard
                    key={date}
                    date={date}
                    maxTemp={weatherData.daily.temperature_2m_max[index]}
                    minTemp={weatherData.daily.temperature_2m_min[index]}
                    weatherCode={weatherData.daily.weathercode[index]}
                    precipitation={weatherData.daily.precipitation_sum[index]}
                    isFahrenheit={isFahrenheit}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

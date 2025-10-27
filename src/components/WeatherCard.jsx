import React from 'react';
import { 
  Cloud, 
  Droplets, 
  Wind, 
  Eye, 
  Gauge,
  Sunrise,
  Sunset,
  ThermometerSun
} from 'lucide-react';
import { getWeatherIcon, getWeatherDescription } from '../utils/weatherUtils';
import { convertTemperature, getTemperatureUnit } from '../utils/temperatureUtils';

const WeatherCard = ({ data, city, isFahrenheit }) => {
  const current = data.current_weather;
  const hourly = data.hourly;
  const daily = data.daily;
  
  // Get current hour index
  const currentTime = new Date().toISOString().slice(0, 13) + ':00';
  const currentIndex = hourly.time.findIndex(time => time === currentTime);
  
  const humidity = hourly.relativehumidity_2m[currentIndex] || 0;
  const precipitation = hourly.precipitation[currentIndex] || 0;
  const visibility = hourly.visibility ? (hourly.visibility[currentIndex] / 1000).toFixed(1) : 'N/A';
  const pressure = hourly.surface_pressure ? hourly.surface_pressure[currentIndex] : 'N/A';

  const WeatherIcon = getWeatherIcon(current.weathercode);
  const description = getWeatherDescription(current.weathercode);
  const tempUnit = getTemperatureUnit(isFahrenheit);
  const displayTemp = convertTemperature(current.temperature, isFahrenheit);

  return (
    <div className="glass-effect card-shadow rounded-2xl p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Weather Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-purple-600">
              <WeatherIcon size={80} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-800">
                {Math.round(displayTemp)}{tempUnit}
              </h2>
              <p className="text-xl text-gray-600 capitalize">{description}</p>
            </div>
          </div>
          
          <div className="text-gray-800">
            <p className="text-3xl font-semibold mb-2">{city}</p>
            <p className="text-lg text-gray-600">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-4">
          <DetailCard
            icon={<Wind size={24} />}
            label="Wind Speed"
            value={`${current.windspeed} km/h`}
          />
          <DetailCard
            icon={<Droplets size={24} />}
            label="Humidity"
            value={`${humidity}%`}
          />
          <DetailCard
            icon={<Cloud size={24} />}
            label="Precipitation"
            value={`${precipitation} mm`}
          />
          <DetailCard
            icon={<Eye size={24} />}
            label="Visibility"
            value={typeof visibility === 'number' ? `${visibility} km` : visibility}
          />
          <DetailCard
            icon={<Gauge size={24} />}
            label="Pressure"
            value={typeof pressure === 'number' ? `${pressure} hPa` : pressure}
          />
          <DetailCard
            icon={<ThermometerSun size={24} />}
            label="Feels Like"
            value={`${Math.round(displayTemp)}${tempUnit}`}
          />
        </div>
      </div>
    </div>
  );
};

const DetailCard = ({ icon, label, value }) => (
  <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
    <div className="flex items-center gap-2 mb-2 text-purple-600">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    <p className="text-2xl font-semibold text-gray-800">{value}</p>
  </div>
);

export default WeatherCard;

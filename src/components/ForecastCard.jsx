import React from 'react';
import { getWeatherIcon } from '../utils/weatherUtils';
import { convertTemperature } from '../utils/temperatureUtils';

const ForecastCard = ({ date, maxTemp, minTemp, weatherCode, precipitation, isFahrenheit }) => {
  const WeatherIcon = getWeatherIcon(weatherCode);
  const dayName = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
  const dayDate = new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  const displayMaxTemp = convertTemperature(maxTemp, isFahrenheit);
  const displayMinTemp = convertTemperature(minTemp, isFahrenheit);

  return (
    <div className="bg-purple-50 backdrop-blur-sm rounded-xl p-4 hover:bg-purple-100 transition-all duration-300 hover:scale-105 border border-purple-100">
      <div className="text-center">
        <p className="text-gray-800 font-semibold text-lg mb-1">{dayName}</p>
        <p className="text-gray-600 text-sm mb-3">{dayDate}</p>
        
        <div className="flex justify-center mb-3 text-purple-600">
          <WeatherIcon size={40} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-center items-center gap-2">
            <span className="text-gray-800 font-bold text-xl">{Math.round(displayMaxTemp)}°</span>
            <span className="text-gray-500 text-lg">{Math.round(displayMinTemp)}°</span>
          </div>
          
          {precipitation > 0 && (
            <p className="text-gray-600 text-xs">
              💧 {precipitation.toFixed(1)}mm
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;

import React from 'react';
import {
  ForecastContainer,
  SectionTitle,
  ForecastItems,
  ForecastItem,
} from './Forecast.styled';

interface ForecastData {
  daily: Array<{
    dt: number;
    temp: {
      day: number;
      min: number;
      max: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
  }>;
}

interface ForecastProps {
  weatherData: { daily: any[] } | null;
}

const Forecast: React.FC<ForecastProps> = ({ weatherData }) => {
  if (!weatherData || !weatherData.daily || weatherData.daily.length === 0) {
    return null;
  }

  const getDayName = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <ForecastContainer>
      <SectionTitle>5-Day Forecast</SectionTitle>
      <ForecastItems>
        {weatherData.daily.slice(0, 5).map((day, index) => (
          <ForecastItem key={index}>
            <div className="day">
              {index === 0 ? 'Today' : getDayName(day.dt)}
            </div>
            <div className="weather-icon">
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
            </div>
            <div className="temps">
              <div className="high-temp">{Math.round(day.temp.max)}°</div>
              <div className="low-temp">{Math.round(day.temp.min)}°</div>
            </div>
            <div className="description">{day.weather[0].main}</div>
          </ForecastItem>
        ))}
      </ForecastItems>
    </ForecastContainer>
  );
};

export default Forecast;
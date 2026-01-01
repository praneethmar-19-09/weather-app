import React from 'react';
import {
  WeatherContainer,
  SectionTitle,
  CurrentWeatherContainer,
  CurrentWeatherStatus,
  WeatherIcon,
  CurrentWeatherInfo,
  FeelsLike,
  HighLowContainer,
  WeatherDegree,
  InfoRow,
} from './CurrentWeather.styled';

interface WeatherData {
  current: {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      humidity: number;
      pressure: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
    };
  };
}

interface CurrentWeatherProps {
  weatherData: WeatherData | null;
  loading?: boolean;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData, loading }) => {
  if (loading) {
    return (
      <WeatherContainer>
        <SectionTitle>Current Weather</SectionTitle>
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
      </WeatherContainer>
    );
  }

  if (!weatherData) {
    return null;
  }

  const { current } = weatherData;

  return (
    <WeatherContainer>
      <SectionTitle>Current Weather</SectionTitle>
      <CurrentWeatherContainer>
        <CurrentWeatherStatus>
          <div className="city-name">{current.name}</div>
          <div className="temperature-container">
            <WeatherIcon>
              <img
                src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                alt={current.weather[0].description}
              />
            </WeatherIcon>
            <div className="temperature">
              {Math.round(current.main.temp)}°C
            </div>
          </div>
          <div className="description">{current.weather[0].description}</div>
        </CurrentWeatherStatus>

        <CurrentWeatherInfo>
          <FeelsLike>
            Feels like <span className="feels-like-temp">{Math.round(current.main.feels_like)}°C</span>
          </FeelsLike>
          
          <HighLowContainer>
            <WeatherDegree>
              <span className="icon">🔺</span>
              <span className="temp">{Math.round(current.main.temp_max)}°</span>
            </WeatherDegree>
            <WeatherDegree>
              <span className="icon">🔻</span>
              <span className="temp">{Math.round(current.main.temp_min)}°</span>
            </WeatherDegree>
          </HighLowContainer>
          
          <InfoRow>
            <div className="label">
              <span className="icon">💧</span>
              Humidity
            </div>
            <span className="value">{current.main.humidity}%</span>
          </InfoRow>
          
          <InfoRow>
            <div className="label">
              <span className="icon">💨</span>
              Wind Speed
            </div>
            <span className="value">{Math.round(current.wind.speed * 3.6)} km/h</span>
          </InfoRow>
          
          <InfoRow>
            <div className="label">
              <span className="icon">📊</span>
              Pressure
            </div>
            <span className="value">{current.main.pressure} hPa</span>
          </InfoRow>
        </CurrentWeatherInfo>
      </CurrentWeatherContainer>
    </WeatherContainer>
  );
};

export default CurrentWeather;
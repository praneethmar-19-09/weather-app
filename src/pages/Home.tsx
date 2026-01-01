import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import CurrentWeather from '../components/weather/CurrentWeather';
import Forecast from '../components/weather/Forecast';
import { HomeContainer, MainContent } from './Home.styled';

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleWeatherData = (data: any, isLoading: boolean) => {
    setWeatherData(data);
    setLoading(isLoading);
  };

  return (
    <HomeContainer>
      <Header />
      <MainContent>
        <Search onWeatherData={handleWeatherData} />
        <CurrentWeather weatherData={weatherData} loading={loading} />
        <Forecast weatherData={weatherData} />
      </MainContent>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
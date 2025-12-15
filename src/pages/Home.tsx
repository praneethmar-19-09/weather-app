import { useWeather } from "../hooks/useWeather";

const Home = () => {
  const { fetchWeatherByCity } = useWeather();

  return (
    <div>
      <h1>Weather App</h1>
      {/* UI components will live here */}
      {/* Only blueprint for now */}
      <button onClick={() => fetchWeatherByCity("London")}>
        Test Fetch
      </button>
    </div>
  );
};

export default Home;

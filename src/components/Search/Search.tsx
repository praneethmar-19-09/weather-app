import React, { useState } from "react";
import { SearchBarContainer, SearchInput, SearchButton } from "./style";
import searchicon from '../../assets/search-icon.svg';
import locatioicon from '../../assets/location-icon.svg';
import {useCurrentLocation} from '../../hooks/useCurrentLocation';
import {
  getCoordinatesByCity,
  getWeatherForecast,
} from "../../api/weather";



const Search: React.FC = () => {
  const { city, setCity, error, fetchCurrentLocation } = useCurrentLocation();
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const handleSearch = async () => {
  if (!city.trim()) return;

  try {
    setLoading(true);
    setWeatherError(null);

    const { lat, lon } = await getCoordinatesByCity(city);

    const weatherData = await getWeatherForecast(lat, lon);

    setWeather(weatherData);
  } catch (err: any) {
    setWeatherError(err.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

// const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   if (e.key === "Enter") {
//     handleSearch();
//   }
// };

  console.log("Location state:", location);
  console.log("City state:", city);
  console.log("Weather state:", weather);

  return (
    <div>
        <form onSubmit={(e) => {e.preventDefault();
                                    handleSearch();
                        }}>
            <SearchBarContainer>
                <div>
                    <img src={searchicon} alt="Search Icon" />
                </div>
                <SearchInput type="text" placeholder="Search for a city..." value={city} onChange={(e) => setCity(e.target.value)}/>
                <SearchButton onClick={fetchCurrentLocation}>
                    <div>
                        <img src={locatioicon} alt="Location Icon" />
                    </div>
                </SearchButton>
                {loading && <p>Loading weather...</p>}
                {weather && (
                    <pre>{JSON.stringify(weather.daily, null, 2)}</pre>
                )}
            </SearchBarContainer>
            {error && <p style={{ color: "red" }}>{error}</p>}  
            {weatherError && <p style={{ color: "red" }}>{weatherError}</p>}
        </form>
    </div>
  );
}

export default Search;
import React, { useState } from "react";
import { SearchBarContainer, SearchInput, SearchButton } from "./style";
import searchicon from '../../assets/search-icon.svg';
import locatioicon from '../../assets/location-icon.svg';
import {useCurrentLocation} from '../../hooks/useCurrentLocation';
import {
  getCoordinatesByCity,
  getWeatherForecast,
} from "../../api/weather";



interface SearchProps {
  onWeatherData: (data: any, loading: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ onWeatherData }) => {
  const { city, setCity, error, fetchCurrentLocation } = useCurrentLocation();
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!city.trim()) {
      setWeatherError("Please enter a city name");
      return;
    }

    try {
      setLoading(true);
      onWeatherData(null, true);
      setWeatherError(null);

      const coordinates = await getCoordinatesByCity(city.trim());
      const weatherData = await getWeatherForecast(coordinates.lat, coordinates.lon);

      setWeather(weatherData);
      onWeatherData(weatherData, false);
    } catch (err: any) {
      console.error("Search error:", err);
      setWeatherError(err.message || "Something went wrong");
      onWeatherData(null, false);
    } finally {
      setLoading(false);
    }
  };

// const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//   if (e.key === "Enter") {
//     handleSearch();
//   }
// };

  return (
    <div>
        <form onSubmit={(e) => {e.preventDefault();
                                    handleSearch();
                        }}>
            <SearchBarContainer>
                <div>
                    <img src={searchicon} alt="Search Icon" />
                </div>
                <SearchInput 
                    type="text" 
                    placeholder="Search for a city..." 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                />
                <SearchButton type="button" onClick={fetchCurrentLocation}>
                    <div>
                        <img src={locatioicon} alt="Location Icon" />
                    </div>
                </SearchButton>
            </SearchBarContainer>
            {loading && <p style={{ color: "#666", textAlign: "center", margin: "1rem 0" }}>Loading weather...</p>}
        </form>
        {error && <p style={{ color: "red", textAlign: "center", margin: "0.5rem 0" }}>{error}</p>}  
        {weatherError && <p style={{ color: "red", textAlign: "center", margin: "0.5rem 0" }}>{weatherError}</p>}
    </div>
  );
}

export default Search;
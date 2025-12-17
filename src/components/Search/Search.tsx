import React from "react";
import { SearchBarContainer, SearchInput, SearchButton } from "./style";
import searchicon from '../../assets/search-icon.svg';
import locatioicon from '../../assets/location-icon.svg';
import {useCurrentLocation} from '../../hooks/useCurrentLocation';


const Search: React.FC = () => {
  const { city, setCity, error, fetchCurrentLocation } = useCurrentLocation();

  console.log("Location state:", location);
  console.log("City state:", city);

  return (
    <div>
        <SearchBarContainer>
            <div>
                <img src={searchicon} alt="Search Icon" />
            </div>
            <SearchInput type="text" placeholder="Search for a city..." value={city} onChange={(e) => setCity(e.target.value)} />
            <SearchButton onClick={fetchCurrentLocation}>
                <div>
                    <img src={locatioicon} alt="Location Icon" />
                </div>
            </SearchButton>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </SearchBarContainer>
    </div>
  );
}

export default Search;
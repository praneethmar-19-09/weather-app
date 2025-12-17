import React from "react";
import { SearchBarContainer, SearchInput, SearchButton } from "./style";
import searchicon from '../../assets/search-icon.svg';
import locatioicon from '../../assets/location-icon.svg';

const Search: React.FC = () => {
  return (
    <div>
        <SearchBarContainer>
            <div>
                <img src={searchicon} alt="Search Icon" />
            </div>
            <SearchInput type="text" placeholder="Search for a city..." />
            <SearchButton>
                <div>
                    <img src={locatioicon} alt="Location Icon" />
                </div>
            </SearchButton>
        </SearchBarContainer>
    </div>
  );
}

export default Search;
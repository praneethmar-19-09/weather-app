import {styled} from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
`;
// background-color: ${(props) => props.theme.searchBar.backgroundColor};

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
 
`;

//  color: ${(props) => props.theme.searchBar.inputTextColor};

const SearchButton = styled.button`
  
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// background-color: ${(props) => props.theme.searchBar.buttonBackgroundColor};


export { SearchBarContainer, SearchInput, SearchButton };
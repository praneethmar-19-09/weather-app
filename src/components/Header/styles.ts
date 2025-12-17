import {styled} from 'styled-components'


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2F5D8A;
  margin: 0;
  font-weight: 700;
`;
/*
color: ${(props) => props.theme.appTitleColor};
*/

export const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const GithubLink = styled.a`
  color: inherit;
  text-decoration: none;
  :hover {
    opacity: 0.8;
  }
`;


export const DarkModeToogle = styled.button`
  width: 40px;
  height: 20px;

  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
//   background-color: ${(props) => props.theme.temperatureSwitch.backgroundColor};
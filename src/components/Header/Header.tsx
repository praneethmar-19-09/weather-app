import React from "react";
import githubIcon from '../../assets/github.svg';
import { HeaderContainer, Title, HeaderIconContainer, GithubLink, DarkModeToogle } from "./styles";


const Header: React.FC = () => {
      return (
        <HeaderContainer>
        <Title>Weather App</Title>
        <HeaderIconContainer>
            <DarkModeToogle />
            <GithubLink href="https://github.com/praneethmar-19-09" target="_blank" rel="noopener noreferrer" >
                <img src={githubIcon} alt="GitHub Icon" style={{width: '24px', height: '24px'}} />
            </GithubLink>
        </HeaderIconContainer>
        </HeaderContainer>
  );

}

export default Header;

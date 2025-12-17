import React from 'react';
import { FooterContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <p>© {new Date().getFullYear()} Weather App. <a href="https://github.com/praneethmar-19-09" target="_blank" rel="noopener noreferrer">All rights reserved.</a></p>
    </FooterContainer>
  );
}

export default Footer;

import styled from 'styled-components';

export const WeatherContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: #2c5aa0;
  margin-bottom: 1rem;
`;

export const CurrentWeatherContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CurrentWeatherStatus = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 250px;

  .city-name {
    font-weight: 600;
    font-size: 1.25rem;
    color: #396bae;
    margin-bottom: 1rem;
  }

  .temperature-container {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }

  .temperature {
    font-weight: 300;
    font-size: 4rem;
    color: #4a6fa1;
    margin-left: 1rem;
    line-height: 1;
  }

  .description {
    font-size: 1.1rem;
    color: #666;
    text-transform: capitalize;
    margin-top: 0.5rem;
  }
`;

export const WeatherIcon = styled.div`
  font-size: 4rem;
  
  img {
    width: 80px;
    height: 80px;
  }
`;

export const CurrentWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 250px;
  gap: 1rem;
`;

export const FeelsLike = styled.div`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
  
  .feels-like-temp {
    font-weight: 600;
    color: #4a6fa1;
  }
`;

export const HighLowContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
`;

export const WeatherDegree = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  
  .icon {
    width: 20px;
    height: 20px;
  }
  
  .temp {
    font-weight: 600;
    color: #4a6fa1;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  .label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-weight: 500;
  }
  
  .value {
    font-weight: 600;
    color: #2c5aa0;
  }
  
  .icon {
    width: 18px;
    height: 18px;
  }
`;
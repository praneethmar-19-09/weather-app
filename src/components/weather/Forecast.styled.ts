import styled from 'styled-components';

export const ForecastContainer = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 1.5rem 2rem;
  margin: 1rem 0;
`;

export const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: #2c5aa0;
  margin-bottom: 1rem;
`;

export const ForecastItems = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
`;

export const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  min-width: 120px;
  text-align: center;
  
  .day {
    font-weight: 600;
    color: #2c5aa0;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  
  .weather-icon {
    img {
      width: 50px;
      height: 50px;
    }
    margin: 0.5rem 0;
  }
  
  .temps {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }
  
  .high-temp {
    font-weight: 600;
    color: #e74c3c;
    font-size: 1rem;
  }
  
  .low-temp {
    font-weight: 500;
    color: #3498db;
    font-size: 0.9rem;
  }
  
  .description {
    font-size: 0.8rem;
    color: #666;
    margin-top: 0.5rem;
    text-transform: capitalize;
  }
`;
import lightBg from '../../assets/light-bg.jpg';
import darkBg from '../../assets/dark-bg.jpg';

export interface Theme {
  appTitleColor: string;
  backgroundImage: string;
  backgroundGradient: {
    color1: string;
    color2: string;
  };
  panelBgColor: string;
  panelTitleColor: string;
  forecastPanelBgColor: string;
  searchInput: {
    color: string;
    placeholderColor: string;
  };
  temperatureSwitch: {
    backgroundColor: string;
    sliderColor: string;
    textColor: string;
  };
  searchSuggestion: {
    backgroundColor: string;
    hoverBackgroundColor: string;
    seperatorLineColor: string;
  };
  smallIconColor: string;
  smallIconTextColor: string;
}

export const lightTheme: Theme = {
  appTitleColor: '#2F5D8A',
  backgroundImage: lightBg,
  backgroundGradient: {
    color1: '#F9FFFF',
    color2: '#38C8E6',
  },
  panelBgColor: '#FFFFFF',
  panelTitleColor: '#727E8E',
  forecastPanelBgColor: 'rgba(255, 255, 255, 0.75)',
  searchInput: {
    color: '#727E8E',
    placeholderColor: '#6898d5',
  },
  temperatureSwitch: {
    backgroundColor: '#77b1c7',
    sliderColor: '#fff',
    textColor: '#fff',
  },
  searchSuggestion: {
    backgroundColor: '#fff',
    hoverBackgroundColor: '#f9f9f9',
    seperatorLineColor: '#ccc',
  },
  smallIconColor: '#A1B9CE',
  smallIconTextColor: '#7B98B2',
};

export const darkTheme: Theme = {
  appTitleColor: '#FFFFFF',
  backgroundImage: darkBg,
  backgroundGradient: {
    color1: '#2C3E50',
    color2: '#4CA1AF',
  },
  panelBgColor: 'rgba(44, 62, 80, 0.85)',
  panelTitleColor: '#CCCCCC',
  forecastPanelBgColor: 'rgba(44, 62, 80, 0.65)',
  searchInput: {
    color: '#CCCCCC',
    placeholderColor: '#AAAAAA',
  },
  temperatureSwitch: {
    backgroundColor: '#555555',
    sliderColor: '#222222',
    textColor: '#FFFFFF',
  },
  searchSuggestion: {
    backgroundColor: '#3A4A59',
    hoverBackgroundColor: '#4A5A69',
    seperatorLineColor: '#555555',
  },
  smallIconColor: '#7F8C8D',
  smallIconTextColor: '#95A5A6',
};
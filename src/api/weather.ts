const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const getCoordinatesByCity = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );

  const data = await response.json();

  if (!data.length) {
    throw new Error("City not found");
  }

  return {
    lat: data[0].lat,
    lon: data[0].lon,
  };
};

export const getWeatherForecast = async (lat: number, lon: number) => {
  // Use the free current weather endpoint instead of One Call API
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Weather fetch failed");
  }

  const currentWeather = await response.json();
  
  // Get 5-day forecast (also free)
  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  
  let forecastData = null;
  if (forecastResponse.ok) {
    forecastData = await forecastResponse.json();
  }

  // Transform to expected format
  return {
    current: currentWeather,
    daily: forecastData ? processForecastData(forecastData.list) : []
  };
};

// Helper function to process 5-day forecast into daily data
const processForecastData = (forecastList: any[]) => {
  const dailyData: { [key: string]: any } = {};
  
  forecastList.forEach((item) => {
    const date = new Date(item.dt * 1000).toDateString();
    
    if (!dailyData[date]) {
      dailyData[date] = {
        dt: item.dt,
        temp: {
          day: item.main.temp,
          min: item.main.temp_min,
          max: item.main.temp_max,
        },
        weather: item.weather,
        humidity: item.main.humidity,
        wind_speed: item.wind.speed,
        clouds: item.clouds.all,
      };
    } else {
      // Update min/max temperatures for the day
      dailyData[date].temp.min = Math.min(dailyData[date].temp.min, item.main.temp_min);
      dailyData[date].temp.max = Math.max(dailyData[date].temp.max, item.main.temp_max);
    }
  });
  
  return Object.values(dailyData).slice(0, 5); // Return 5 days
};


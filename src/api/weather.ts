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
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Weather fetch failed");
  }

  return response.json();
};


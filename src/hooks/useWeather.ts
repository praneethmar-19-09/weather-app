import { useState } from "react";
import { weatherApi } from "../services";
import type { WeatherResponse } from "../types/weather";

export const useWeather = () => {
  const [data, setData] = useState<WeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherByCity = async (city: string) => {
    try {
      setLoading(true);
      setError(null);
      const result = await weatherApi.getCurrentByCity(city);
      setData(result);
    } catch (err) {
      setError("Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchWeatherByCity,
  };
};

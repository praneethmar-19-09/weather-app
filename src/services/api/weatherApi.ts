import { axiosInstance } from "./axiosInstance";
import type { WeatherResponse } from "../../types/weather";
import { ENV } from "../../config/env";

export const weatherApi = {
  getCurrentByCity: async (
    city: string
  ): Promise<WeatherResponse> => {
    const response = await axiosInstance.get<WeatherResponse>(
      "/weather",
      {
        params: {
          q: city,
          appid: ENV.WEATHER_API_KEY,
          units: "metric",
        },
      }
    );

    return response.data;
  },
};

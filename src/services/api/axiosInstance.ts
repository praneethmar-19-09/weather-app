import axios from "axios";
import { ENV } from "../../config/env";

export const axiosInstance = axios.create({
  baseURL: ENV.WEATHER_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

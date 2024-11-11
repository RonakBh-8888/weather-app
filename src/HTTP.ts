import axios from "axios";

const API_KEY = "91c88bc7a7f2ad2ccb9939857104f543";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city: string) => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return data;
};

export const fetchForecast = async (city: string) => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: "metric",
      appid: API_KEY,
    },
  });
  return data;
};

export const fetchWeatherByLocation = async (
  latitude: number,
  longitude: number
) => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat: latitude,
      lon: longitude,
      units: "metric",
      appid: API_KEY,
    },
  });

  return data;
};

export const fetchForecastByLocation = async (
  latitude: number,
  longitude: number
) => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      lat: latitude,
      lon: longitude,
      units: "metric",
      appid: API_KEY,
    },
  });

  return data;
};

export {};

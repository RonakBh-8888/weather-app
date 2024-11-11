import React, { createContext, useContext, useEffect, useState } from "react";
import {
  fetchForecast,
  fetchCurrentWeather,
  fetchWeatherByLocation,
  fetchForecastByLocation,
} from "../HTTP";

type WeatherContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  weatherData: any;
  forecastData: any;
  fetchWeather: (city: string) => Promise<void>;
};

type WeatherProviderProps = {
  children: React.ReactNode;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);

  const fetchWeather = async (city: string) => {
    const weather = await fetchCurrentWeather(city);
    const forecast = await fetchForecast(city);
    setWeatherData(weather);
    setForecastData(forecast.list.slice(0, 5));
  };

  const handleFetchWeatherByLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const data = await fetchWeatherByLocation(latitude, longitude);
      const forecastData = await fetchForecastByLocation(latitude, longitude);
      setWeatherData(data);
      setForecastData(forecastData.list.slice(0, 5));
    });
  };

  useEffect(() => {
    if (!city) {
      handleFetchWeatherByLocation();
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weatherData, forecastData, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within WeatherProvider");
  }
  return context;
};

export default WeatherProvider;

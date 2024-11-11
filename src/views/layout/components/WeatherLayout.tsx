import React from 'react';
import { Container } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../currentWaether/components/WeatherCard';
import { useWeather } from '../../../context/WeatherContext';

const Weatherlayout: React.FC = () => {
  const { city, setCity, weatherData, forecastData, fetchWeather } = useWeather();

  const handleSearch = async (searchCity: string) => {
    setCity(searchCity);
    await fetchWeather(searchCity);
  };

  console.log('weatherrData------------', weatherData, forecastData)

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <WeatherCard
          cityName={city}
          feelLike={weatherData.main.feels_like}
          main={weatherData.weather[0].main}
          temperature={weatherData.main.temp}
          humidity={weatherData.main.humidity}
          windSpeed={weatherData.wind.speed}
          icon={weatherData.weather[0].icon}
          forecastData={forecastData.map((item: any) => ({
            date: new Date(item.dt * 1000).toLocaleString(),
            temperature: item.main.temp,
            icon: item.weather[0].icon
          }))}
        />
      )}
    </Container>
  );
};

export default Weatherlayout;

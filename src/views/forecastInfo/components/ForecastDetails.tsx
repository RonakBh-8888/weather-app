import React from 'react';
import { Container } from '@mui/material';
import SearchBar from '../../components/SearchBar';
import WeatherCard from '../../currentWaether/components/WeatherCard';
import { useWeather } from '../../../context/WeatherContext';

const ForecastDetails: React.FC = () => {
  const { city,  weatherData, forecastData, fetchWeather } = useWeather();

  const locationData =  window.location.hash.split('/');

  const selectedForecast = Number(locationData[locationData.length - 1])
  
 
//   console.log('weatherrData------------', weatherData, forecastData, window.location)

  return (
    <Container>
      {weatherData && (
        <WeatherCard
          cityName={city}
          feelLike={forecastData[selectedForecast].main.feels_like}
          main={forecastData[selectedForecast].weather[0].main}
          temperature={forecastData[selectedForecast].main.temp}
          humidity={forecastData[selectedForecast].main.humidity}
          windSpeed={forecastData[selectedForecast].wind.speed}
          icon={forecastData[selectedForecast].weather[0].icon}
          forecastData={[]}
        />
      )}
    </Container>
  );
};

export default ForecastDetails;

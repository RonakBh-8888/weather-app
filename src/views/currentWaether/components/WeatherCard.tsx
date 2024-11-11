import React from "react";
import { Card, CardContent, Typography, Button, Grid2 } from "@mui/material";
import Forecast from "./Forecasr";
import { addFavorite, revisedRandId } from "../../../utils/faveritesProvider";

type CurrentWeatherProps = {
  cityName: string;
  temperature: number;
  feelLike: number;
  main: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  forecastData: Array<{ date: string; temperature: number; icon: string }>;
};

type FavoriteType = {
  cityName: string;
};

const WeatherCard: React.FC<CurrentWeatherProps> = ({
  temperature,
  feelLike,
  main,
  humidity,
  windSpeed,
  icon,
  cityName,
  forecastData,
}) => (
  <Card style={{ marginTop: "10px" }}>
    <CardContent>
      {forecastData.length ? (
        <Button
          onClick={() => {
            addFavorite({ name: cityName, id: revisedRandId() });
          }}
          style={{ float: "right" }}
        >
          {"Favorite"}
        </Button>
      ) : null}

      <Typography
        variant="h5"
        style={{ fontWeight: 700 }}
      >{forecastData.length ? `${cityName || 'current'} Weather` : `Forecast`}</Typography>
      <Grid2 style={{ display: "flex", flexDirection: "row" }}>
        {" "}
        <img
          style={{ width: "50px", height: "50px" }}
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />
        <Typography variant="h4">{temperature}°C</Typography>
      </Grid2>
      <Typography
        variant="body1"
        style={{ fontWeight: 600 }}
      >{`Feel like ${feelLike}°C, ${main}`}</Typography>
      <Typography variant="body1">Humidity: {humidity}%</Typography>
      <Typography variant="body1">Wind Speed: {windSpeed} km/h</Typography>

      {forecastData.length ? <Forecast forecast={forecastData} /> : null}
    </CardContent>
  </Card>
);

export default WeatherCard;

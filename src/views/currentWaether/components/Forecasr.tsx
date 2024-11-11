import React from "react";
import { Card, CardContent, Typography, Grid2, Paper } from "@mui/material";
import { useNavigate , createSearchParams } from "react-router-dom";

type ForecastProps = {
  forecast: Array<{ date: string; temperature: number; icon: string }>;
};

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  const navigate = useNavigate();

  return(
  <React.Fragment>
    <Grid2 container spacing={2}>
      <Typography variant="h6" style={{ fontWeight: 700 }}>
        {"5 Day - Forecast"}
      </Typography>
    </Grid2>
    <Grid2 container spacing={2}>
      {forecast.map((day, index) => (
        <div onClick={()=>{
          navigate({
            pathname: `forecast/${index}`
        });
        }} key={index}>
          <Card>
            <CardContent>
              <Typography variant="body1">{day.date}</Typography>
              <Typography variant="body2">Temp: {day.temperature}°C</Typography>
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt="weather icon"
              />
            </CardContent>
          </Card>
        </div>
      ))}
    </Grid2>
  </React.Fragment>
)};

export default Forecast;

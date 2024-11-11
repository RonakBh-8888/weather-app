import React, { useState } from "react";
import {
  HashRouter as Router,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import WeatherProvider from "./context/WeatherContext";
import Weatherlayout from "./views/layout";
import { Button } from "@mui/material";
import ForecastDetails from "./views/forecastInfo";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Weatherlayout />,
  },
  {
    path: "/forecast/:id",
    exact: true,
    element: <ForecastDetails />,
  },
];

const routers = createHashRouter([...routes]);

const App: React.FC = () => (
  <WeatherProvider>
    <Button>{}</Button>
    <RouterProvider router={routers} />
  </WeatherProvider>
);

export default App;

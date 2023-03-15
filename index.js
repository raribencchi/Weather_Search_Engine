import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import WeatherSearch from "./WeatherSearch";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="weatherSearch">
    <h1>Weather Search Engine</h1>
    <StrictMode>
      <WeatherSearch />
    </StrictMode>
  </div>
);

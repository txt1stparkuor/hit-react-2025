import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./styles/index.scss";

import SearchBar from "./components/SearchBar/SearchBar";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Forecast from "./components/Forecast/Forecast";
import { getUnits } from "./components/WeatherUtils/WeatherUtils";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [units, setUnits] = useState("metric");

  const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
  const toggleUnits = () => {
    if (units === "metric") {
      setUnits("imperial");
    } else {
      setUnits("metric");
    }
  };

  const { tempUnit, speedUnit } = getUnits(units);

  const fetchWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;
      const currentResponse = await axios.get(currentWeatherUrl);
      setCurrentWeather(currentResponse.data);

      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
      const forecastResponse = await axios.get(forecastUrl);

      const dailyData = forecastResponse.data.list.filter(
        (reading, index) => index % 8 === 0
      );

      setForecast(dailyData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("City not found or error fetching data. Please try again.");
      setCurrentWeather({});
      setForecast([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentWeather.name) {
      fetchWeather(currentWeather.name);
    }
  }, [units]);

  const handleSearch = () => {
    if (location.trim()) {
      fetchWeather(location);
      setLocation("");
    }
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <div className="overlay"></div>

      <div className="container">
        <SearchBar
          location={location}
          setLocation={setLocation}
          handleSearch={handleSearch}
          searchLocation={searchLocation}
          toggleUnits={toggleUnits}
          units={units}
        />

        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Loading...</div>}

        {currentWeather.main && (
          <>
            <CurrentWeather
              currentWeather={currentWeather}
              tempUnit={tempUnit}
              speedUnit={speedUnit}
            />

            {forecast.length > 0 && (
              <Forecast forecast={forecast} tempUnit={tempUnit} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

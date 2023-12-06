import { useState, useEffect } from "react";
import WeatherBox from "./WeatherBox";
import WeatherInfo from "./WeatherInfo";

const KEY = "08830094288e478d84c95109230612";
const Weather = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        return setLocation({ latitude, longitude });
      });
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=&q=${Number(
            location.latitude
          )},${Number(location.longitude)}&days=4&aqi=no&alerts=no`,
          {
            mode: "cors",
          }
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    if (location) {
      fetchWeather();
    }
  }, [location]);

  return (
    <div className="c-weather">
      {weatherData && (
        <>
          <WeatherBox
            location={weatherData.location}
            condition={weatherData.current.condition}
            temp={weatherData.current.temp_c}
          />
          <WeatherInfo
            weather={weatherData.current}
            forecast={weatherData.forecast.forecastday}
          />
        </>
      )}
    </div>
  );
};

export default Weather;

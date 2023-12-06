import WeatherForecast from "./WeatherForecast";
import WeatherToday from "./WeatherToday";

const WeatherInfo = ({ weather, forecast }) => {
  const {
    temp_c: temperature,
    wind_kph: windSpeed,
    feelslike_c: feelsLike,
    humidity,
    is_day: isDay,
  } = weather;
  return (
    <div className="c-weather__infos">
      <WeatherToday
        temperature={temperature}
        windSpeed={windSpeed}
        humidity={humidity}
        feelsLike={feelsLike}
      />

      <WeatherForecast forecast={forecast} />

      <div className="c-weather__action">
        <button className="c-weather__action-button">Change Location</button>
      </div>
    </div>
  );
};

export default WeatherInfo;

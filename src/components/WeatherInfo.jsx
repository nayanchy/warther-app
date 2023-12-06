import WeatherToday from "./WeatherToday";

const WeatherInfo = ({ weather }) => {
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

      <ul className="c-weather__weeklist">
        <li className="c-weather__weeklist-item is-active">
          <div className="c-weather__weeklist-item-dayname">Wed</div>
          <div className="temperature">29°C</div>
        </li>

        <li className="c-weather__weeklist-item">
          <div className="c-weather__weeklist-item-dayname">Thu</div>
          <div className="c-weather__weeklist-item-temperature">24°C</div>
        </li>

        <li className="c-weather__weeklist-item">
          <div className="c-weather__weeklist-item-dayname">Fri</div>
          <div className="c-weather__weeklist-item-temperature">24°C</div>
        </li>

        <li className="c-weather__weeklist-item">
          <div className="c-weather__weeklist-item-dayname">Sat</div>
          <div className="c-weather__weeklist-item-temperature">26°C</div>
        </li>
      </ul>

      <div className="c-weather__action">
        <button className="c-weather__action-button">Change Location</button>
      </div>
    </div>
  );
};

export default WeatherInfo;

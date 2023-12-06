const WeatherToday = ({ feelsLike, windSpeed, humidity }) => {
  return (
    <ul className="c-weather__today-list">
      <li className="c-weather__today-item">
        <div className="c-weather__today-item-title">Feels Like</div>
        <div className="c-weather__today-item-value">{feelsLike}°C</div>
      </li>

      <li className="c-weather__today-item">
        <div className="c-weather__today-item-title">Humidity</div>
        <div className="c-weather__today-item-value">{humidity}%</div>
      </li>

      <li className="c-weather__today-item">
        <div className="c-weather__today-item-title">Wind</div>
        <div className="c-weather__today-item-value">{windSpeed} km/h</div>
      </li>
    </ul>
  );
};

export default WeatherToday;

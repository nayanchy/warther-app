const WeatherForecastItem = ({ date, temperature, day, isActive }) => {
  return (
    <li className={`c-weather__weeklist-item ${isActive ? "is-active" : ""}`}>
      <div className="c-weather__weeklist-item-dayname">{day}</div>
      <div className="temperature">{temperature}°C</div>
    </li>
  );
};

export default WeatherForecastItem;

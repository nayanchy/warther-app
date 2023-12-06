import WeatherForecastItem from "./WeatherForecastItem";

const WeatherForecast = ({ forecast }) => {
  console.log(forecast);
  return (
    <ul className="c-weather__weeklist">
      {forecast.map((data, i) => {
        console.log(data);
        const dateString = data.date;
        const date = new Date(dateString);
        const dayOfMonth = date.getDate();
        const shortDayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const dayNumber = date.getDay();
        const dayName = shortDayNames[dayNumber];
        const temperature = data.day.avgtemp_c;

        return (
          <WeatherForecastItem
            key={data.date_epoch}
            date={dayOfMonth}
            temperature={temperature}
            day={dayName}
            isActive={i === 0}
          />
        );
      })}
    </ul>
  );
};

export default WeatherForecast;

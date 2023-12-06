import { useState, useEffect } from "react";

const WeatherBox = ({ location, condition, temp }) => {
  const initialDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const initialDayOfWeek = daysOfWeek[initialDate.getDay()];
  const initialDayOfMonth = initialDate.getDate();
  const initialMonth = months[initialDate.getMonth()];
  const initialYear = initialDate.getFullYear();

  const [currentDate, setCurrentDate] = useState({
    date: initialDayOfMonth,
    day: initialDayOfWeek,
    month: initialMonth,
    year: initialYear,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const dayOfWeek = daysOfWeek[date.getDay()];
      const dayOfMonth = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      setCurrentDate({
        date: dayOfMonth,
        day: dayOfWeek,
        month: month,
        year: year,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="c-weather__side">
      <figure className="c-weather__side-figure">
        <img
          src="https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
          className="c-weather__side-image"
        />
        <div className="c-weather__side-gradient"></div>
      </figure>

      <div className="c-weather__side-content">
        <div className="c-weather__side-date">
          <h2 className="c-weather__side-dayname">{currentDate.day}</h2>
          <div className="c-weather__side-day">{`${currentDate.month} ${currentDate.date}, ${currentDate.year}`}</div>
          <div className="c-weather__side-location">{location.name}</div>
        </div>

        <div className="c-wather__side-temperature">
          <h1 className="c-weather__side-temp">{temp}°C</h1>
          <div className="weather__description">
            <img src={condition.icon} alt="" />
            <h3 className="c-weather__side-description">{condition.text}</h3>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default WeatherBox;

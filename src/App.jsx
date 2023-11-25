import "./App.css";

function App() {
  return (
    <>
      <div className="c-weather">
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
              <h2 className="c-weather__side-dayname">Wednesday</h2>
              <div className="c-weather__side-day">November 15, 2023</div>
              <div className="c-weather__side-location">Palma, Spain</div>
            </div>

            <div className="c-wather__side-temperature">
              <h1 className="c-weather__side-temp">29°C</h1>
              <h3 className="c-weather__side-description">Sunny</h3>
            </div>
          </div>
        </aside>

        <div className="c-weather__infos">
          <ul className="c-weather__today-list">
            <li className="c-weather__today-item">
              <div className="c-weather__today-item-title">Precipitation</div>
              <div className="c-weather__today-item-value">0%</div>
            </li>

            <li className="c-weather__today-item">
              <div className="c-weather__today-item-title">Humidity</div>
              <div className="c-weather__today-item-value">34%</div>
            </li>

            <li className="c-weather__today-item">
              <div className="c-weather__today-item-title">Wind</div>
              <div className="c-weather__today-item-value">0 km/h</div>
            </li>
          </ul>

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
            <button className="c-weather__action-button">
              Change Location
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

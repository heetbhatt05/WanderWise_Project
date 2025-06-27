import "./WeatherSection.css";

export default function WeatherSection({ weather }) {
  if (!weather) return null;
  return (
    <div className="weather-section">
      <h4><i className="fas fa-cloud-sun"></i> Weather</h4>
      <div className="temp">{weather.temp}</div>
      <div className="desc">{weather.desc}</div>
      <div className="details">
        <div>
          <span>Humidity</span>
          <span style={{ color: "#18a273" }}>{weather.humidity}</span>
        </div>
        <div>
          <span>Wind</span>
          <span style={{ color: "#18a273" }}>{weather.wind}</span>
        </div>
      </div>
      <div className="forecast">
        <strong>4-Day Forecast</strong>
        {weather.forecast && weather.forecast.map((f, i) => (
          <div className="forecast-item" key={i}>{f}</div>
        ))}
      </div>
    </div>
  );
}
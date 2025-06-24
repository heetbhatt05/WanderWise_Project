// import "./WeatherSection.css";

// export default function WeatherSection({weather}) {
//     return (
//         <>
//             <div className="container">
//                 <div className="weather">
//                     <h4><i className="fas fa-cloud-sun"></i> Weather in paris</h4>
//                     <div className="centered">
//                         <div className="temp">24°C</div>
//                         <div className="desc">Partly Cloudy</div>
//                     </div>
//                     <div className="details">
//                         <div><span>Humidity</span><span>65%</span></div>
//                         <div><span>Wind</span><span>12 km/h</span></div>
//                     </div>
//                     <div className="forecast">
//                         <strong>4-Day Forecast</strong>
//                         <div className="forecast-item"><span>Today</span><span>Sunny &nbsp; 28° 18°</span></div>
//                         <div className="forecast-item"><span>Tomorrow</span><span>Cloudy &nbsp; 26° 19°</span></div>
//                         <div className="forecast-item"><span>Day 3</span><span>Partly Cloudy &nbsp; 25° 17°</span></div>
//                         <div className="forecast-item"><span>Day 4</span><span>Sunny &nbsp; 27° 20°</span></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }






// import "./WeatherSection.css";

// export default function WeatherSection({ weather }) {
//   if (!weather) return null;
//   return (
//     <div className="weather-section">
//       <h4><i className="fas fa-cloud-sun"></i> Weather</h4>
//       <div className="weather-main">
//         <div className="weather-temp">{weather.temp}</div>
//         <div className="weather-desc">{weather.desc}</div>
//       </div>
//       <div className="weather-details">
//         <span>Humidity<br /><b>{weather.humidity}</b></span>
//         <span>Wind<br /><b>{weather.wind}</b></span>
//       </div>
//       <div className="weather-forecast">
//         <b>4-Day Forecast</b>
//         <ul>
//           {weather.forecast && weather.forecast.map((f, i) => (
//             <li key={i}>{f}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }








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
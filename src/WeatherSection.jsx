import "./WeatherSection.css";

export default function WeatherSection() {
    return (
        <>
            <div className="container">
                <div className="weather">
                    <h4><i className="fas fa-cloud-sun"></i> Weather in paris</h4>
                    <div className="centered">
                        <div className="temp">24°C</div>
                        <div className="desc">Partly Cloudy</div>
                    </div>
                    <div className="details">
                        <div><span>Humidity</span><span>65%</span></div>
                        <div><span>Wind</span><span>12 km/h</span></div>
                    </div>
                    <div className="forecast">
                        <strong>4-Day Forecast</strong>
                        <div className="forecast-item"><span>Today</span><span>Sunny &nbsp; 28° 18°</span></div>
                        <div className="forecast-item"><span>Tomorrow</span><span>Cloudy &nbsp; 26° 19°</span></div>
                        <div className="forecast-item"><span>Day 3</span><span>Partly Cloudy &nbsp; 25° 17°</span></div>
                        <div className="forecast-item"><span>Day 4</span><span>Sunny &nbsp; 27° 20°</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}







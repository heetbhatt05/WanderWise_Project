import "./ItinerarySection.css";

export default function ItinerarySection({ itinerary }) {
    return (
        <div className="itinerary-section">
            <h2 className="itinerary-section-heading">
                <i className="fas fa-calendar-alt"></i> Suggested Full-Day Itinerary
            </h2>
            <div className="itinerary-section-timeline">
                {itinerary.map((item, idx) => (
                    <div className="itinerary-section-timeline-item" key={idx}>
                        <div className="itinerary-section-timeline-time">{item.time}</div>
                        <div className="itinerary-section-timeline-content">
                            <h3>{item.activity}</h3>
                            <p>{item.desc}</p>
                            <span className="itinerary-section-duration">{item.duration}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
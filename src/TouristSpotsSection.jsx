import "./TouristSpotsSection.css";

export default function TouristSpotsSection({ spots }) {
  return (
    <div className="tourist-spots-section">
      <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
      <div className="tourist-spots-grid">
        {spots.map((spot, idx) => (
          <div className="tourist-spot-card" key={idx}>
            <div className="tourist-image-placeholder">
              <img
                src={spot.image ? spot.image : '/assets/spot-placeholder.jpg'}
                alt={spot.name}
              />
            </div>
            <div className="tourist-spot-content">
              <div className="tourist-spot-title">
                <strong>{spot.name}</strong>
                <span className="tourist-time-tag">{spot.time}</span>
              </div>
              <p>{spot.desc}</p>
              <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
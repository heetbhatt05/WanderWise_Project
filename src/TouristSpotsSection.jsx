import "./TouristSpotsSection.css";


export default function TouristSpotsSection() {
    return (
        <>
            <div className="container">
                <section className="top-tourist-spots">
                    <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
                    <div className="spots-grid">
                        <div className="spot-card">
                            <div className="image-placeholder">
                                <img src="img1.jpeg" alt="spot image" />
                            </div>
                            <div className="spot-content">
                                <div className="spot-title">
                                    <strong>paris Historic Center</strong>
                                    <span className="time-tag">2–3 hours</span>
                                </div>
                                <p>Explore the rich history and beautiful architecture of the old city center.</p>
                                <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
                            </div>
                        </div>

                        <div className="spot-card">
                            <div className="image-placeholder">
                                <img src="img2.jpeg" alt="spot image" />
                            </div>
                            <div className="spot-content">
                                <div className="spot-title">
                                    <strong>paris Cultural Museum</strong>
                                    <span className="time-tag">1–2 hours</span>
                                </div>
                                <p>Discover local art, culture, and traditions in this world-class museum.</p>
                                <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
                            </div>
                        </div>

                        <div className="spot-card">
                            <div className="image-placeholder">
                                <img src="img3.jpeg" alt="spot image" />
                            </div>
                            <div className="spot-content">
                                <div className="spot-title">
                                    <strong>paris Garden Paradise</strong>
                                    <span className="time-tag">1–2 hours</span>
                                </div>
                                <p>A beautiful botanical garden perfect for peaceful walks and photography.</p>
                                <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
                            </div>
                        </div>

                        <div className="spot-card">
                            <div className="image-placeholder">
                                <img src="img4.jpeg" alt="spot image" />
                            </div>
                            <div className="spot-content">
                                <div className="spot-title">
                                    <strong>paris Viewpoint</strong>
                                    <span className="time-tag">1 hour</span>
                                </div>
                                <p>Stunning panoramic views of the city and surrounding landscape.</p>
                                <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}





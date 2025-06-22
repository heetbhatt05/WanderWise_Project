import "./ExploreParisSection.css";


export default function ExploreParisSection() {
    return (
        <>
            <section className="explore-paris">
                <h3><i className="fas fa-map-marker-alt"></i> Explore paris</h3>
                <div className="map-box">
                    <div className="map-content">
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>Interactive Map</p>
                        <span>Explore paris locations</span>
                    </div>
                </div>
                <ul className="map-legend">
                    <li><span className="dot red"></span> Hotels & Accommodation</li>
                    <li><span className="dot blue"></span> Tourist Attractions</li>
                    <li><span className="dot green"></span> Restaurants & Food</li>
                </ul>
            </section>
        </>
    )
}





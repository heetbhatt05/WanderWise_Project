// import "./ExploreParisSection.css";


// export default function ExploreParisSection() {
//     return (
//         <>
//             <section className="explore-paris">
//                 <h3><i className="fas fa-map-marker-alt"></i> Explore paris</h3>
//                 <div className="map-box">
//                     <div className="map-content">
//                         <i className="fas fa-map-marker-alt fa-2x"></i>
//                         <p>Interactive Map</p>
//                         <span>Explore paris locations</span>
//                     </div>
//                 </div>
//                 <ul className="map-legend">
//                     <li><span className="dot red"></span> Hotels & Accommodation</li>
//                     <li><span className="dot blue"></span> Tourist Attractions</li>
//                     <li><span className="dot green"></span> Restaurants & Food</li>
//                 </ul>
//             </section>
//         </>
//     )
// }




import "./ExploreParisSection.css";

export default function ExploreParisSection({ explore }) {
    return (
        <section className="explore-paris-section">
            <h3><i className="fas fa-map-marker-alt"></i> {explore?.title || "Explore"}</h3>
            <div className="explore-map-box">
                <div className="explore-map-content">
                    <i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Interactive Map</p>
                    <span>{explore?.locations || "Explore locations"}</span>
                </div>
            </div>
            <ul className="explore-map-legend">
                <li><span className="explore-dot explore-red"></span> Hotels & Accommodation</li>
                <li><span className="explore-dot explore-blue"></span> Tourist Attractions</li>
                <li><span className="explore-dot explore-green"></span> Restaurants & Food</li>
            </ul>
        </section>
    );
}
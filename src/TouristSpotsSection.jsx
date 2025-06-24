// import "./TouristSpotsSection.css";


// export default function TouristSpotsSection() {
//     return (
//         <>
//             <div className="container">
//                 <section className="top-tourist-spots">
//                     <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
//                     <div className="spots-grid">
//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src="img1.jpeg" alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Historic Center</strong>
//                                     <span className="time-tag">2–3 hours</span>
//                                 </div>
//                                 <p>Explore the rich history and beautiful architecture of the old city center.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>

//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src="img2.jpeg" alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Cultural Museum</strong>
//                                     <span className="time-tag">1–2 hours</span>
//                                 </div>
//                                 <p>Discover local art, culture, and traditions in this world-class museum.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>

//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src="img3.jpeg" alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Garden Paradise</strong>
//                                     <span className="time-tag">1–2 hours</span>
//                                 </div>
//                                 <p>A beautiful botanical garden perfect for peaceful walks and photography.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>

//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src="img4.jpeg" alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Viewpoint</strong>
//                                     <span className="time-tag">1 hour</span>
//                                 </div>
//                                 <p>Stunning panoramic views of the city and surrounding landscape.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }




// import "./TouristSpotsSection.css";
// import img1 from "./assets/img1.jpeg";
// import img2 from "./assets/img2.jpeg";
// import img3 from "./assets/img3.jpeg";
// import img4 from "./assets/img4.jpeg";

// export default function TouristSpotsSection() {
//     return (
//         <>
//             <div className="container">
//                 <section className="top-tourist-spots">
//                     <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
//                     <div className="spots-grid">
//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src={img1} alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Historic Center</strong>
//                                     <span className="time-tag">2–3 hours</span>
//                                 </div>
//                                 <p>Explore the rich history and beautiful architecture of the old city center.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>

//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src={img2} alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Cultural Museum</strong>
//                                     <span className="time-tag">1–2 hours</span>
//                                 </div>
//                                 <p>Discover local art, culture, and traditions in this world-class museum.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>

//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src={img3} alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Garden Paradise</strong>
//                                     <span className="time-tag">1–2 hours</span>
//                                 </div>
//                                 <p>A beautiful botanical garden perfect for peaceful walks and photography.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>

//                         <div className="spot-card">
//                             <div className="image-placeholder">
//                                 <img src={img4} alt="spot image" />
//                             </div>
//                             <div className="spot-content">
//                                 <div className="spot-title">
//                                     <strong>paris Viewpoint</strong>
//                                     <span className="time-tag">1 hour</span>
//                                 </div>
//                                 <p>Stunning panoramic views of the city and surrounding landscape.</p>
//                                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </>
//     )
// }






// import "./TouristSpotsSection.css";
// import img1 from "./assets/img1.jpeg";
// import img2 from "./assets/img2.jpeg";
// import img3 from "./assets/img3.jpeg";
// import img4 from "./assets/img4.jpeg";

// export default function TouristSpotsSection({spots}) {
//     return (
//         <div className="tourist-spots-section">
//             <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
//             <div className="tourist-spots-grid">
//                 <div className="tourist-spot-card">
//                     <div className="tourist-image-placeholder">
//                         <img src={img1} alt="spot image" />
//                     </div>
//                     <div className="tourist-spot-content">
//                         <div className="tourist-spot-title">
//                             <strong>paris Historic Center</strong>
//                             <span className="tourist-time-tag">2–3 hours</span>
//                         </div>
//                         <p>Explore the rich history and beautiful architecture of the old city center.</p>
//                         <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                     </div>
//                 </div>

//                 <div className="tourist-spot-card">
//                     <div className="tourist-image-placeholder">
//                         <img src={img2} alt="spot image" />
//                     </div>
//                     <div className="tourist-spot-content">
//                         <div className="tourist-spot-title">
//                             <strong>paris Cultural Museum</strong>
//                             <span className="tourist-time-tag">1–2 hours</span>
//                         </div>
//                         <p>Discover local art, culture, and traditions in this world-class museum.</p>
//                         <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                     </div>
//                 </div>

//                 <div className="tourist-spot-card">
//                     <div className="tourist-image-placeholder">
//                         <img src={img3} alt="spot image" />
//                     </div>
//                     <div className="tourist-spot-content">
//                         <div className="tourist-spot-title">
//                             <strong>paris Garden Paradise</strong>
//                             <span className="tourist-time-tag">1–2 hours</span>
//                         </div>
//                         <p>A beautiful botanical garden perfect for peaceful walks and photography.</p>
//                         <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                     </div>
//                 </div>

//                 <div className="tourist-spot-card">
//                     <div className="tourist-image-placeholder">
//                         <img src={img4} alt="spot image" />
//                     </div>
//                     <div className="tourist-spot-content">
//                         <div className="tourist-spot-title">
//                             <strong>paris Viewpoint</strong>
//                             <span className="tourist-time-tag">1 hour</span>
//                         </div>
//                         <p>Stunning panoramic views of the city and surrounding landscape.</p>
//                         <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }















// import "./TouristSpotsSection.css";
// import img1 from "./assets/img1.jpeg";
// import img2 from "./assets/img2.jpeg";
// import img3 from "./assets/img3.jpeg";
// import img4 from "./assets/img4.jpeg";

// const spotImages = [img1, img2, img3, img4];

// export default function TouristSpotsSection({ spots }) {
//     return (
//         <div className="tourist-spots-section">
//             <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
//             <div className="tourist-spots-grid">
//                 {spots.map((spot, idx) => (
//                     <div className="tourist-spot-card" key={idx}>
//                         <div className="tourist-image-placeholder">
//                             <img src={spotImages[idx % spotImages.length]} alt="spot" />
//                         </div>





// export default function TouristSpotsSection({ spots }) {
//     return (
//         <div className="tourist-spots-section">
//             <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
//             <div className="tourist-spots-grid">
//                 {spots.map((spot, idx) => (
//                     <div className="tourist-spot-card" key={idx}>
//                         <div className="tourist-image-placeholder">
//                             <img src={spot.image} alt={spot.name} />
//                         </div>
//                         <div className="tourist-spot-content">
//                             <div className="tourist-spot-title">
//                                 <strong>{spot.name}</strong>
//                                 <span className="tourist-time-tag">{spot.time}</span>
//                             </div>
//                             <p>{spot.desc}</p>
//                             <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }






















// import "./TouristSpotsSection.css";

// export default function TouristSpotsSection({ spots }) {
//   return (
//     <div className="container">
//       <section className="top-tourist-spots">
//         <h2><i className="fas fa-landmark"></i> Top Tourist Spots</h2>
//         <div className="spots-grid">
//           {spots.map((spot, idx) => (
//             <div className="spot-card" key={idx}>
//               <div className="image-placeholder">
//                 <img
//                   src={spot.image ? spot.image : '/assets/spot-placeholder.jpg'}
//                   alt={spot.name}
//                 />
//               </div>
//               <div className="spot-content">
//                 <div className="spot-title">
//                   <strong>{spot.name}</strong>
//                   <span className="time-tag">{spot.time}</span>
//                 </div>
//                 <p>{spot.desc}</p>
//                 <a href="#"><i className="fas fa-map-marker-alt"></i> View on map</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }











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
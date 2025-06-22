// import './HotelsSection.css';

// export default function HotelsSection({ hotels }) {
//     return (
//         <div className="container">
//             <div className="hotels">
//                 <h3><i className="fas fa-hotel"></i> Recommended Hotels</h3>
//                 <div className="hotel-cards">
//                     {hotels.map((hotel, index) => (
//                         <div className="hotel-card" key={index}>
//                             <img src={`paris${index + 1}.jpeg`} alt="Hotel Image" />
//                             <div className="info">
//                                 <h4>{hotel.name}</h4>
//                                 <div className="price-rating">
//                                     <div className="price">{hotel.price}</div>
//                                     <div className="rating"><i className="fas fa-star"></i> {hotel.rating}</div>
//                                 </div>
//                                 <div className="tags">
//                                     {hotel.tags.map((tag, i) => (
//                                         <div className="tag" key={i}>{tag}</div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }




import './HotelsSection.css';

function HotelsSection({ hotels }) {
  return (
    <div className="container">
      <div className="hotels">
        <h3><i className="fas fa-hotel"></i> Recommended Hotels</h3>
        <div className="hotel-cards">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={`paris${index + 1}.jpeg`} alt="Hotel Image" />
              <div className="info">
                <h4>{hotel.name}</h4>
                <div className="price-rating">
                  <div className="price">{hotel.price}</div>
                  <div className="rating"><i className="fas fa-star"></i> {hotel.rating}</div>
                </div>
                <div className="tags">
                  {hotel.tags.map((tag, i) => (
                    <div className="tag" key={i}>{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelsSection;
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




// import './HotelsSection.css';

// function HotelsSection({ hotels }) {
//   return (
//     <div className="container">
//       <div className="hotels">
//         <h3><i className="fas fa-hotel"></i> Recommended Hotels</h3>
//         <div className="hotel-cards">
//           {hotels.map((hotel, index) => (
//             <div className="hotel-card" key={index}>
//               <img src={`paris${index + 1}.jpeg`} alt="Hotel Image" />
//               <div className="info">
//                 <h4>{hotel.name}</h4>
//                 <div className="price-rating">
//                   <div className="price">{hotel.price}</div>
//                   <div className="rating"><i className="fas fa-star"></i> {hotel.rating}</div>
//                 </div>
//                 <div className="tags">
//                   {hotel.tags.map((tag, i) => (
//                     <div className="tag" key={i}>{tag}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelsSection;






// import './HotelsSection.css';
// import paris1 from './assets/paris1.jpeg';
// import paris2 from './assets/paris2.jpeg';
// import paris3 from './assets/paris3.jpeg';
// // ...import all images

// const hotelImages = [paris1, paris2, paris3 /* ... */];

// function HotelsSection({ hotels }) {
//   return (
//     <div className="container">
//       <div className="hotels-section">
//         <h3><i className="fas fa-hotel"></i> Recommended Hotels</h3>
//         <div className="hotel-cards">
//           {hotels.map((hotel, index) => (
//             <div className="hotel-card" key={index}>
//               <img src={hotelImages[index]} alt="Hotel Image" />
//               <div className="info">
//                 <h4>{hotel.name}</h4>
//                 <div className="price-rating">
//                   <div className="price">{hotel.price}</div>
//                   <div className="rating"><i className="fas fa-star"></i> {hotel.rating}</div>
//                 </div>
//                 <div className="tags">
//                   {hotel.tags.map((tag, i) => (
//                     <div className="tag" key={i}>{tag}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelsSection;









// import './HotelsSection.css';
// import paris1 from './assets/paris1.jpeg';
// import paris2 from './assets/paris2.jpeg';
// import paris3 from './assets/paris3.jpeg';
// // ...import all images

// const hotelImages = [paris1, paris2, paris3 /* ... */];

// function HotelsSection({ hotels }) {
//   return (
//     <div className="hotels-section-unique-container">
//       <div className="hotels-section-unique">
//         <h3 className="hotels-section-unique-heading">
//           <i className="fas fa-hotel"></i> Recommended Hotels
//         </h3>
//         <div className="hotels-section-unique-cards">
//           {hotels.map((hotel, index) => (
//             <div className="hotels-section-unique-card" key={index}>
//               <img src={hotelImages[index]} alt="Hotel" />



// function HotelsSection({ hotels }) {
//   return (
//     <div className="hotels-section-unique-container">
//       <div className="hotels-section-unique">
//         <h3 className="hotels-section-unique-heading">
//           <i className="fas fa-hotel"></i> Recommended Hotels
//         </h3>
//         <div className="hotels-section-unique-cards">
//           {hotels.map((hotel, index) => (
//             <div className="hotels-section-unique-card" key={index}>
//               <img src={hotel.image} alt={hotel.name} />
//               <div className="hotels-section-unique-info">
//                 <h4>{hotel.name}</h4>
//                 <div className="hotels-section-unique-price-rating">
//                   <div className="hotels-section-unique-price">{hotel.price}</div>
//                   <div className="hotels-section-unique-rating">
//                     <i className="fas fa-star"></i> {hotel.rating}
//                   </div>
//                 </div>
//                 <div className="hotels-section-unique-tags">
//                   {hotel.tags.map((tag, i) => (
//                     <div className="hotels-section-unique-tag" key={i}>{tag}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HotelsSection;


















// import './HotelsSection.css';

// export default function HotelsSection({ hotels }) {
//   return (
//     <div className="container">
//       <div className="hotels-section">
//         <h3><i className="fas fa-hotel"></i> Recommended Hotels</h3>
//         <div className="hotel-cards">
//           {hotels.map((hotel, index) => (
//             <div className="hotel-card" key={index}>
//               <img
//                 src={hotel.image ? hotel.image : '/assets/hotel-placeholder.jpg'}
//                 alt={hotel.name}
//               />
//               <div className="info">
//                 <h4>{hotel.name}</h4>
//                 <div className="price-rating">
//                   <div className="price">{hotel.price}</div>
//                   <div className="rating"><i className="fas fa-star"></i> {hotel.rating}</div>
//                 </div>
//                 <div className="tags">
//                   {hotel.tags.map((tag, i) => (
//                     <div className="tag" key={i}>{tag}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
















import './HotelsSection.css';

export default function HotelsSection({ hotels }) {
  return (
    <div className="hotels-section-unique-container">
      <div className="hotels-section-unique">
        <h3 className="hotels-section-unique-heading">
          <i className="fas fa-hotel"></i> Recommended Hotels
        </h3>
        <div className="hotels-section-unique-cards">
          {hotels.map((hotel, index) => (
            <div className="hotels-section-unique-card" key={index}>
              <img
                src={hotel.image ? hotel.image : '/assets/hotel-placeholder.jpg'}
                alt={hotel.name}
              />
              <div className="hotels-section-unique-info">
                <h4>{hotel.name}</h4>
                <div className="hotels-section-unique-price-rating">
                  <div className="hotels-section-unique-price">{hotel.price}</div>
                  <div className="hotels-section-unique-rating">
                    <i className="fas fa-star"></i> {hotel.rating}
                  </div>
                </div>
                <div className="hotels-section-unique-tags">
                  {hotel.tags.map((tag, i) => (
                    <div className="hotels-section-unique-tag" key={i}>{tag}</div>
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
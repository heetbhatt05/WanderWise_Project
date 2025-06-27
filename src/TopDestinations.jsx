// // import React from 'react';
// // import Kedarnath from './assets/kedarnath-img.jpeg';
// // import Jagannathpuri from './assets/jagannathpuri-img.jpg';
// // import Goa from './assets/goa-img.jpg';
// // import Kutch from './assets/kutch-img.jpg';
// // import Udaipur from './assets/udaipur-img.jpg';
// // import Darjeeling from './assets/darjeeling-img.jpg';
// // import './TopDestinations.css';

// // const TopDestinations = () => {
// //   const destinations = [
// //     { name: 'Kedarnath', tours: 20, places: 15, image: Kedarnath },
// //     { name: 'Jagannathpuri', tours: 12, places: 9, image: Jagannathpuri },
// //     { name: 'Goa', tours: 25, places: 10, image: Goa },
// //     { name: 'Kutch', tours: 18, places: 9, image: Kutch },
// //     { name: 'Udaipur', tours: 14, places: 12, image: Udaipur },
// //     { name: 'Darjeeling', tours: 14, places: 6, image: Darjeeling },
// //   ];

// //   return (
// //     <section className="top-destinations" id="top-destinations">
// //       <div className="container">
// //         <h2 className="top-destination-text1">Top Destinations</h2>
// //         <p className="top-destination-text2">Explore the best places to visit</p>
// //         <div className="destinations-grid">
// //           <div className="destination-row">
// //             <div className="destination-card">
// //               <img src={destinations[0].image} alt={destinations[0].name} className="destination-image" />
// //               <div className="destination-info">
// //                 <h3>{destinations[0].name}</h3>
// //                 <p>{destinations[0].tours} Tours | {destinations[0].places} Places</p>
// //               </div>
// //             </div>
// //             <div className="destination-card">
// //               <img src={destinations[1].image} alt={destinations[1].name} className="destination-image" />
// //               <div className="destination-info">
// //                 <h3>{destinations[1].name}</h3>
// //                 <p>{destinations[1].tours} Tours | {destinations[1].places} Places</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="destination-row">
// //             <div className="destination-card">
// //               <img src={destinations[2].image} alt={destinations[2].name} className="destination-image" />
// //               <div className="destination-info">
// //                 <h3>{destinations[2].name}</h3>
// //                 <p>{destinations[2].tours} Tours | {destinations[2].places} Places</p>
// //               </div>
// //             </div>
// //             <div className="destination-card">
// //               <img src={destinations[3].image} alt={destinations[3].name} className="destination-image" />
// //               <div className="destination-info">
// //                 <h3>{destinations[3].name}</h3>
// //                 <p>{destinations[3].tours} Tours | {destinations[3].places} Places</p>
// //               </div>
// //             </div>
// //             <div className="destination-card">
// //               <img src={destinations[4].image} alt={destinations[4].name} className="destination-image" />
// //               <div className="destination-info">
// //                 <h3>{destinations[4].name}</h3>
// //                 <p>{destinations[4].tours} Tours | {destinations[4].places} Places</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="destination-row">
// //             <div className="destination-card wide">
// //               <img src={destinations[5].image} alt={destinations[5].name} className="destination-image" />
// //               <div className="destination-info">
// //                 <h3>{destinations[5].name}</h3>
// //                 <p>{destinations[5].tours} Tours | {destinations[5].places} Places</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TopDestinations;



// import React from 'react';
// import cityData from './citydata.jsx';
// import Kedarnath from './assets/kedarnath-img.jpeg';
// import Jagannathpuri from './assets/jagannathpuri-img.jpg';
// import Goa from './assets/goa-img.jpg';
// import Kutch from './assets/kutch-img.jpg';
// import Udaipur from './assets/udaipur-img.jpg';
// import Darjeeling from './assets/darjeeling-img.jpg';
// import Paris from './assets/paris1.jpeg'; // Example placeholder, adjust paths as needed
// import './TopDestinations.css';

// const TopDestinations = () => {
//   const destinations = [
//     { name: 'Kedarnath', tours: 20, places: 15, image: Kedarnath },
//     { name: 'Jagannathpuri', tours: 12, places: 9, image: Jagannathpuri },
//     { name: 'Goa', tours: 25, places: 10, image: Goa },
//     { name: 'Kutch', tours: 18, places: 9, image: Kutch },
//     { name: 'Udaipur', tours: 14, places: 12, image: Udaipur },
//     { name: 'Darjeeling', tours: 14, places: 6, image: Darjeeling },
//     { name: 'Paris', tours: 30, places: 20, image: Paris }, // Added as an example
//   ];

//   const [selectedCity, setSelectedCity] = React.useState(null);

//   return (
//     <section className="top-destinations" id="top-destinations">
//       <div className="container">
//         <h2 className="top-destination-text1">Top Destinations</h2>
//         <p className="top-destination-text2">Explore the best places to visit</p>
//         <div className="destinations-grid">
//           <div className="destination-row">
//             <div className="destination-card" onClick={() => setSelectedCity(destinations[0].name.toLowerCase())}>
//               <img src={destinations[0].image} alt={destinations[0].name} className="destination-image" />
//               <div className="destination-info">
//                 <h3>{destinations[0].name}</h3>
//                 <p>{destinations[0].tours} Tours | {destinations[0].places} Places</p>
//               </div>
//             </div>
//             <div className="destination-card" onClick={() => setSelectedCity(destinations[1].name.toLowerCase())}>
//               <img src={destinations[1].image} alt={destinations[1].name} className="destination-image" />
//               <div className="destination-info">
//                 <h3>{destinations[1].name}</h3>
//                 <p>{destinations[1].tours} Tours | {destinations[1].places} Places</p>
//               </div>
//             </div>
//           </div>
//           <div className="destination-row">
//             <div className="destination-card" onClick={() => setSelectedCity(destinations[2].name.toLowerCase())}>
//               <img src={destinations[2].image} alt={destinations[2].name} className="destination-image" />
//               <div className="destination-info">
//                 <h3>{destinations[2].name}</h3>
//                 <p>{destinations[2].tours} Tours | {destinations[2].places} Places</p>
//               </div>
//             </div>
//             <div className="destination-card" onClick={() => setSelectedCity(destinations[3].name.toLowerCase())}>
//               <img src={destinations[3].image} alt={destinations[3].name} className="destination-image" />
//               <div className="destination-info">
//                 <h3>{destinations[3].name}</h3>
//                 <p>{destinations[3].tours} Tours | {destinations[3].places} Places</p>
//               </div>
//             </div>
//             <div className="destination-card" onClick={() => setSelectedCity(destinations[4].name.toLowerCase())}>
//               <img src={destinations[4].image} alt={destinations[4].name} className="destination-image" />
//               <div className="destination-info">
//                 <h3>{destinations[4].name}</h3>
//                 <p>{destinations[4].tours} Tours | {destinations[4].places} Places</p>
//               </div>
//             </div>
//           </div>
//           <div className="destination-row">
//             <div className="destination-card wide" onClick={() => setSelectedCity(destinations[5].name.toLowerCase())}>
//               <img src={destinations[5].image} alt={destinations[5].name} className="destination-image" />
//               <div className="destination-info">
//                 <h3>{destinations[5].name}</h3>
//                 <p>{destinations[5].tours} Tours | {destinations[5].places} Places</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {selectedCity && cityData[selectedCity] && (
//           <div className="details-modal">
//             <h3>{selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)} Details</h3>
//             <p><strong>Weather:</strong> {cityData[selectedCity].weather.temp}, {cityData[selectedCity].weather.desc}</p>
//             <h4>Top Hotels:</h4>
//             <ul>
//               {cityData[selectedCity].hotels.slice(0, 2).map((hotel, index) => (
//                 <li key={index}>
//                   {hotel.name} - {hotel.price} (Rating: {hotel.rating})
//                 </li>
//               ))}
//             </ul>
//             <h4>Itinerary:</h4>
//             <ul>
//               {cityData[selectedCity].itinerary.map((item, index) => (
//                 <li key={index}>
//                   {item.time} - {item.activity} ({item.duration})
//                 </li>
//               ))}
//             </ul>
//             <button onClick={() => setSelectedCity(null)}>Close</button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default TopDestinations;


import React from 'react';
import Kedarnath from './assets/kedarnath-img.jpeg';
import Jagannathpuri from './assets/jagannathpuri-img.jpg';
import Goa from './assets/goa-img.jpg';
import Kutch from './assets/kutch-img.jpg';
import Udaipur from './assets/udaipur-img.jpg';
import Darjeeling from './assets/darjeeling-img.jpg';
import './TopDestinations.css';

const TopDestinations = () => {
  const destinations = [
    { name: 'Kedarnath', tours: 20, places: 15, image: Kedarnath },
    { name: 'Jagannathpuri', tours: 12, places: 9, image: Jagannathpuri },
    { name: 'Goa', tours: 25, places: 10, image: Goa },
    { name: 'Kutch', tours: 18, places: 9, image: Kutch },
    { name: 'Udaipur', tours: 14, places: 12, image: Udaipur },
    { name: 'Darjeeling', tours: 14, places: 6, image: Darjeeling },
  ];

  return (
    <section className="top-destinations" id="top-destinations">
      <div className="container">
        <h2 className="top-destination-text1">Top Destinations</h2>
        <p className="top-destination-text2">Explore the best places to visit</p>
        <div className="destinations-grid">
          <div className="destination-row">
            <div className="destination-card">
              <img src={destinations[0].image} alt={destinations[0].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[0].name}</h3>
                <p>{destinations[0].tours} Tours | {destinations[0].places} Places</p>
              </div>
            </div>
            <div className="destination-card">
              <img src={destinations[1].image} alt={destinations[1].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[1].name}</h3>
                <p>{destinations[1].tours} Tours | {destinations[1].places} Places</p>
              </div>
            </div>
          </div>
          <div className="destination-row">
            <div className="destination-card">
              <img src={destinations[2].image} alt={destinations[2].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[2].name}</h3>
                <p>{destinations[2].tours} Tours | {destinations[2].places} Places</p>
              </div>
            </div>
            <div className="destination-card">
              <img src={destinations[3].image} alt={destinations[3].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[3].name}</h3>
                <p>{destinations[3].tours} Tours | {destinations[3].places} Places</p>
              </div>
            </div>
            <div className="destination-card">
              <img src={destinations[4].image} alt={destinations[4].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[4].name}</h3>
                <p>{destinations[4].tours} Tours | {destinations[4].places} Places</p>
              </div>
            </div>
          </div>
          <div className="destination-row">
            <div className="destination-card wide">
              <img src={destinations[5].image} alt={destinations[5].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[5].name}</h3>
                <p>{destinations[5].tours} Tours | {destinations[5].places} Places</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
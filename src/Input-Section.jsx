// import React, { useState } from 'react';
// import './Input-Section.css';
// import HotelsSection from './HotelsSection';
// import WeatherSection from './WeatherSection';
// import TouristSpotsSection from './TouristSpotsSection';
// import ExploreParisSection from './ExploreParisSection';
// import FoodSection from './FoodSection';
// import ItinerarySection from './ItinerarySection';
// import cityData from './citydata.jsx';

// function InputSection() {
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const [results, setResults] = useState(null);

//   const getTravelData = (dest) => {
//     const key = dest.trim().toLowerCase();
//     return cityData[key] || {
//       hotels: [{ name: 'No hotels found', price: 'N/A', rating: 0, tags: [] }],
//       weather: { temp: 'N/A', desc: 'N/A', humidity: 'N/A', wind: 'N/A', forecast: [] },
//       spots: [{ name: 'No spots found', time: 'N/A', desc: 'N/A' }],
//       explore: { title: 'Explore Not Found', locations: 'No locations available' },
//       food: [{ name: 'No restaurants found', type: 'N/A', desc: 'N/A', rating: 0, price: 'N/A' }],
//       dishes: ['No dishes found'],
//       itinerary: [{ time: 'N/A', activity: 'No itinerary', desc: 'N/A', duration: 'N/A' }],
//     };
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (destination) {
//       const travelData = getTravelData(destination);
//       setResults(travelData);
//       setShowResults(true);
//     } else {
//       setResults(getTravelData(''));
//       setShowResults(true);
//     }
//   };



//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="input-section" id="input-section">
//         <div className="input-section-heading">
//           <h1 className="input-section-heading-text">Where would you like to go?</h1>
//           <h3 className="input-section-heading-text2">
//             Enter your dream destination and let us create the perfect itinerary for you
//           </h3>
//         </div>
//         <div className="main-input">
//           <div className="input">
//             <div className="input-destination">
//               <i className="fas fa-map-marker-alt"></i>
//               <input
//                 type="text"
//                 id="location"
//                 placeholder="Enter destination city (e.g., Paris, Tokyo)"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//               />
//             </div>
//             <div className="input-destination">
//               <i className="fas fa-calendar-alt"></i>
//               <input
//                 type="text"
//                 id="date"
//                 placeholder="Travel dates (e.g., 2025-06-25)"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//               />
//             </div>
//             <button className="input-section-btn1" type="submit">
//               Make My Plan
//             </button>
//           </div>
//           {showResults && results && (
//             <div className="input-section-results-container visible">
//               <div className="input-section-row">
//                 <div className="input-section-hotels-col">
//                   <HotelsSection hotels={results.hotels} />
//                 </div>
//                 <div className="input-section-weather-col">
//                   <WeatherSection weather={results.weather} />
//                 </div>
//               </div>
//               <div className="input-section-results-grid">
//                 <div className="input-section-grid-item">
//                   <TouristSpotsSection spots={results.spots} />
//                 </div>
//                 <div className="input-section-grid-item">
//                   <ExploreParisSection explore={results.explore} />
//                 </div>
//                 <div className="input-section-grid-item input-section-full-width">
//                   <FoodSection food={results.food} dishes={results.dishes} />
//                 </div>
//                 <div className="input-section-grid-item input-section-full-width">
//                   <ItinerarySection itinerary={results.itinerary} />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

// export default InputSection;



















// import React, { useState, useEffect } from 'react';
// import './Input-Section.css';
// import HotelsSection from './HotelsSection';
// import WeatherSection from './WeatherSection';
// import TouristSpotsSection from './TouristSpotsSection';
// import ExploreParisSection from './ExploreParisSection';
// import FoodSection from './FoodSection';
// import ItinerarySection from './ItinerarySection';
// import cityData from './citydata.jsx';

// function InputSection() {
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const [results, setResults] = useState(null);
//   const [weather, setWeather] = useState(null);
//   const apiKey = 'your_api_key'; // Replace with your OpenWeatherMap API key

//   const getTravelData = (dest) => {
//     const key = dest.trim().toLowerCase();
//     return cityData[key] || {
//       hotels: [{ name: 'No hotels found', price: 'N/A', rating: 0, tags: [] }],
//       weather: { temp: 'N/A', desc: 'N/A', humidity: 'N/A', wind: 'N/A', forecast: [] },
//       spots: [{ name: 'No spots found', time: 'N/A', desc: 'N/A' }],
//       explore: { title: 'Explore Not Found', locations: 'No locations available' },
//       food: [{ name: 'No restaurants found', type: 'N/A', desc: 'N/A', rating: 0, price: 'N/A' }],
//       dishes: ['No dishes found'],
//       itinerary: [{ time: 'N/A', activity: 'No itinerary', desc: 'N/A', duration: 'N/A' }],
//     };
//   };

//   useEffect(() => {
//     if (destination) {
//       console.log('Fetching weather for:', destination); // Add this
//       const travelData = getTravelData(destination);
//       setResults(travelData);
//       setShowResults(true);
//       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${apiKey}&units=metric`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('API Response:', data); // Add this
//           if (data.cod === 200) {
//             setWeather(data);
//           } else {
//             setWeather({ error: 'Weather data not available' });
//           }
//         })
//         .catch((error) => {
//           console.error('Weather API error:', error);
//           setWeather({ error: 'Failed to load weather' });
//         });
//     } else {
//       setShowResults(false);
//       setWeather(null);
//     }
//   }, [destination]);

//   return (
//     <div className="input-section" id="input-section">
//       <div className="input-section-heading">
//         <h1 className="input-section-heading-text">Where would you like to go?</h1>
//         <h3 className="input-section-heading-text2">
//           Enter your dream destination and let us create the perfect itinerary for you
//         </h3>
//       </div>
//       <div className="main-input">
//         <div className="input">
//           <div className="input-destination">
//             <i className="fas fa-map-marker-alt"></i>
//             <input
//               type="text"
//               id="location"
//               placeholder="Enter destination city (e.g., Paris, Tokyo)"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//             />
//           </div>
//           <div className="input-destination">
//             <i className="fas fa-calendar-alt"></i>
//             <input
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//         </div>
//         {weather && (
//           <div className="weather-display">
//             <h3>Weather in {destination}</h3>
//             {weather.error ? (
//               <p>{weather.error}</p>
//             ) : (
//               <>
//                 <p>{weather.main.temp}°C, {weather.weather[0].description}</p>
//                 <img
//                   src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//                   alt={weather.weather[0].description}
//                 />
//               </>
//             )}
//           </div>
//         )}
//         {showResults && results && (
//           <div className="input-section-results-container visible">
//             <div className="input-section-row">
//               <div className="input-section-hotels-col">
//                 <HotelsSection hotels={results.hotels} />
//               </div>
//               <div className="input-section-weather-col">
//                 <WeatherSection weather={results.weather} />
//               </div>
//             </div>
//             <div className="input-section-results-grid">
//               <div className="input-section-grid-item">
//                 <TouristSpotsSection spots={results.spots} />
//               </div>
//               <div className="input-section-grid-item">
//                 <ExploreParisSection explore={results.explore} />
//               </div>
//               <div className="input-section-grid-item input-section-full-width">
//                 <FoodSection food={results.food} dishes={results.dishes} />
//               </div>
//               <div className="input-section-grid-item input-section-full-width">
//                 <ItinerarySection itinerary={results.itinerary} />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default InputSection;































//--------------------------------------------MAIN--------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import './Input-Section.css';
// import HotelsSection from './HotelsSection';
// import WeatherSection from './WeatherSection';
// import TouristSpotsSection from './TouristSpotsSection';
// import  ExploreParisSection from './ExploreParisSection';
// import FoodSection from './FoodSection';
// import ItinerarySection from './ItinerarySection';
// import cityData from './citydata.jsx';

// function InputSection() {
//   const [destination, setDestination] = useState('');
//   const [date, setDate] = useState('');
//   const [showResults, setShowResults] = useState(false);
//   const [results, setResults] = useState(null);
//   const [weather, setWeather] = useState(null);
//   const apiKey = 'your_api_key'; 

//   const getTravelData = (dest) => {
//     const key = dest.trim().toLowerCase();
//     return cityData[key] || {
//       hotels: [{ name: 'No hotels found', price: 'N/A', rating: 0, tags: [] }],
//       weather: { temp: 'N/A', desc: 'N/A', humidity: 'N/A', wind: 'N/A', forecast: [] },
//       spots: [{ name: 'No spots found', time: 'N/A', desc: 'N/A' }],
//       explore: { title: 'Explore Not Found', locations: 'No locations available' },
//       food: [{ name: 'No restaurants found', type: 'N/A', desc: 'N/A', rating: 0, price: 'N/A' }],
//       dishes: ['No dishes found'],
//       itinerary: [{ time: 'N/A', activity: 'No itinerary', desc: 'N/A', duration: 'N/A' }],
//     };
//   };

//   useEffect(() => {
//   if (destination) {
//     fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${destination}&limit=1&appid=${apiKey}`)
//       .then((response) => response.json())
//       .then((geoData) => {
//         if (geoData.length > 0) {
//           const { lat, lon } = geoData[0];
//           fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
//             .then((response) => response.json())
//             .then((data) => {
//               if (data.cod === 200) setWeather(data);
//               else setWeather({ error: `Weather data not available (Code: ${data.cod})` });
//             })
//             .catch((error) => {
//               console.error('Weather error:', error);
//               setWeather({ error: 'Failed to load weather' });
//             });
//         } else {
//           setWeather({ error: 'City not found' });
//         }
//       })
//       .catch((error) => {
//         console.error('Geocode error:', error);
//         setWeather({ error: 'Failed to locate city' });
//       });
//     const travelData = getTravelData(destination);
//     setResults(travelData);
//     setShowResults(true);
//   } else {
//     setShowResults(false);
//     setWeather(null);
//   }
// }, [destination]);

//   return (
//     <div className="input-section" id="input-section">
//       <div className="input-section-heading">
//         <h1 className="input-section-heading-text">Where would you like to go?</h1>
//         <h3 className="input-section-heading-text2">
//           Enter your dream destination and let us create the perfect itinerary for you
//         </h3>
//       </div>
//       <div className="main-input">
//         <div className="input">
//           <div className="input-destination">
//             <i className="fas fa-map-marker-alt"></i>
//             <input
//               type="text"
//               id="location"
//               placeholder="Enter destination city (e.g., Vadodara,IN)"
//               value={destination}
//               onChange={(e) => setDestination(e.target.value)}
//             />
//           </div>
//           <div className="input-destination">
//             <i className="fas fa-calendar-alt"></i>
//             <input
//               type="date"
//               id="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//         </div>

//         {showResults && results && (
//           <div className="input-section-results-container visible">
//             <div className="input-section-row">
//               <div className="input-section-hotels-col">
//                 <HotelsSection hotels={results.hotels} />
//               </div>
//               <div className="input-section-weather-col">
//                 <WeatherSection weather={results.weather} />
//               </div>
//             </div>
//             <div className="input-section-results-grid">
//               <div className="input-section-grid-item">
//                 <TouristSpotsSection spots={results.spots} />
//               </div>
//               <div className="input-section-grid-item">
//                 <ExploreParisSection explore={results.explore} />
//               </div>
//               <div className="input-section-grid-item input-section-full-width">
//                 <FoodSection food={results.food} dishes={results.dishes} />
//               </div>
//               <div className="input-section-grid-item input-section-full-width">
//                 <ItinerarySection itinerary={results.itinerary} />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default InputSection;










// import React, { useState, useEffect } from 'react';
// import './Input-Section.css';
// import HotelsSection from './HotelsSection';
// import WeatherSection from './WeatherSection';
// import TouristSpotsSection from './TouristSpotsSection';
// import ExploreParisSection from './ExploreParisSection';
// import FoodSection from './FoodSection';
// import ItinerarySection from './ItinerarySection';
// import cityData from './citydata.jsx';

// function InputSection() {
//   const [activeTab, setActiveTab] = useState('tours');
//   const [destination, setDestination] = useState('');
//   const [checkIn, setCheckIn] = useState('');
//   const [checkOut, setCheckOut] = useState('');
//   const [duration, setDuration] = useState('5');
//   const [members, setMembers] = useState('2');
//   const [budget, setBudget] = useState([2677, 9241]);
  
//   // Transport specific states
//   const [fromCity, setFromCity] = useState('');
//   const [toCity, setToCity] = useState('');
//   const [departureDate, setDepartureDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');
//   const [transportType, setTransportType] = useState('flight');
//   const [passengers, setPassengers] = useState('1');
  
//   const [showResults, setShowResults] = useState(false);
//   const [results, setResults] = useState(null);
//   const [weather, setWeather] = useState(null);
  
//   const apiKey = 'your_api_key';

//   const getTravelData = (dest) => {
//     const key = dest.trim().toLowerCase();
//     return cityData[key] || {
//       hotels: [{ name: 'No hotels found', price: 'N/A', rating: 0, tags: [] }],
//       weather: { temp: 'N/A', desc: 'N/A', humidity: 'N/A', wind: 'N/A', forecast: [] },
//       spots: [{ name: 'No spots found', time: 'N/A', desc: 'N/A' }],
//       explore: { title: 'Explore Not Found', locations: 'No locations available' },
//       food: [{ name: 'No restaurants found', type: 'N/A', desc: 'N/A', rating: 0, price: 'N/A' }],
//       dishes: ['No dishes found'],
//       itinerary: [{ time: 'N/A', activity: 'No itinerary', desc: 'N/A', duration: 'N/A' }],
//     };
//   };

//   useEffect(() => {
//     if (destination && activeTab === 'tours') {
//       const travelData = getTravelData(destination);
//       setResults(travelData);
//       setShowResults(true);
//       // Weather API call here
//     } else {
//       setShowResults(false);
//     }
//   }, [destination, activeTab]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (activeTab === 'tours' && destination) {
//       const travelData = getTravelData(destination);
//       setResults(travelData);
//       setShowResults(true);
//     }
//     // Transport search logic here
//   };

//   return (
//     <div className="input-section" id="input-section">
//       <div className="input-section-heading">
//         <h1 className="input-section-heading-text">Where would you like to go?</h1>
//         <h3 className="input-section-heading-text2">
//           Enter your dream destination and let us create the perfect itinerary for you
//         </h3>
//       </div>

//       <div className="main-input">
//         <div className="search-container">
//           {/* Tab Navigation */}
//           <div className="tabs-header">
//             <button 
//               className={`tab-button ${activeTab === 'tours' ? 'active' : ''}`}
//               onClick={() => setActiveTab('tours')}
//             >
//               <i className="fas fa-mountain"></i>
//               Tours
//             </button>
//             <button 
//               className={`tab-button ${activeTab === 'transport' ? 'active' : ''}`}
//               onClick={() => setActiveTab('transport')}
//             >
//               <i className="fas fa-plane"></i>
//               Transport
//             </button>
//           </div>

//           {/* Search Form */}
//           <form className="search-form" onSubmit={handleSearch}>
//             {activeTab === 'tours' ? (
//               <>
//                 {/* Tours Form */}
//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Destination</label>
//                     <input
//                       type="text"
//                       placeholder="Enter Your Destination"
//                       value={destination}
//                       onChange={(e) => setDestination(e.target.value)}
//                     />
//                     <i className="fas fa-chevron-down field-icon"></i>
//                   </div>
//                   <div className="form-field">
//                     <label>Check In</label>
//                     <input
//                       type="date"
//                       value={checkIn}
//                       onChange={(e) => setCheckIn(e.target.value)}
//                     />
//                     <i className="fas fa-calendar field-icon"></i>
//                   </div>
//                   <div className="form-field">
//                     <label>Check Out</label>
//                     <input
//                       type="date"
//                       value={checkOut}
//                       onChange={(e) => setCheckOut(e.target.value)}
//                     />
//                     <i className="fas fa-calendar field-icon"></i>
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Duration</label>
//                     <select 
//                       value={duration} 
//                       onChange={(e) => setDuration(e.target.value)}
//                     >
//                       <option value="1">1 Day</option>
//                       <option value="3">3 Days</option>
//                       <option value="5">5 Days</option>
//                       <option value="7">1 Week</option>
//                       <option value="14">2 Weeks</option>
//                     </select>
//                     {/* <i className="fas fa-chevron-down field-icon"></i> */}
//                   </div>
//                   <div className="form-field">
//                     <label>Members</label>
//                     <select 
//                       value={members} 
//                       onChange={(e) => setMembers(e.target.value)}
//                     >
//                       <option value="1">1 Person</option>
//                       <option value="2">2 People</option>
//                       <option value="3">3 People</option>
//                       <option value="4">4 People</option>
//                       <option value="5+">5+ People</option>
//                     </select>
//                     {/* <i className="fas fa-chevron-down field-icon"></i> */}
//                   </div>
//                 </div>

//                 <div className="budget-section">
//                   <label>Budget: <span className="budget-range">₹{budget[0].toLocaleString()} - ₹{budget[1].toLocaleString()}</span></label>
//                   <div className="budget-slider">
//                     <input
//                       type="range"
//                       min="1000"
//                       max="50000"
//                       value={budget[0]}
//                       onChange={(e) => setBudget([parseInt(e.target.value), budget[1]])}
//                       className="slider"
//                     />
//                     <input
//                       type="range"
//                       min="1000"
//                       max="50000"
//                       value={budget[1]}
//                       onChange={(e) => setBudget([budget[0], parseInt(e.target.value)])}
//                       className="slider"
//                     />
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 {/* Transport Form */}
//                 <div className="transport-types">
//                   <button 
//                     type="button"
//                     className={`transport-btn ${transportType === 'flight' ? 'active' : ''}`}
//                     onClick={() => setTransportType('flight')}
//                   >
//                     <i className="fas fa-plane"></i>
//                     Flights
//                   </button>
//                   <button 
//                     type="button"
//                     className={`transport-btn ${transportType === 'train' ? 'active' : ''}`}
//                     onClick={() => setTransportType('train')}
//                   >
//                     <i className="fas fa-train"></i>
//                     Trains
//                   </button>
//                   <button 
//                     type="button"
//                     className={`transport-btn ${transportType === 'bus' ? 'active' : ''}`}
//                     onClick={() => setTransportType('bus')}
//                   >
//                     <i className="fas fa-bus"></i>
//                     Buses
//                   </button>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>From</label>
//                     <input
//                       type="text"
//                       placeholder="Departure City"
//                       value={fromCity}
//                       onChange={(e) => setFromCity(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-field">
//                     <label>To</label>
//                     <input
//                       type="text"
//                       placeholder="Destination City"
//                       value={toCity}
//                       onChange={(e) => setToCity(e.target.value)}
//                     />
//                   </div>
//                   <div className="form-field">
//                     <label>Departure</label>
//                     <input
//                       type="date"
//                       value={departureDate}
//                       onChange={(e) => setDepartureDate(e.target.value)}
//                     />
//                     <i className="fas fa-calendar field-icon"></i>
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-field">
//                     <label>Return (Optional)</label>
//                     <input
//                       type="date"
//                       value={returnDate}
//                       onChange={(e) => setReturnDate(e.target.value)}
//                     />
//                     <i className="fas fa-calendar field-icon"></i>
//                   </div>
//                   <div className="form-field">
//                     <label>Passengers</label>
//                     <select 
//                       value={passengers} 
//                       onChange={(e) => setPassengers(e.target.value)}
//                     >
//                       <option value="1">1 Passenger</option>
//                       <option value="2">2 Passengers</option>
//                       <option value="3">3 Passengers</option>
//                       <option value="4">4 Passengers</option>
//                       <option value="5+">5+ Passengers</option>
//                     </select>
//                     <i className="fas fa-chevron-down field-icon"></i>
//                   </div>
//                 </div>
//               </>
//             )}

//             <button type="submit" className="search-button">
//               SEARCH
//             </button>
//           </form>
//         </div>

//         {/* Results Section - Keep your existing structure */}
//         {showResults && results && activeTab === 'tours' && (
//           <div className="input-section-results-container visible">
//             <div className="input-section-row">
//               <div className="input-section-hotels-col">
//                 <HotelsSection hotels={results.hotels} />
//               </div>
//               <div className="input-section-weather-col">
//                 <WeatherSection weather={weather || results.weather} />
//               </div>
//             </div>
//             <div className="input-section-results-grid">
//               <div className="input-section-grid-item">
//                 <TouristSpotsSection spots={results.spots} />
//               </div>
//               <div className="input-section-grid-item">
//                 <ExploreParisSection explore={results.explore} />
//               </div>
//               <div className="input-section-grid-item input-section-full-width">
//                 <FoodSection food={results.food} dishes={results.dishes} />
//               </div>
//               <div className="input-section-grid-item input-section-full-width">
//                 <ItinerarySection itinerary={results.itinerary} />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default InputSection;











import React, { useState, useEffect } from 'react';
import './Input-Section.css';
import HotelsSection from './HotelsSection';
import WeatherSection from './WeatherSection';
import TouristSpotsSection from './TouristSpotsSection';
import ExploreParisSection from './ExploreParisSection';
import FoodSection from './FoodSection';
import ItinerarySection from './ItinerarySection';
import cityData from './citydata.jsx';

function InputSection() {
  const [activeTab, setActiveTab] = useState('tours');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [duration, setDuration] = useState('5');
  const [members, setMembers] = useState('2');
  const [budget, setBudget] = useState([2677, 9241]);
  
  // Transport specific states
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [transportType, setTransportType] = useState('flight');
  const [passengers, setPassengers] = useState('1');
  
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [weather, setWeather] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // Moved inside the function
  
  const apiKey = 'your_api_key';

  const getTravelData = (dest) => {
    const key = dest.trim().toLowerCase();
    return cityData[key] || {
      hotels: [{ name: 'No hotels found', price: 'N/A', rating: 0, tags: [] }],
      weather: { temp: 'N/A', desc: 'N/A', humidity: 'N/A', wind: 'N/A', forecast: [] },
      spots: [{ name: 'No spots found', time: 'N/A', desc: 'N/A' }],
      explore: { title: 'Explore Not Found', locations: 'No locations available' },
      food: [{ name: 'No restaurants found', type: 'N/A', desc: 'N/A', rating: 0, price: 'N/A' }],
      dishes: ['No dishes found'],
      itinerary: [{ time: 'N/A', activity: 'No itinerary', desc: 'N/A', duration: 'N/A' }],
    };
  };

  useEffect(() => {
    if (destination && activeTab === 'tours') {
      const travelData = getTravelData(destination);
      setResults(travelData);
      setShowResults(true);
      // Weather API call here
    } else {
      setShowResults(false);
    }
  }, [destination, activeTab]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (activeTab === 'tours' && destination) {
      const travelData = getTravelData(destination);
      setResults(travelData);
      setShowResults(true);
    }
    // Transport search logic here
  };

  // Get list of cities from cityData keys
  const cityOptions = Object.keys(cityData).map(city => city.charAt(0).toUpperCase() + city.slice(1));

  return (
    <div className="input-section" id="input-section">
      <div className="input-section-heading">
        <h1 className="input-section-heading-text">Where would you like to go?</h1>
        <h3 className="input-section-heading-text2">
          Enter your dream destination and let us create the perfect itinerary for you
        </h3>
      </div>

      <div className="main-input">
        <div className="search-container">
          {/* Tab Navigation */}
          <div className="tabs-header">
            <button 
              className={`tab-button ${activeTab === 'tours' ? 'active' : ''}`}
              onClick={() => setActiveTab('tours')}
            >
              <i className="fas fa-mountain"></i>
              Tours
            </button>
            <button 
              className={`tab-button ${activeTab === 'transport' ? 'active' : ''}`}
              onClick={() => setActiveTab('transport')}
            >
              <i className="fas fa-plane"></i>
              Transport
            </button>
          </div>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            {activeTab === 'tours' ? (
              <>
                {/* Tours Form */}
                <div className="form-row">
                  <div className="form-field input-field">
                    <label>Destination</label>
                    <input
                      type="text"
                      placeholder="Enter Your Destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      onFocus={() => setShowDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delay to allow click
                    />
                    <i className="fas fa-chevron-down field-icon"></i>
                    {showDropdown && (
                      <div className="city-dropdown">
                        {cityOptions.length > 0 ? (
                          cityOptions.map((city, index) => (
                            <div
                              key={index}
                              className="dropdown-item"
                              onClick={() => {
                                setDestination(city.toLowerCase());
                                setShowDropdown(false);
                              }}
                            >
                              {city}
                            </div>
                          ))
                        ) : (
                          <div className="dropdown-item no-results">No cities available</div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="form-field">
                    <label>Check In</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                    <i className="fas fa-calendar field-icon"></i>
                  </div>
                  <div className="form-field">
                    <label>Check Out</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                    <i className="fas fa-calendar field-icon"></i>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Duration</label>
                    <select 
                      value={duration} 
                      onChange={(e) => setDuration(e.target.value)}
                    >
                      <option value="1">1 Day</option>
                      <option value="3">3 Days</option>
                      <option value="5">5 Days</option>
                      <option value="7">1 Week</option>
                      <option value="14">2 Weeks</option>
                    </select>
                    {/* <i className="fas fa-chevron-down field-icon"></i> */}
                  </div>
                  <div className="form-field">
                    <label>Members</label>
                    <select 
                      value={members} 
                      onChange={(e) => setMembers(e.target.value)}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People</option>
                    </select>
                    {/* <i className="fas fa-chevron-down field-icon"></i> */}
                  </div>
                </div>

                <div className="budget-section">
                  <label>Budget: <span className="budget-range">₹{budget[0].toLocaleString()} - ₹{budget[1].toLocaleString()}</span></label>
                  <div className="budget-slider">
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      value={budget[0]}
                      onChange={(e) => setBudget([parseInt(e.target.value), budget[1]])}
                      className="slider"
                    />
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      value={budget[1]}
                      onChange={(e) => setBudget([budget[0], parseInt(e.target.value)])}
                      className="slider"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Transport Form */}
                <div className="transport-types">
                  <button 
                    type="button"
                    className={`transport-btn ${transportType === 'flight' ? 'active' : ''}`}
                    onClick={() => setTransportType('flight')}
                  >
                    <i className="fas fa-plane"></i>
                    Flights
                  </button>
                  <button 
                    type="button"
                    className={`transport-btn ${transportType === 'train' ? 'active' : ''}`}
                    onClick={() => setTransportType('train')}
                  >
                    <i className="fas fa-train"></i>
                    Trains
                  </button>
                  <button 
                    type="button"
                    className={`transport-btn ${transportType === 'bus' ? 'active' : ''}`}
                    onClick={() => setTransportType('bus')}
                  >
                    <i className="fas fa-bus"></i>
                    Buses
                  </button>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>From</label>
                    <input
                      type="text"
                      placeholder="Departure City"
                      value={fromCity}
                      onChange={(e) => setFromCity(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>To</label>
                    <input
                      type="text"
                      placeholder="Destination City"
                      value={toCity}
                      onChange={(e) => setToCity(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>Departure</label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                    />
                    <i className="fas fa-calendar field-icon"></i>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label>Return (Optional)</label>
                    <input
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                    <i className="fas fa-calendar field-icon"></i>
                  </div>
                  <div className="form-field">
                    <label>Passengers</label>
                    <select 
                      value={passengers} 
                      onChange={(e) => setPassengers(e.target.value)}
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5+">5+ Passengers</option>
                    </select>
                    <i className="fas fa-chevron-down field-icon"></i>
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="search-button">
              SEARCH
            </button>
          </form>
        </div>

        {/* Results Section - Keep your existing structure */}
        {showResults && results && activeTab === 'tours' && (
          <div className="input-section-results-container visible">
            <div className="input-section-row">
              <div className="input-section-hotels-col">
                <HotelsSection hotels={results.hotels} />
              </div>
              <div className="input-section-weather-col">
                <WeatherSection weather={weather || results.weather} />
              </div>
            </div>
            <div className="input-section-results-grid">
              <div className="input-section-grid-item">
                <TouristSpotsSection spots={results.spots} />
              </div>
              <div className="input-section-grid-item">
                <ExploreParisSection explore={results.explore} />
              </div>
              <div className="input-section-grid-item input-section-full-width">
                <FoodSection food={results.food} dishes={results.dishes} />
              </div>
              <div className="input-section-grid-item input-section-full-width">
                <ItinerarySection itinerary={results.itinerary} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputSection;
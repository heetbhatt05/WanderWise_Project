import React, { useState } from 'react';
import './Input-Section.css';
import HotelsSection from './HotelsSection';
import WeatherSection from './WeatherSection';
import TouristSpotsSection from './TouristSpotsSection';
import ExploreParisSection from './ExploreParisSection';
import FoodSection from './FoodSection';
import ItinerarySection from './ItinerarySection';
import cityData from './citydata.jsx';

function InputSection() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (destination) {
      const travelData = getTravelData(destination);
      setResults(travelData);
      setShowResults(true);
    } else {
      setResults(getTravelData(''));
      setShowResults(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-section" id="input-section">
        <div className="input-section-heading">
          <h1 className="input-section-heading-text">Where would you like to go?</h1>
          <h3 className="input-section-heading-text2">
            Enter your dream destination and let us create the perfect itinerary for you
          </h3>
        </div>
        <div className="main-input">
          <div className="input">
            <div className="input-destination">
              <i className="fas fa-map-marker-alt"></i>
              <input
                type="text"
                id="location"
                placeholder="Enter destination city (e.g., Paris, Tokyo)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="input-destination">
              <i className="fas fa-calendar-alt"></i>
              <input
                type="text"
                id="date"
                placeholder="Travel dates (e.g., 2025-06-25)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button className="input-section-btn1" type="submit">
              Make My Plan
            </button>
          </div>
          {showResults && results && (
            // <div className={`input-section-results-container ${showResults ? 'visible' : ''}`}>
            //   <div className="input-section-results-grid">
            //     <div className="input-section-grid-item">
            //       <HotelsSection hotels={results.hotels} />
            //     </div>
            //     <div className="input-section-grid-item">
            //       <WeatherSection weather={results.weather} />
            //     </div>
            <div className="input-section-results-container visible">
              <div className="input-section-row">
                <div className="input-section-hotels-col">
                  <HotelsSection hotels={results.hotels} />
                </div>
                <div className="input-section-weather-col">
                  <WeatherSection weather={results.weather} />
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
    </form>
  );
}

export default InputSection;
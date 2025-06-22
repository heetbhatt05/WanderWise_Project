import React, { useState } from 'react';
import './Input-Section.css';
import HotelsSection from './HotelsSection';
import WeatherSection from './WeatherSection';
import TouristSpotsSection from './TouristSpotsSection';
import ExploreParisSection from './ExploreParisSection';
import FoodSection from './FoodSection';
import ItinerarySection from './ItinerarySection';

function InputSection() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);

  const getTravelData = (dest) => {
    const data = {
      'paris': {
        hotels: [
          { name: 'Grand Paris Palace', price: '$120/night', rating: 4.8, tags: ['Free WiFi', 'Pool', 'Spa', 'Restaurant'] },
          { name: 'Paris Boutique Hotel', price: '$85/night', rating: 4.6, tags: ['Free Breakfast', 'Gym', 'Bar', 'City View'] },
          { name: 'Heritage Paris Inn', price: '$65/night', rating: 4.4, tags: ['Free WiFi', 'Garden', 'Restaurant', 'Parking'] },
        ],
        weather: { temp: '24°C', desc: 'Partly Cloudy', humidity: '65%', wind: '12 km/h', forecast: ['Sunny 28° 18°', 'Cloudy 26° 19°', 'Partly Cloudy 25° 17°', 'Sunny 27° 20°'] },
        spots: [
          { name: 'Paris Historic Center', time: '2–3 hours', desc: 'Explore the rich history and beautiful architecture.' },
          { name: 'Paris Cultural Museum', time: '1–2 hours', desc: 'Discover local art, culture, and traditions.' },
          { name: 'Paris Garden Paradise', time: '1–2 hours', desc: 'A beautiful botanical garden for peaceful walks.' },
          { name: 'Paris Viewpoint', time: '1 hour', desc: 'Stunning panoramic views of the city.' },
        ],
        explore: { title: 'Explore Paris', locations: 'Explore Paris locations' },
        food: [
          { name: 'Paris Spice Kitchen', type: 'Local Cuisine', desc: 'Traditional regional dishes', rating: 4.7, price: '$$' },
          { name: 'Royal Palace Restaurant', type: 'Fine Dining', desc: 'Gourmet local fusion', rating: 4.9, price: '$$$' },
          { name: 'Street Food Paradise', type: 'Street Food', desc: 'Authentic street snacks', rating: 4.5, price: '$' },
        ],
        dishes: ['Paris Special Curry', 'Traditional Sweet Delicacy', 'Famous Local Bread', 'Regional Specialty Drink'],
        itinerary: [
          { time: '9:00 AM', activity: 'Start at Paris Historic Center', desc: 'Begin exploring the beautiful historic architecture', duration: '2 hours' },
          { time: '11:30 AM', activity: 'Coffee Break at Local Café', desc: 'Try traditional coffee and local pastries', duration: '30 minutes' },
          { time: '12:00 PM', activity: 'Visit Cultural Museum', desc: 'Immerse yourself in local history and art', duration: '2 hours' },
          { time: '2:30 PM', activity: 'Lunch at Traditional Restaurant', desc: 'Enjoy authentic local cuisine', duration: '1.5 hours' },
          { time: '4:00 PM', activity: 'Explore Garden Paradise', desc: 'Peaceful walk through botanical gardens', duration: '1.5 hours' },
          { time: '6:00 PM', activity: 'Sunset at City Viewpoint', desc: 'Watch the sunset with panoramic views', duration: '1 hour' },
          { time: '8:00 PM', activity: 'Dinner & Local Entertainment', desc: 'End with great food and cultural shows', duration: '2 hours' },
        ],
      },
      'tokyo': {
        hotels: [
          { name: 'Aman Tokyo', price: '$250/night', rating: 4.9, tags: ['Free WiFi', 'Spa', 'Skyline View'] },
          { name: 'Park Hyatt Tokyo', price: '$200/night', rating: 4.7, tags: ['Free Breakfast', 'Gym', 'City View'] },
        ],
        weather: { temp: '20°C', desc: 'Sunny', humidity: '55%', wind: '8 km/h', forecast: ['Sunny 22° 15°', 'Partly Cloudy 21° 14°', 'Sunny 23° 16°', 'Cloudy 20° 13°'] },
        spots: [
          { name: 'Tokyo Tower', time: '1.5–2 hours', desc: 'Iconic tower with stunning city views.' },
          { name: 'Shibuya Crossing', time: '1 hour', desc: 'Experience the world’s busiest pedestrian crossing.' },
        ],
        explore: { title: 'Explore Tokyo', locations: 'Explore Tokyo locations' },
        food: [
          { name: 'Sushi Saito', type: 'Sushi', desc: 'World-class sushi experience', rating: 4.8, price: '$$$$' },
          { name: 'Ichiran Ramen', type: 'Ramen', desc: 'Authentic tonkotsu ramen', rating: 4.6, price: '$' },
        ],
        dishes: ['Sushi', 'Ramen', 'Tempura', 'Matcha Dessert'],
        itinerary: [
          { time: '8:00 AM', activity: 'Visit Tokyo Tower', desc: 'Start with iconic city views', duration: '1.5 hours' },
          { time: '10:00 AM', activity: 'Explore Shibuya Crossing', desc: 'Witness the bustling intersection', duration: '1 hour' },
          { time: '11:30 AM', activity: 'Lunch at Sushi Saito', desc: 'Enjoy world-class sushi', duration: '1 hour' },
          { time: '1:00 PM', activity: 'Shop at Akihabara', desc: 'Dive into electronics and anime culture', duration: '2 hours' },
          { time: '4:00 PM', activity: 'Visit Meiji Shrine', desc: 'Peaceful traditional shrine', duration: '1.5 hours' },
          { time: '6:30 PM', activity: 'Dinner at Ichiran Ramen', desc: 'Savor authentic ramen', duration: '1 hour' },
        ],
      },
    };
    const lowerCaseDest = dest.toLowerCase();
    return data[lowerCaseDest] || {
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
      setResults({
        hotels: [{ name: 'Please enter a destination!', price: 'N/A', rating: 0, tags: [] }],
        weather: { temp: 'N/A', desc: 'N/A', humidity: 'N/A', wind: 'N/A', forecast: [] },
        spots: [{ name: 'No spots found', time: 'N/A', desc: 'N/A' }],
        explore: { title: 'Explore Not Found', locations: 'No locations available' },
        food: [{ name: 'No restaurants found', type: 'N/A', desc: 'N/A', rating: 0, price: 'N/A' }],
        dishes: ['No dishes found'],
        itinerary: [{ time: 'N/A', activity: 'No itinerary', desc: 'N/A', duration: 'N/A' }],
      });
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
            <div className={`results-container ${showResults ? 'visible' : ''}`}>
              <div className="results-grid">
                <div className="grid-item">
                  <HotelsSection hotels={results.hotels} />
                </div>
                <div className="grid-item">
                  <WeatherSection weather={results.weather} />
                </div>
                <div className="grid-item">
                  <TouristSpotsSection spots={results.spots} />
                </div>
                <div className="grid-item">
                  <ExploreParisSection explore={results.explore} />
                </div>
                <div className="grid-item full-width">
                  <FoodSection food={results.food} dishes={results.dishes} />
                </div>
                <div className="grid-item full-width">
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
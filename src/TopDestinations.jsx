import React from 'react';
import './TopDestinations.css';

const TopDestinations = () => {
  const destinations = [
    { name: 'China', tours: 20, places: 15, image: 'china.jpg' },
    { name: 'Venezuela', tours: 12, places: 9, image: 'venezuela.jpg' },
    { name: 'Brazil', tours: 25, places: 10, image: 'brazil.jpg' },
    { name: 'Australia', tours: 18, places: 9, image: 'australia.jpg' },
    { name: 'Netherlands', tours: 14, places: 12, image: 'netherlands.jpg' },
    { name: 'Turkey', tours: 14, places: 6, image: 'turkey.jpg' },
  ];

  return (
    <section className="top-destinations">
      <div className="container">
        <h2>Top Destination</h2>
        <p>Where do you wanna go? How much you wanna explore?</p>
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
            <div className="destination-card tall">
              <img src={destinations[2].image} alt={destinations[2].name} className="destination-image" />
              <div className="destination-info">
                <h3>{destinations[2].name}</h3>
                <p>{destinations[2].tours} Tours | {destinations[2].places} Places</p>
              </div>
            </div>
            <div className="destination-row">
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
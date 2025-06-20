// import './Input-Section.css';

// export default function InputSection() {
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
//             <input type="text" id="location" placeholder="Enter destination city (e.g., Vadodara, Paris, Tokyo)" />
//           </div>
//           <div className="input-destination">
//             <i className="fas fa-calendar-alt"></i>
//             <input type="text" id="date" placeholder="Travel dates (optional)" />
//           </div>
//           <button className="input-section-btn1">Make My Plan</button>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from 'react';
import './Input-Section.css';

export default function InputSection() {
  // State to hold user input and results
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState(null);

  // Simulated data based on destination
  const getTravelData = (dest) => {
    const data = {
      'Paris': {
        hotels: ['Hotel de Crillon', 'Le Bristol Paris'],
        places: ['Eiffel Tower', 'Louvre Museum'],
        food: ['Croissants at Café de Flore', 'Escargot at Le Jules Verne'],
        itinerary: [
          { time: '9:00 AM', activity: 'Visit Eiffel Tower' },
          { time: '12:00 PM', activity: 'Lunch at Café de Flore' },
          { time: '2:00 PM', activity: 'Explore Louvre Museum' },
          { time: '6:00 PM', activity: 'Dinner at Le Jules Verne' },
        ],
      },
      'Tokyo': {
        hotels: ['Aman Tokyo', 'Park Hyatt Tokyo'],
        places: ['Tokyo Tower', 'Shibuya Crossing'],
        food: ['Sushi at Sushi Saito', 'Ramen at Ichiran'],
        itinerary: [
          { time: '8:00 AM', activity: 'Visit Tokyo Tower' },
          { time: '11:00 AM', activity: 'Lunch at Sushi Saito' },
          { time: '1:00 PM', activity: 'Explore Shibuya Crossing' },
          { time: '5:00 PM', activity: 'Dinner at Ichiran' },
        ],
      },
      // Add more destinations as needed
    };
    return data[dest] || {
      hotels: ['No hotels found'],
      places: ['No places found'],
      food: ['No food recommendations'],
      itinerary: [{ time: 'N/A', activity: 'No itinerary available' }],
    };
  };

  // Handle button click
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page refresh
    if (destination) {
      const travelData = getTravelData(destination);
      setResults(travelData); // Show the results
    } else {
      setResults({
        hotels: ['Please enter a destination!'],
        places: [],
        food: [],
        itinerary: [],
      });
    }
  };

  return (
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
          <button className="input-section-btn1" onClick={handleSubmit}>
            Make My Plan
          </button>
        </div>
        {results && (
          <div className="travel-results" style={{ marginTop: '20px', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ color: '#1a2a44', textAlign: 'center' }}>Your Travel Plan for {destination} on {date || 'Your Date'}</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', width: '22%' }}>
                <h3 style={{ color: '#ffd900' }}>Hotels</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {results.hotels.map((hotel, index) => (
                    <li key={index} style={{ color: '#333', margin: '5px 0' }}>{hotel}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', width: '22%' }}>
                <h3 style={{ color: '#ffd900' }}>Places to Visit</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {results.places.map((place, index) => (
                    <li key={index} style={{ color: '#333', margin: '5px 0' }}>{place}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', width: '22%' }}>
                <h3 style={{ color: '#ffd900' }}>Local Food</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {results.food.map((food, index) => (
                    <li key={index} style={{ color: '#333', margin: '5px 0' }}>{food}</li>
                  ))}
                </ul>
              </div>
              <div style={{ background: '#e9ecef', padding: '15px', borderRadius: '8px', width: '22%' }}>
                <h3 style={{ color: '#ffd900' }}>Full-Day Itinerary</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {results.itinerary.map((item, index) => (
                    <li key={index} style={{ color: '#333', margin: '5px 0' }}>
                      <strong>{item.time}</strong>: {item.activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
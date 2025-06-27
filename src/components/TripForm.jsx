import React, { useState } from 'react';
import './TripForm.css';

function TripForm({ onClose }) {
  const [tripData, setTripData] = useState({
    name: '',
    email: '',
    destination: '',
    duration: '',
    budget: '',
    preferences: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trip Data Submitted:', tripData);
    // Here you would typically send data to your backend
    alert('Your custom plan request has been submitted! We\'ll contact you soon.');
    onClose();
  };

  return (
    <div className="trip-form">
      <button className="close-button" onClick={onClose}>×</button>
      <h2>Create Your Custom Trip Plan</h2>
      <p>Tell us about your dream vacation and we'll create a personalized itinerary</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={tripData.name}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={tripData.email}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Destination</label>
          <input 
            type="text" 
            name="destination" 
            value={tripData.destination}
            onChange={handleChange}
            placeholder="e.g., Vrindavan"
            required 
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Duration (days)</label>
            <input 
              type="number" 
              name="duration" 
              value={tripData.duration}
              onChange={handleChange}
              min="1"
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Budget (₹)</label>
            <input 
              type="number" 
              name="budget" 
              value={tripData.budget}
              onChange={handleChange}
              min="1"
              required 
            />
          </div>
        </div>
        
        <div className="form-group">
          <label>Travel Preferences</label>
          <textarea 
            name="preferences" 
            value={tripData.preferences}
            onChange={handleChange}
            placeholder="e.g., Cultural experiences, adventure activities, luxury stays..."
            rows="3"
          />
        </div>
        
        <div className="form-group">
          <label>Special Requests</label>
          <textarea 
            name="specialRequests" 
            value={tripData.specialRequests}
            onChange={handleChange}
            placeholder="Any specific requirements or interests..."
            rows="3"
          />
        </div>
        
        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </div>
  );
}

export default TripForm;

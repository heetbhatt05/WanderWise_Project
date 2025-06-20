import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <p>
            <span role="img" aria-label="location">📍</span> WanderWise
          </p>
          <p>Your intelligent travel companion for discovering amazing destinations and creating unforgettable memories.</p>
        </div>
        <div className="footer-column">
          <h3>Destinations</h3>
          <p>Popular Cities</p>
          <p>Hidden Gems</p>
          <p>Beach Destinations</p>
          <p>Mountain Retreats</p>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 WanderWise. All rights reserved. Made with ❤️ for travelers.</p>
      </div>
    </footer>
  );
};

export default Footer;
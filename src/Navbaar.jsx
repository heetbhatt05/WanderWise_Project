import React from 'react';
import './Navbaar.css';
import WanderWiseLogo from './assets/WanderWise_Logo.png';
import NavbaarButton from './NavbaarButton.jsx';

const Navbaar = () => {
    return (
        <div className="Navbar-main">
            <img src={WanderWiseLogo} alt="WanderWise-Logo" className="WanderWise-Logo" />
            <div className="main-links">
                <a href="#hero-section" className="Navbar-link" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    Home
                </a>
                <a href="#top-destinations" className="Navbar-link" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('top-destinations')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    Destinations
                </a>
                <a href="#reviews-section" className="Navbar-link" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    Reviews
                </a>
                <a href="#footer" className="Navbar-link" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    About Us
                </a>

                <NavbaarButton />
            </div>
        </div>
    );
};

export default Navbaar;
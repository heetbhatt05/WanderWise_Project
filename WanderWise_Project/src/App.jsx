import { useState } from 'react';
import './App.css';
import Navbaar from './Navbaar.jsx';
import HeroSection from './Hero-Section.jsx';
import HeroImg from './Hero-Img.jsx';
import HeroContent from './Hero-Content.jsx';
import InputSection from './Input-Section.jsx';
import TopDestinations from './TopDestinations.jsx';
import ReviewsSection from './ReviewsSection.jsx';
import Footer from './Footer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbaar />
        <HeroSection>
          <HeroImg />
          <HeroContent />
        </HeroSection>
        <InputSection />
        <TopDestinations />
        <ReviewsSection />
        <Footer/>
      </div>
    </>
  );
}

export default App;
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbaar from "./Navbaar.jsx";
import HeroSection from "./Hero-Section.jsx";
import HeroImg from './Hero-Img.jsx';
import HeroContent from "./Hero-Content.jsx";
import InputSection from "./Input-Section.jsx";
import ReviewsSection from './ReviewsSection.jsx';
import TopDestinations from './TopDestinations.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
          <Navbaar />
          <HeroContent />
          <HeroImg />
          <HeroSection />
          <InputSection />
          <TopDestinations/>
          <ReviewsSection/>
        </div>
      </div>
    </>
  )
}

export default App

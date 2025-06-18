import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbaar from "./Navbaar.jsx";
import HeroSection from "./Hero-Section.jsx";
import HeroImg from './Hero-Img.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>
        <Navbaar />
          <HeroImg />
          <HeroSection />
        </div>
      </div>
    </>
  )
}

export default App

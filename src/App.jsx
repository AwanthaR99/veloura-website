import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'; // Import useState
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';
import MagicWand from './components/MagicWand'; // 1. Import the new component

function App() {
  // 2. Create the state for our Lumos spell
  const [isLumos, setIsLumos] = useState(false);

  // 3. Create a function to toggle the state
  const toggleLumos = () => {
    setIsLumos(prev => !prev);
  };

  return (
    // 4. Conditionally add the 'lumos-active' class to the main div
    <div className={`bg-black ${isLumos ? 'lumos-active' : ''}`}>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      {/* 5. Add the wand component and pass the state and function to it */}
      <MagicWand isLumos={isLumos} toggleLumos={toggleLumos} />
    </div>
  )
}

export default App;
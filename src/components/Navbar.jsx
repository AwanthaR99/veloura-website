import React, { useRef } from 'react'; // 1. Import useRef
import { Link } from 'react-router-dom';
import VelouraLogo from '../assets/images/logo.png';
import useMagneticEffect from '../hooks/useMagneticEffect'; // 2. Import our new custom hook

function Navbar() {
  const magneticButtonRef = useRef(null); // 3. Create a ref for the button
  useMagneticEffect(magneticButtonRef);   // 4. Use the hook on the ref

  return (
    <nav className="bg-transparent text-white p-6 flex justify-between items-center absolute w-full z-50">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src={VelouraLogo} alt="Veloura Logo" className="h-20" />
        </Link>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
        <Link to="/menu" className="hover:text-yellow-400 transition-colors duration-300">Menu</Link>
        <Link to="/about" className="hover:text-yellow-400 transition-colors duration-300">About</Link>
        <Link to="/gallery" className="hover:text-yellow-400 transition-colors duration-300">Gallery</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</Link>
      </div>

      {/* Reservation Button */}
      <div>
        {/* 5. Attach the ref to the button's Link component */}
        <Link
          ref={magneticButtonRef}
          to="/reservations" 
          className="border-2 border-yellow-400 text-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300 font-bold inline-block"
        >
          Book a Table
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
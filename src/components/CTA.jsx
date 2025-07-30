import React from 'react';
// You can choose a new dark, moody background image for this section
import CtaBackground from '../assets/images/cta-background.jpg'; 

function CTA() {
  return (
    <div
      className="py-20 text-white text-center"
      style={{
        backgroundImage: `url(${CtaBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Continuing our parallax theme
      }}
    >
      {/* Dark Overlay */}
      <div className="bg-black bg-opacity-70 py-20">
        <h2 className="text-5xl md:text-6xl font-serif mb-6">Experience the Magic Tonight</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Your table at Veloura awaits. Let us conjure up an unforgettable evening for you.</p>
        <a
          href="/reservations" // This will link to the reservations page later
          className="bg-yellow-400 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 inline-block"
        >
          Book Your Table Now
        </a>
      </div>
    </div>
  );
}

export default CTA;
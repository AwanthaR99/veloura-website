import React from 'react';
// You can find a new background image for this page header
import ReservationImage from '../assets/images/reservation-bg.jpg'; 

function Reservations() {
  return (
    <div className="bg-black text-white">
      {/* Page Header */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <img 
          src={ReservationImage} 
          alt="An elegant table setting at Veloura" 
          className="absolute w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Book Your Table
          </h1>
        </div>
      </div>

      {/* Reservation Form Section */}
      <div className="py-24 px-10">
        <div className="container mx-auto max-w-3xl">
          <p className="text-center text-gray-300 text-lg mb-12">
            Reserve your table to experience the magic of Veloura. For parties larger than 8, please contact us directly.
          </p>
          
          {/* VERY IMPORTANT: Update the action URL with your own Formspree URL */}
          <form action="https://formspree.io/f/mnnzvyyk" method="POST" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Full Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-yellow-400" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label htmlFor="guests" className="block text-lg font-semibold mb-2">Guests</label>
                <input type="number" id="guests" name="guests" min="1" max="8" required className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="date" className="block text-lg font-semibold mb-2">Date</label>
                <input type="date" id="date" name="date" required className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="time" className="block text-lg font-semibold mb-2">Time</label>
                <input type="time" id="time" name="time" required className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
            </div>
            
            <div className="text-center pt-6">
              <button type="submit" className="bg-yellow-400 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                Confirm Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
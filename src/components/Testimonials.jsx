import React from 'react';
// 1. We import the specific icon we want from the react-icons library
import { FaQuoteLeft } from 'react-icons/fa';

// We create a list of testimonials, just like we did for the dishes
const testimonials = [
  {
    quote: "An absolutely magical experience. The ambiance, the food, the service... everything was flawless. A true gem in Monaragala.",
    author: "Kavindya Perera"
  },
  {
    quote: "From the moment we walked in, it felt like stepping into another world. The 'Celestial Sphere' dessert is a must-try!",
    author: "Rohan Jayasuriya"
  },
  {
    quote: "Finally, a true fine-dining restaurant that exceeds all expectations. Veloura has set a new standard. We will be back!",
    author: "Dr. Anusha De Silva"
  }
];

function Testimonials() {
  return (
    <div className="bg-black text-white py-24 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-serif mb-16 text-yellow-400">Words of Enchantment</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 transform hover:-translate-y-2 transition-transform duration-300">
              <FaQuoteLeft className="text-yellow-400 text-4xl mb-6 mx-auto" />
              <p className="text-gray-300 italic text-lg mb-6">"{testimonial.quote}"</p>
              <p className="font-bold text-xl text-white tracking-wider">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
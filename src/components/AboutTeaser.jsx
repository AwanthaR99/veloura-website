import React from 'react';
// Choose a suitable image and place it in the assets/images folder
import TeaserImage from '../assets/images/about-teaser-image.jpg'; 

function AboutTeaser() {
  return (
    <div className="bg-black text-white py-24 px-10">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <div>
          <img src={TeaserImage} alt="A glimpse of Veloura's magical interior" className="rounded-lg shadow-2xl shadow-yellow-400/10" />
        </div>

        {/* Text Column */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-serif mb-6 text-yellow-400">Our Story</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Veloura is more than a restaurant; it is a destination born from a vision to bring an enchanted dining experience to the heart of Monaragala. Every dish is a chapter, every ingredient a magical word.
          </p>
          <a href="/about" className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300 font-bold text-lg">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutTeaser;
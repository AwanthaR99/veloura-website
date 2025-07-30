import React from 'react';
// (Keep all your existing imports the same)
import { FaMagic, FaConciergeBell, FaHandSparkles } from 'react-icons/fa';
import AboutHeroImage from '../assets/images/about-hero.jpg'; 
import VisionImage from '../assets/images/about-vision.jpg';
import ChefImage from '../assets/images/chef.jpg'; // Import the new chef image

function About() {
  // (The animation code remains the same)

  return (
    <div className="bg-black text-white">
      {/* ... (Section 1: Page Header and Section 2: The Vision remain the same) ... */}
      <div className="relative h-[50vh] flex items-center justify-center">...</div>
      <div className="py-24 px-10">...</div>

      {/* ... (Section 3: The Philosophy remains the same) ... */}
      <div className="bg-gray-900/50 py-24 px-10">...</div>

      {/* Section 4: Meet the Chef (NEW SECTION) */}
      <div className="py-24 px-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="text-left md:order-2">
            <h2 className="text-5xl font-serif mb-6 text-yellow-400">Meet the Alchemist</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Our Head Chef, known only as 'The Alchemist', is the heart and soul behind our culinary magic. With decades of experience in the world's most renowned kitchens, he brings a unique blend of classic techniques and daring innovation to Veloura.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              His philosophy is simple: treat every ingredient with respect and transform it into an unforgettable experience. He believes that a great meal is not just sustenance, but a story told on a plate.
            </p>
          </div>
          <div className="md:order-1">
            <img src={ChefImage} alt="The Head Chef of Veloura" className="rounded-lg shadow-2xl shadow-yellow-400/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
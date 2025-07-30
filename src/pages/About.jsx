import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaMagic, FaConciergeBell, FaHandSparkles } from 'react-icons/fa';

import AboutHeroImage from '../assets/images/about-hero.jpg'; 
import VisionImage from '../assets/images/about-vision.jpg';   

// We no longer need to register ScrollTrigger for this page
// gsap.registerPlugin(ScrollTrigger);

function About() {
  const [titleText] = useTypewriter({ words: ['Our Story'], loop: 1, typeSpeed: 100 });
  
  // For the Entrance Animations on page load
  const visionSection = useRef(null);
  const philosophySection = useRef(null);

  useLayoutEffect(() => {
    // We don't need ScrollTrigger here. We will animate on page load.
    const ctx = gsap.context(() => {
      // A timeline to control the sequence of animations
      const tl = gsap.timeline();
      
      // Animate the vision section first
      tl.from(visionSection.current.children, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5 // Start after the typewriter has had a moment
      });

      // Then animate the philosophy section
      tl.from(philosophySection.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      }, "-=0.5"); // The "-=0.5" makes this animation start 0.5s before the previous one ends, creating a smooth overlap
    });
    
    return () => ctx.revert(); // Cleanup GSAP animations
  }, []); // Empty array means this effect runs only once when the page loads

  return (
    <div className="bg-black text-white">
      {/* Section 1: Page Header with Typewriter */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <img src={AboutHeroImage} alt="Mysterious interior of Veloura" className="absolute w-full h-full object-cover opacity-30"/>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            <span>{titleText}</span>
            <Cursor cursorStyle='_' />
          </h1>
        </div>
      </div>

      {/* Section 2: The Vision with Entrance Animation */}
      <div className="py-24 px-10">
        <div ref={visionSection} className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* This whole section will now animate on page load */}
          <div>
            <img src={VisionImage} alt="The heart of Veloura's design" className="rounded-lg shadow-2xl shadow-yellow-400/10" />
          </div>
          <div className="text-left">
            <h2 className="text-5xl font-serif mb-6 text-yellow-400">
              The Vision
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Veloura was born from a singular, audacious dream: to introduce an era of unprecedented luxury...
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our vision was to create more than a restaurant—a sanctuary of taste...
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: The Philosophy with Entrance Animation and Hover Effects */}
      <div ref={philosophySection} className="bg-gray-900/50 py-24 px-10">
        <div className="container mx-auto text-center max-w-4xl">
           <h2 className="text-5xl font-serif mb-6 text-yellow-400">Our Philosophy</h2>
          {/* ... rest of the philosophy section content is the same ... */}
          <p className="text-lg text-gray-300 mb-16 leading-relaxed">
            At Veloura, "Enchanted Luxury" is our guiding star...
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <FaMagic className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Magical Ambiance</h3>
              <p className="text-gray-400">An atmosphere designed to transport you to another world.</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <FaConciergeBell className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Artisanal Cuisine</h3>
              <p className="text-gray-400">Every dish is a masterpiece, crafted with passion and precision.</p>
            </div>
            <div className="text-center transition-transform duration-300 hover:scale-110">
              <FaHandSparkles className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Impeccable Service</h3>
              <p className="text-gray-400">A dedicated team to make your experience unforgettable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
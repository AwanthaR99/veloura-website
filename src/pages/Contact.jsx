import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaMagic, FaConciergeBell, FaHandSparkles } from 'react-icons/fa';

import AboutHeroImage from '../assets/images/about-hero.jpg'; 
import VisionImage from '../assets/images/about-vision.jpg';   
import ChefImage from '../assets/images/chef.jpg';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const [titleText] = useTypewriter({ words: ['Our Story'], loop: 1, typeSpeed: 100 });

  const visionSection = useRef(null);
  const philosophySection = useRef(null);
  const chefSection = useRef(null);

  useLayoutEffect(() => {
    const sections = [visionSection.current, philosophySection.current, chefSection.current];

    sections.forEach(section => {
      if(section) {
        gsap.from(section.children, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          }
        });
      }
    });

  }, []);

  return (
    <div className="bg-black text-white">
      {/* Section 1: Page Header */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <img src={AboutHeroImage} alt="Mysterious interior of Veloura" className="absolute w-full h-full object-cover opacity-30"/>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-serif text-white tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            <span>{titleText}</span>
            <Cursor cursorStyle='_' />
          </h1>
        </div>
      </div>

      {/* Section 2: The Vision */}
      <div className="py-24 px-10">
        <div ref={visionSection} className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src={VisionImage} alt="The heart of Veloura's design" className="rounded-lg shadow-2xl shadow-yellow-400/10" />
          </div>
          <div className="text-left">
            <h2 className="text-5xl font-serif mb-6 text-yellow-400">The Vision</h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Veloura was born from a singular, audacious dream: to introduce an era of unprecedented luxury and culinary artistry to a region rich in heritage. We saw Monaragala not just as a location, but as a canvas waiting for a masterpiece. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our vision was to create more than a restaurant—a sanctuary of taste, an escape into a world where every detail is enchanted. The name itself, derived from 'velvet', speaks of our commitment to smooth, sophisticated, and deeply satisfying experiences that touch all the senses.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: The Philosophy */}
      <div ref={philosophySection} className="bg-gray-900/50 py-24 px-10">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-serif mb-6 text-yellow-400">Our Philosophy</h2>
          <p className="text-lg text-gray-300 mb-16 leading-relaxed">
            At Veloura, "Enchanted Luxury" is our guiding star. It is the belief that dining should be an immersive experience. It's in the whisper of spices, the curated ambiance that feels both timeless and magical, and the meticulous service that anticipates your every need. We don't just serve meals; we craft memories.
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

       {/* Section 4: Meet the Chef */}
      <div className="py-24 px-10">
        <div ref={chefSection} className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
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
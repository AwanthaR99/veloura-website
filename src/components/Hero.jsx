import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import HeroImage from '../assets/images/hero-background.jpg';
import SmokeEffect from './SmokeEffect';      // 1. Import the new SmokeEffect component
import './SmokeEffect.css';                  //    and its CSS file

function Hero() {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const text = "Veloura";

  useLayoutEffect(() => {
    const titleLetters = titleRef.current.children;
    const contentElements = contentRef.current.children;
    gsap.set(titleLetters, { opacity: 0, y: 50 });
    gsap.set(contentElements, { opacity: 0 });
    const tl = gsap.timeline();
    tl.to(titleLetters, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.5
      })
      .to(contentElements, {
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      }, "-=0.5");
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-white overflow-hidden" // Added overflow-hidden
    >
      <img 
        src={HeroImage} 
        alt="Veloura Restaurant" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* 2. Place the SmokeEffect component here, behind the overlay */}
      <SmokeEffect />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center p-5"> {/* Increased z-index for content */}
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-4"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          {text.split("").map((letter, index) => (
            <span key={index} className="inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
          ))}
        </h1>
        <div ref={contentRef}>
          <p className="text-xl md:text-2xl mb-8"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
          >
            An Enchanted Dining Experience
          </p>
          <a href="#menu" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors duration-300">
            Explore The Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
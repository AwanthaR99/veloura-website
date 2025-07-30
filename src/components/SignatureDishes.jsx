import React from 'react';
// 1. We import the necessary tools for animation
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

// Use the actual filenames of your best dish photos.
import Dish1 from '../assets/images/signature-dish-1.jpg';
import Dish2 from '../assets/images/signature-dish-2.jpg';
import Dish3 from '../assets/images/signature-dish-3.jpg';

const dishes = [
  {
    img: Dish1,
    title: "Dragon's Breath Steak",
    description: 'A fiery, perfectly grilled steak that embodies the spirit of The Hearth.'
  },
  {
    img: Dish2,
    title: 'Celestial Sphere',
    description: 'An artistic dessert from The Artisan’s Plate that offers a heavenly surprise.'
  },
  {
    img: Dish3,
    title: "Siren's Call",
    description: 'An elegant seafood creation from The Elixir, as enchanting as its name.'
  }
];

function SignatureDishes() {
  // 2. We create references to "grab" our HTML elements
  const container = useRef(null);
  const titleRef = useRef(null);

  // 3. This is where the animation magic happens
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the main title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%", // Animate when the top of the title is 85% down the screen
        },
        opacity: 0, // Start from invisible
        y: 50,      // Start 50px below its final position
        duration: 1
      });

      // Animate each dish card with a stagger effect
      gsap.from(".dish-card", {
        scrollTrigger: {
          trigger: ".dish-card",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3 // This makes them appear one after the other, 0.3s apart
      });

    }, container); // Scope the animations to the container element

    return () => ctx.revert(); // This is a cleanup function, important for React
  }, []);

  return (
    <div className="bg-black text-white py-24 px-10" ref={container}>
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-serif mb-4 text-yellow-400" ref={titleRef}>Our Signature Creations</h2>
        <p className="text-lg text-gray-400 mb-16">A glimpse into the magic we forge in our kitchen.</p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            // 4. We add a "dish-card" class to each card to target them for animation
            <div key={index} className="dish-card bg-gray-900/50 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
              <img src={dish.img} alt={dish.title} className="w-full h-64 object-cover rounded-md mb-6" />
              <h3 className="text-2xl font-serif mb-3 text-yellow-400">{dish.title}</h3>
              <p className="text-gray-300">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignatureDishes;
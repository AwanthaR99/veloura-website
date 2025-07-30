import React from 'react';
import Hero from '../components/Hero';
import AboutTeaser from '../components/AboutTeaser';
import SignatureDishes from '../components/SignatureDishes';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <SignatureDishes />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;
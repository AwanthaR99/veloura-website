import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-black text-white pt-32 pb-20 px-4 md:px-10" ref={containerRef}>
      <div className="container mx-auto text-center">
        <h1 className="contact-item text-6xl font-serif mb-4 text-yellow-400">Get In Touch</h1>
        <p className="contact-item text-lg text-gray-400 mb-16 max-w-2xl mx-auto">We would love to hear from you. For reservations, please use our booking page.</p>

        <div className="text-left max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <div className="contact-item">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-yellow-400 text-2xl mr-4" />
                <h2 className="text-3xl font-semibold">Address</h2>
              </div>
              <p className="text-gray-300 ml-10">123 Magic Lane, Monaragala</p>
            </div>
            <div className="contact-item">
              <div className="flex items-center mb-2">
                <FaPhone className="text-yellow-400 text-2xl mr-4" />
                <h2 className="text-3xl font-semibold">Phone</h2>
              </div>
              <p className="text-gray-300 ml-10">+94 12 345 6789</p>
            </div>
            <div className="contact-item">
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-yellow-400 text-2xl mr-4" />
                <h2 className="text-3xl font-semibold">Email</h2>
              </div>
              <p className="text-gray-300 ml-10">contact@veloura.lk</p>
            </div>
            <div className="contact-item">
              <div className="flex items-center mb-2">
                <FaClock className="text-yellow-400 text-2xl mr-4" />
                <h2 className="text-3xl font-semibold">Opening Hours</h2>
              </div>
              <div className="text-gray-300 ml-10">
                <p>Monday - Friday: 6 PM - 11 PM</p>
                <p>Saturday - Sunday: 5 PM - 12 AM</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-item">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Your Name</label>
                <input type="text" id="name" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Your Email</label>
                <input type="email" id="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-yellow-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-2 px-4 focus:outline-none focus:border-yellow-400"></textarea>
              </div>
              <button type="submit" className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        {/* Map Section is not animated to avoid layout shifts */}
        <div className="mt-20">
           <h2 className="text-4xl font-serif text-yellow-400 mb-8">Find Us Here</h2>
           <div className="overflow-hidden rounded-lg border-2 border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63464.33232230419!2d81.31983354143419!3d6.88398818451892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae47a322f70355f%3A0x4bb6b34139e5352e!2sMonaragala!5e0!3m2!1sen!2slk!4v1722343997232!5m2!1sen!2slk"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
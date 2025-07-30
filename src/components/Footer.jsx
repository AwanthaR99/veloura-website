import React from 'react';
import { FaFacebookF, FaInstagram, FaTripadvisor, FaStarOfLife } from 'react-icons/fa'; // Changed FaRegStar to a more mystical one
import { motion } from 'framer-motion';
import DeathlyHallowsIcon from './icons/DeathlyHallowsIcon'; // Import our new custom icon

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        {/* About Section */}
        <div>
          <h3 className="text-3xl font-serif mb-4 text-white">Veloura</h3>
          <p className="text-sm">An Enchanted Dining Experience in the heart of Monaragala.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/menu" className="hover:text-yellow-400">Menu</a></li>
            <li className="mb-2"><a href="/reservations" className="hover:text-yellow-400">Reservations</a></li>
            <li className="mb-2"><a href="/gallery" className="hover:text-yellow-400">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
          <p>123 Magic Lane, Monaragala</p>
          <p>+94 12 345 6789</p>
          <p>contact@veloura.lk</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTripadvisor /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright and Easter Egg Section */}
      <div className="text-center mt-12 border-t border-gray-800 pt-8 flex justify-center items-center gap-2 text-sm">
        <p>&copy; 2025 Veloura. All Rights Reserved. Designed with</p>
        
        {/* The Easter Egg Component */}
        <motion.div
          className="relative w-5 h-5 cursor-pointer text-yellow-400"
          whileHover="hover"
          initial="initial"
          title="A secret..."
        >
          {/* Default Icon (Star) */}
          <motion.div
            className="absolute inset-0"
            variants={{ initial: { opacity: 1, rotate: 0 }, hover: { opacity: 0, rotate: 180 } }}
            transition={{ duration: 0.5 }}
          >
            <FaStarOfLife className="w-full h-full" />
          </motion.div>
          {/* Hover Icon (Deathly Hallows) */}
          <motion.div
            className="absolute inset-0"
            variants={{ initial: { opacity: 0, rotate: -180 }, hover: { opacity: 1, rotate: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <DeathlyHallowsIcon className="w-full h-full" />
          </motion.div>
        </motion.div>

        <p>magic.</p>
      </div>
    </footer>
  );
}

export default Footer;
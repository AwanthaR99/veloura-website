import React from 'react';
import { FaMagic } from 'react-icons/fa'; // We use an icon for the wand

// This component receives the current state (isLumos) and the function to change it (toggleLumos)
function MagicWand({ isLumos, toggleLumos }) {
  return (
    <button
      onClick={toggleLumos}
      className="fixed bottom-5 right-5 z-50 p-3 bg-gray-800 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
      title={isLumos ? "Nox (Turn off light)" : "Lumos (Turn on light)"}
    >
      <FaMagic className="text-2xl" />
    </button>
  );
}

export default MagicWand;
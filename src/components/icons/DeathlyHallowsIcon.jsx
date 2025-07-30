import React from 'react';

// A custom SVG component for the Deathly Hallows symbol
function DeathlyHallowsIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 110 110" // Adjusted viewBox for better stroke rendering
      fill="none"
      stroke="currentColor"
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="50" cy="50" r="45" />
      <path d="M50 5 L50 95" />
      <path d="M12 85 L50 15 L88 85 Z" /> 
    </svg>
  );
}

export default DeathlyHallowsIcon;
import React from 'react';
import './SmokeEffect.css'; // Importing the CSS we just created

function SmokeEffect() {
  // Create an array with 15 elements to map over
  const smokeWisps = [...Array(15)];

  return (
    <div className="smoke-container">
      {smokeWisps.map((_, index) => {
        // We use inline styles to give each wisp a random size, position, and animation delay
        const style = {
          left: `${Math.random() * 100}%`,
          width: `${50 + Math.random() * 50}px`,
          height: `${50 + Math.random() * 50}px`,
          animationDelay: `${Math.random() * 8}s`,
        };
        return <span key={index} style={style}></span>;
      })}
    </div>
  );
}

export default SmokeEffect;
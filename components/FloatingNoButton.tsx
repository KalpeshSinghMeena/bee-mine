import React, { useState } from 'react';

interface FloatingNoButtonProps {
  initialText: string;
}

export const FloatingNoButton: React.FC<FloatingNoButtonProps> = ({ initialText }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Move the button by a random offset to simulate "repelling"
    // We use a range that moves it enough to be unclickable but stays relatively local (trolling style)
    const range = 150; 
    const minMove = 60; // Minimum movement to escape cursor
    
    // Generate random angle
    const angle = Math.random() * 2 * Math.PI;
    // Generate distance
    const distance = minMove + Math.random() * (range - minMove);
    
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    setPosition(prev => ({
      x: prev.x + moveX,
      y: prev.y + moveY
    }));
  };

  return (
    <button
      onMouseEnter={moveButton}
      onTouchStart={moveButton} 
      onClick={moveButton}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.15s ease-out'
      }}
      className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-full shadow-lg 
        font-body text-xl whitespace-nowrap transition-colors duration-200"
    >
      {initialText}
    </button>
  );
};
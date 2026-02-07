import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Generate some random floating hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-valentine-pink opacity-30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 3 + 1}rem`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 5}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};
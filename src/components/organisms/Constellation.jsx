import React, { useMemo } from 'react';
import { Star } from '../atoms/Star';

export function Constellation({ children, starCount = 15, className = '' }) {
  // Generate random positions for stars
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      scale: 0.5 + Math.random() * 0.8,
    }));
  }, [starCount]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <div 
            key={star.id} 
            className="absolute"
            style={{ 
              top: star.top, 
              left: star.left,
              transform: `scale(${star.scale})`
            }}
          >
            <Star style={{ animationDelay: star.animationDelay }} />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

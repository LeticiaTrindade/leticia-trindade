import React from 'react';

export function MoonCard({ children, className = '', hoverEffect = true }) {
  return (
    <div 
      className={`card p-6 ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

import React from 'react';

export function GlassCard({ children, className = '', hoverEffect = true }) {
  return (
    <div 
      className={`glass rounded-xl p-6 ${hoverEffect ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-glow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

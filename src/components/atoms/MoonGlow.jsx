import React from 'react';

export function MoonGlow({ className = '', variant = 'purple' }) {
  const glowColor = variant === 'purple' 
    ? 'bg-brand-lavender/30 shadow-glow' 
    : 'bg-accent-moon-gold/30 shadow-moon';

  return (
    <div 
      className={`absolute rounded-full blur-3xl pointer-events-none ${glowColor} ${className}`}
      aria-hidden="true"
    />
  );
}

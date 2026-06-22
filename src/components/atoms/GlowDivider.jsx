import React from 'react';

export function GlowDivider({ className = '' }) {
  return (
    <div className={`w-full h-[1px] relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lavender/40 to-transparent" />
      <div className="absolute w-1/3 h-[1px] bg-gradient-to-r from-transparent via-accent-moon-gold/50 to-transparent moon-glow" />
    </div>
  );
}

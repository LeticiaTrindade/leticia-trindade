import React from 'react';
import { FloatingMoon } from '../atoms/FloatingMoon';
import { Constellation } from './Constellation';

export function HeroImage({ className = '' }) {
  return (
    <div className={`relative w-full max-w-[500px] aspect-square flex items-center justify-center ${className}`}>
      <Constellation starCount={8} className="absolute inset-0" />
      
      {/* The main moon */}
      <div className="relative w-[80%] h-[80%] z-10">
        <FloatingMoon className="w-full h-full" />
      </div>
      
      {/* Extra decorative glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-brand-lavender/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent-moon-gold/10 rounded-full blur-3xl" />
    </div>
  );
}

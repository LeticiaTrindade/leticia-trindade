import React from 'react';

export function FloatingMoon({ src, alt = "Lua mágica", className = '' }) {
  return (
    <div className={`relative floating ${className}`}>
      {/* Background glow behind the moon */}
      <div className="absolute inset-0 moon-background rounded-full blur-2xl z-0" />
      
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="relative z-10 w-full h-full object-contain moon-image drop-shadow-[0_0_40px_rgba(255,215,163,0.35)]"
        />
      ) : (
        <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-tr from-brand-purple to-accent-moon-gold opacity-50 flex items-center justify-center moon-image">
          <span className="text-white text-sm font-body">Lua Placeholder</span>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Sparkles } from 'lucide-react';

export function SectionTitle({ title, subtitle, className = '', showSparkles = true }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <div className="flex items-center gap-3">
        <h2 className="font-heading text-3xl md:text-[32px] font-medium text-text-primary text-center">
          {title}
        </h2>
        {showSparkles && <Sparkles className="text-accent-soft-gold" size={24} />}
      </div>
      {subtitle && (
        <p className="font-body text-text-secondary text-[16px] text-center max-w-lg mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}

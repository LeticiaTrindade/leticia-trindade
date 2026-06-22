import React from 'react';
import { MoonCard } from './MoonCard';

export function SocialCard({ icon: Icon, title, subtitle, href = '#', className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`block ${className}`}>
      <MoonCard className="flex flex-col items-center justify-center text-center gap-3 h-full cursor-pointer group">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-lavender/10 text-brand-lavender group-hover:bg-brand-lavender group-hover:text-white transition-colors duration-300">
          {Icon && <Icon size={24} />}
        </div>
        <div>
          <h3 className="font-body font-medium text-[16px] text-text-primary group-hover:text-brand-purple transition-colors">
            {title}
          </h3>
          {subtitle && (
            <p className="font-body text-[14px] text-text-secondary mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </MoonCard>
    </a>
  );
}

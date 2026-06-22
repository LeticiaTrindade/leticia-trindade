import React from 'react';
import { MoonCard } from '../molecules/MoonCard';

export function ProjectCard({ 
  title, 
  description, 
  imageSrc, 
  icon: Icon,
  href = '#',
  className = '' 
}) {
  return (
    <a href={href} className={`block group ${className}`}>
      <MoonCard className="p-0 overflow-hidden flex flex-col h-full h-full relative" hoverEffect={true}>
        {/* Top Image Section */}
        <div className="h-40 w-full relative overflow-hidden bg-surface">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-brand-lavender/20 flex items-center justify-center">
              <span className="text-text-secondary font-body text-sm">Imagem</span>
            </div>
          )}
          
          {/* Overlay to blend image with card */}
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
        </div>

        {/* Icon Floating overlapping the image and content */}
        {Icon && (
          <div className="absolute top-[136px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-surface border-4 border-card flex items-center justify-center text-brand-purple z-10 shadow-soft">
            <Icon size={20} />
          </div>
        )}

        {/* Content Section */}
        <div className="pt-8 pb-6 px-6 flex flex-col items-center text-center flex-grow">
          <h3 className="font-heading font-semibold text-[22px] text-text-primary mb-2 group-hover:text-brand-purple transition-colors">
            {title}
          </h3>
          <p className="font-body text-[14px] text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>
      </MoonCard>
    </a>
  );
}

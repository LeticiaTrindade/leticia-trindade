import React from 'react';
import { Heart, Star, ShoppingBag } from 'lucide-react';
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaAmazon } from 'react-icons/fa';
import { MoonCard } from '../molecules/MoonCard';
import { MoonButton } from '../atoms/MoonButton';
import { Tooltip } from '../atoms/Tooltip';

export function FavoriteCard({ 
  title, 
  description, 
  imageSrc, 
  usageTime,
  rating = 5,
  storeName,
  href = '#',
  onInfoClick,
}) {
  const isAmazon = storeName?.toLowerCase() === 'amazon';
  const StoreIcon = isAmazon ? FaAmazon : ShoppingBag;

  return (
    <MoonCard className="p-0 overflow-hidden flex flex-col h-full relative" hoverEffect={true}>
      {/* Top Image Section */}
      <div className="h-[220px] w-full relative overflow-hidden bg-surface">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-brand-primary-light flex items-center justify-center">
            <span className="text-text-secondary font-body text-sm">Imagem</span>
          </div>
        )}
        
        {/* Opinion/Info button floating */}
        <Tooltip text="Ler minha opinião detalhada" position="left" className="absolute top-4 right-4 z-10">
          <button 
            onClick={onInfoClick}
            className="w-10 h-10 rounded-full bg-surface shadow-soft flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-text-secondary transition-colors cursor-pointer group"
          >
            <TbMessageCircleFilled size={18} className="transition-transform group-hover:scale-110" />
          </button>
        </Tooltip>
        
        {/* Overlay to darken slightly in dark mode */}
        <div className="absolute inset-0 bg-black/0 dark:bg-black/20 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="pt-6 pb-6 px-6 flex flex-col items-center text-center flex-grow">
        <h3 className="font-heading font-semibold text-[22px] text-text-primary mb-2">
          {title}
        </h3>
        
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4 text-brand-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < rating ? "currentColor" : "none"} strokeWidth={i < rating ? 0 : 2} />
          ))}
        </div>

        <p className="font-body text-[14px] text-text-secondary leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        <p className="font-body text-[13px] text-text-disabled mb-6">
          Uso há {usageTime}
        </p>

        {/* Action Button */}
        <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
          <MoonButton variant="secondary" className="w-full py-[10px] text-[14px]" icon={StoreIcon}>
            Ver na {storeName}
          </MoonButton>
        </a>
      </div>
    </MoonCard>
  );
}

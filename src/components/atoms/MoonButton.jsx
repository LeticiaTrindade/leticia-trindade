import React from 'react';

export function MoonButton({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon,
  ...props 
}) {
  const isPrimary = variant === 'primary';
  const baseClasses = isPrimary ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button
      className={`${baseClasses} flex items-center gap-2 justify-center text-[15px] font-medium font-body ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} className="opacity-80" />}
    </button>
  );
}

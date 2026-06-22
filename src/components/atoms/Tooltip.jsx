import React, { useState, useRef, useEffect } from 'react';

/**
 * Tooltip — componente reutilizável que segue o padrão visual do nav-tooltip.
 *
 * Props:
 *  - text        (string)   Texto exibido no tooltip
 *  - children    (node)     Elemento que dispara o tooltip no hover
 *  - position    ('top' | 'bottom' | 'left' | 'right')  default: 'top'
 *  - delay       (number)   Delay em ms antes de exibir (default: 0)
 *  - className   (string)   Classes extras no wrapper
 */
export function Tooltip({ 
  text, 
  children, 
  position = 'top', 
  delay = 0,
  className = '' 
}) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  const show = () => {
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => setVisible(true), delay);
    } else {
      setVisible(true);
    }
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Position classes
  const positionStyles = {
    top: {
      tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
      enter: 'translate-y-0',
      exit: 'translate-y-1',
    },
    bottom: {
      tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
      enter: 'translate-y-0',
      exit: '-translate-y-1',
    },
    left: {
      tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
      enter: 'translate-x-0',
      exit: 'translate-x-1',
    },
    right: {
      tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
      enter: 'translate-x-0',
      exit: '-translate-x-1',
    },
  };

  const pos = positionStyles[position] || positionStyles.top;

  const hasPosition = /\b(absolute|fixed|sticky)\b/.test(className);

  return (
    <div 
      className={`${hasPosition ? '' : 'relative'} inline-flex ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      <span
        className={`
          tooltip-bubble
          absolute ${pos.tooltip}
          ${visible ? `opacity-100 ${pos.enter}` : `opacity-0 pointer-events-none ${pos.exit}`}
          transition-all duration-250 ease-[var(--ease-default)]
          z-[100]
        `}
        role="tooltip"
      >
        {text}
      </span>
    </div>
  );
}

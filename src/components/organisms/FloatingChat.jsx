import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { MoonCard } from '../molecules/MoonCard';

export function FloatingChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
      {/* Chat Tooltip Bubble */}
      <MoonCard className="p-4 flex flex-col gap-2 rounded-2xl rounded-br-sm shadow-card opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 bg-surface">
        <p className="font-body font-medium text-text-primary flex items-center gap-2 text-sm">
          Vamos conversar? <Heart size={16} className="text-brand-purple fill-brand-purple" />
        </p>
        <p className="font-body text-text-secondary text-sm">
          Envie uma mensagem...
        </p>
      </MoonCard>
      
      {/* Chat Button */}
      <button className="w-14 h-14 rounded-full bg-brand-lavender text-white shadow-glow flex items-center justify-center hover:scale-110 hover:bg-brand-purple transition-all duration-300 relative">
        <MessageCircle size={28} />
      </button>
    </div>
  );
}

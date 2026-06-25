import { Link } from 'react-router-dom';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Star } from '../../atoms/Star';

export function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-brand-primary/20 bg-brand-primary-light p-6 text-center shadow-soft md:p-8">
      <Star className="absolute left-5 top-5 h-5 w-5 text-accent-soft-gold" />
      <Sparkles className="absolute bottom-5 right-6 text-brand-purple/45" size={24} aria-hidden="true" />
      <p className="mx-auto max-w-3xl font-heading text-[26px] font-semibold leading-snug text-text-primary md:text-[32px]">
        Estou sempre aprendendo novas tecnologias e desenvolvendo projetos que unem criatividade, organização e boas experiências para o usuário.
      </p>
      <Link
        to="/links"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-[15px] font-semibold text-primary shadow-glow transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        Entrar em contato
        <MessageCircle size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Code2, Laptop, Moon, Sparkles } from 'lucide-react';
import { Star } from '../../atoms/Star';

export function PortfolioHero() {
  return (
    <section className="grid min-h-[62vh] w-full grid-cols-1 items-center gap-10 px-6 pb-14 pt-12 md:grid-cols-[1fr_0.85fr] md:pt-20">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 text-center md:text-left"
      >
        <div className="mb-4 inline-flex items-center gap-2 text-brand-primary">
          <Moon size={16} aria-hidden="true" />
          <span className="font-body text-[13px] font-semibold uppercase tracking-widest">Projetos</span>
        </div>
        <h1 className="font-heading text-[58px] font-semibold leading-none text-text-primary md:text-[76px]">
          Portfólio
        </h1>
        <p className="mt-5 max-w-xl font-body text-[17px] leading-relaxed text-text-secondary md:text-[18px]">
          Projetos que representam minha evolução como desenvolvedora Front-end, estudante e criadora de soluções.
        </p>
        <p className="mt-6 font-handwritten text-[28px] leading-tight text-brand-purple">
          Código, criatividade e um pouco de magia sutil <Star className="mb-1 inline h-5 w-5 text-accent-soft-gold" />
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center"
        aria-label="Ilustracao minimalista de notebook, codigo, estrelas e lua"
      >
        <div className="absolute right-6 top-4 h-24 w-24 rounded-full bg-accent-moon-gold/45" />
        <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-background" />
        <div className="absolute inset-10 rounded-full border border-dashed border-brand-primary/30" />
        <div className="absolute inset-20 rounded-full border border-dashed border-accent-soft-gold/35" />

        <div className="relative w-[84%] rounded-[28px] border border-border bg-card p-4 shadow-card">
          <div className="rounded-2xl border border-border bg-surface p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-soft-gold" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
                <span className="h-2.5 w-2.5 rounded-full bg-status-success" />
              </div>
              <Code2 className="text-brand-purple" size={18} aria-hidden="true" />
            </div>
            <div className="space-y-3">
              <span className="block h-3 w-4/5 rounded-full bg-brand-primary/45" />
              <span className="block h-3 w-3/5 rounded-full bg-border" />
              <span className="block h-3 w-2/3 rounded-full bg-border" />
              <div className="grid grid-cols-2 gap-3 pt-3">
                <span className="h-16 rounded-xl bg-brand-primary-light" />
                <span className="h-16 rounded-xl bg-accent-moon-gold/20" />
              </div>
            </div>
          </div>
          <div className="mx-auto h-5 w-[76%] rounded-b-2xl bg-text-primary/80" />
        </div>

        <Sparkles className="absolute left-4 top-20 text-accent-soft-gold stars" size={28} aria-hidden="true" />
        <Star className="absolute bottom-16 right-8 h-7 w-7 text-brand-primary" />
        <Laptop className="absolute bottom-5 left-12 text-brand-purple/70" size={30} aria-hidden="true" />
      </motion.div>
    </section>
  );
}

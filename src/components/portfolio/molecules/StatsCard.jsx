import { motion } from 'framer-motion';

export function StatsCard({ icon: Icon, value, label, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-brand-primary-light text-brand-purple">
        <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
      </div>
      <p className="font-heading text-[34px] font-semibold leading-none text-text-primary">{value}</p>
      <p className="mt-2 text-[13px] font-medium text-text-secondary">{label}</p>
    </motion.article>
  );
}

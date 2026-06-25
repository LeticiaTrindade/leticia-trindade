import { motion } from 'framer-motion';

export function TechGrid({ technologies }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, delay: index * 0.03 }}
          className="group flex min-h-[116px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-glow"
        >
          <tech.icon size={32} color={tech.color} className={tech.name === 'GitHub' ? 'text-text-primary' : ''} aria-hidden="true" />
          <span className="mt-3 text-[12px] font-semibold uppercase tracking-wide text-text-secondary group-hover:text-brand-purple">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

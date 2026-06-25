import { motion } from 'framer-motion';

export function PortfolioTimeline({ items }) {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <div className="relative grid grid-cols-6 gap-4">
          <div className="absolute left-8 right-8 top-9 border-t-2 border-dashed border-border" />
          {items.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-18 w-18 items-center justify-center rounded-full border-2 border-border bg-surface shadow-soft">
                <span className="font-heading text-[20px] font-semibold text-brand-purple">{item.year}</span>
              </div>
              <h3 className="font-heading text-[17px] font-semibold leading-tight text-text-primary">{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="space-y-4 lg:hidden">
        {items.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative flex gap-4 pl-2"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-soft">
                <span className="font-heading text-[16px] font-semibold text-brand-purple">{item.year}</span>
              </div>
              {index !== items.length - 1 && <div className="h-full min-h-10 border-l-2 border-dashed border-border" />}
            </div>
            <div className="pb-4 pt-2">
              <h3 className="font-heading text-[19px] font-semibold text-text-primary">{item.title}</h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

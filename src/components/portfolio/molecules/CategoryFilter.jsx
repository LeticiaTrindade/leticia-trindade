export function CategoryFilter({ filters, activeFilter, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="list" aria-label="Filtros de projetos">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className={`rounded-xl border px-4 py-2 text-[13px] font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
              isActive
                ? 'border-brand-primary bg-brand-primary text-white shadow-glow'
                : 'border-border bg-card text-text-secondary hover:border-brand-primary/60 hover:text-brand-purple'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export function TechChip({ children, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-[12px] font-medium text-text-secondary transition-colors hover:border-brand-primary/50 hover:text-brand-purple">
      {Icon && <Icon size={14} aria-hidden="true" />}
      {children}
    </span>
  );
}

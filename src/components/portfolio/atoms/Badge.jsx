const statusStyles = {
  'Em desenvolvimento': 'bg-status-warning/15 text-status-warning border-status-warning/30',
  Concluído: 'bg-status-success/15 text-status-success border-status-success/30',
  Arquivado: 'bg-text-disabled/15 text-text-secondary border-text-disabled/30',
};

export function Badge({ children, variant = children }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${statusStyles[variant] || statusStyles.Arquivado}`}>
      {children}
    </span>
  );
}

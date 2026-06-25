import { Search } from 'lucide-react';

export function SearchBar({ value, onChange }) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Pesquisar projeto</span>
      <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-disabled" size={18} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pesquisar projeto..."
        className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-4 font-body text-[14px] text-text-primary outline-none transition-all placeholder:text-text-disabled focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10"
      />
    </label>
  );
}

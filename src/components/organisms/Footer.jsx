import { Star } from '../atoms/Star';

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface/55 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="font-body text-[13px] text-text-disabled">
          © 2026 Letícia Trindade. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-2 text-text-disabled">
          <span className="font-handwritten text-[20px] text-brand-purple">criando magia todos os dias</span>
          <Star className="h-5 w-5 text-accent-soft-gold" />
        </div>
      </div>
    </footer>
  );
}

import { Sparkles, Moon, Sun } from 'lucide-react';

export default function DesignSystem() {
  return (
    <div className="p-12 bg-background min-h-screen text-text">
      <h1 className="font-heading text-6xl mb-8">🌙 Design System</h1>
      
      {/* Exemplo de Seção de Cores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🎨 Paleta Principal</h2>
        <div className="flex gap-4">
          <div className="p-8 bg-primary rounded-xl text-white">Primary</div>
          <div className="p-8 bg-secondary rounded-xl text-white">Secondary</div>
          <div className="p-8 bg-accent rounded-xl">Accent</div>
        </div>
      </section>

      {/* Exemplo de Botão */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Componentes</h2>
        <button className="px-6 py-3 bg-primary text-white rounded-2xl hover:scale-105 transition-transform">
          Botão Principal
        </button>
      </section>

      {/* Exemplo de Ícones */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Ícones</h2>
        <div className="flex gap-4 text-primary">
          <Moon size={32} />
          <Sparkles size={32} />
        </div>
      </section>
    </div>
  );
}
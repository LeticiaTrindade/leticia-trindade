import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Moon,
  Star as StarIcon,
  Home,
  Monitor,
  Sparkles,
  Droplet,
  Palette,
  Dog,
  BookOpen,
  X
} from 'lucide-react';

import { Star } from '../components/atoms/Star';
import { Constellation } from '../components/organisms/Constellation';
import { FavoriteCard } from '../components/organisms/FavoriteCard';

import moonLight from '../assets/images/moon-light.png';
import moonDark from '../assets/images/moon-dark.png';

import espelho from '../assets/images/favorites/espelho.jpeg';
import esponjas from '../assets/images/favorites/conjuntoDeEsponjasEPincel.png';
import pinceisNeilArt from '../assets/images/favorites/pinceisNailArt.jpeg';
import boleadores from '../assets/images/favorites/boleadores.jpeg';
import selfie from '../assets/images/favorites/selfie.png';

const categories = [
  { id: 'todos', label: 'Todos', icon: StarIcon },
  { id: 'minha-casa', label: 'Minha Casa', icon: Home },
  { id: 'meu-setup', label: 'Meu Setup', icon: Monitor },
  { id: 'nail-art', label: 'Nail Art', icon: Sparkles },
  { id: 'beleza', label: 'Beleza', icon: Droplet },
  { id: 'livros', label: 'Livros', icon: BookOpen },
  { id: 'arte', label: 'Arte', icon: Palette },
  { id: 'lagertha', label: 'Lagertha', icon: Dog },
];

const favoritesData = [
  {
    id: 1,
    category: 'beleza',
    title: 'Espelho com Led',
    description: 'Ajuda bastante na hora de me maquiar e é super prático.',
    imageSrc: espelho,
    usageTime: '6 meses',
    rating: 5,
    detailedOpinion: 'Este espelho mudou completamente minha rotina. As 3 opções de luz me permitem ver exatamente como a maquiagem vai ficar em diferentes ambientes, desde luz do dia até luz de festa. A bateria dura bastante e o tamanho é ideal para deixar na penteadeira sem ocupar muito espaço.',
    storeName: 'Shopee',
    href: 'https://s.shopee.com.br/1qZilmOQx2'
  },
  {
    id: 2,
    category: 'beleza',
    title: 'Conjunto de esponjas',
    description: 'Uso para aplicar base e corretivo e contorno.',
    imageSrc: esponjas,
    usageTime: '1 ano',
    rating: 5,
    detailedOpinion: 'Fiquei chocada com a qualidade considerando o preço! A esponja é super macia e não absorve tanto produto. O pincel hexágono é denso na medida certa para esfumar contorno cremoso sem deixar marcação. Já lavei várias vezes e continuam intactos.',
    storeName: 'Shopee',
    href: 'https://s.shopee.com.br/20t8yR0kbx'
  },
  {
    id: 3,
    category: 'nail-art',
    title: 'Kit de pinceis nail art',
    description: 'Ajuda bastante na hora de fazer desenhos nas unhas.',
    imageSrc: pinceisNeilArt,
    usageTime: '6 meses',
    rating: 5,
    detailedOpinion: 'Para quem gosta de se aventurar na nail art, esse kit é perfeito. As cerdas são fininhas e firmes, o que dá muita precisão para fazer traços, francesinha e desenhos mais complexos. Pelo valor, vale cada centavo.',
    storeName: 'Shopee',
    href: 'https://s.shopee.com.br/70HxoMRD5N'
  },
  {
    id: 4,
    category: 'nail-art',
    title: 'Kit boleadores nail art',
    description: 'Bom para criar bolinhas e detalhes nas unhas.',
    imageSrc: boleadores,
    usageTime: '6 meses',
    rating: 5,
    detailedOpinion: 'Indispensável! Facilita muito na hora de fazer florzinhas, poás e preencher espaços menores nas unhas. Tem vários tamanhos, então dá pra criar desde detalhes minúsculos até bolinhas maiores super redondinhas.',
    storeName: 'Shopee',
    href: 'https://s.shopee.com.br/2qSOqzPpi4'
  },
  {
    id: 5,
    category: 'meu-setup',
    title: 'Pau de selfie com luz',
    description: 'A luz integrada juda a melhorar a qualidade das imagens.',
    imageSrc: selfie,
    usageTime: '2 anos',
    rating: 5,
    detailedOpinion: 'Uso direto! A luz dele salva quando estou em ambientes mais escuros. É super resistente, o controle bluetooth funciona super bem e ainda serve de tripé para gravar vídeos para o TikTok e Reels.',
    storeName: 'Shopee',
    href: 'https://s.shopee.com.br/1gGRTZcUlv'
  }
];

export default function Favoritos() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredItems = favoritesData.filter(item => 
    activeCategory === 'todos' ? true : item.category === activeCategory
  );

  return (
    <div className="w-full flex flex-col items-center pb-12 overflow-hidden">
      
      {/* Background orbs */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-brand-primary-light rounded-full blur-[120px] pointer-events-none z-[-1] opacity-30" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-accent-moon-gold/10 rounded-full blur-[120px] pointer-events-none z-[-1]" />

      {/* ================= HERO SECTION ================= */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-12 pb-16 flex flex-col md:flex-row items-center justify-between gap-12 relative min-h-[60vh]">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 z-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-brand-primary" />
            <span className="font-body text-[13px] tracking-widest text-brand-primary uppercase font-semibold">
              Favoritos
            </span>
          </div>

          <h1 className="font-heading font-semibold text-[56px] md:text-[72px] leading-tight text-text-primary mb-2">
            Meus Favoritos
          </h1>
          
          <p className="font-handwritten text-[28px] text-brand-primary mb-8 flex items-center gap-2 justify-center md:justify-start">
            Coisas que uso, amo e recomendo de coração <Star className="inline w-5 h-5 text-accent-soft-gold" />
          </p>

          <p className="font-body text-[16px] text-text-secondary max-w-md leading-relaxed mb-8">
            Aqui estão produtos que fazem parte do meu dia a dia. São itens que realmente uso, testei e que facilitam minha rotina ou trazem mais beleza para a vida.
          </p>

          <div className="bg-brand-primary-light rounded-2xl p-5 border border-brand-primary/20 flex items-center gap-4 max-w-md shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 text-text-secondary shadow-glow">
              <Heart size={20} fill="currentColor" />
            </div>
            <p className="font-body text-[14px] text-text-secondary leading-relaxed text-left">
              Tudo aqui é escolhido com carinho e compartilhado com sinceridade.
            </p>
          </div>
        </motion.div>

        {/* Right Content - Decorative Moon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full max-w-[500px] relative z-0"
        >
          <div className="relative w-full aspect-square floating">
            <img
              src={moonLight}
              alt="Lua decorativa"
              className="w-full h-full object-contain block dark:hidden drop-shadow-[0_0_40px_rgba(164,136,194,0.35)]"
            />
            <img
              src={moonDark}
              alt="Lua decorativa"
              className="w-full h-full object-contain hidden dark:block"
            />
            
            {/* Stars floating around */}
            <Star className="absolute top-1/4 -left-8 w-6 h-6 text-accent-soft-gold" />
            <Star className="absolute bottom-1/4 -right-4 w-8 h-8 text-brand-primary" />
            <Star className="absolute top-10 right-1/4 w-4 h-4 text-brand-primary-hover" />
          </div>
        </motion.div>
      </section>

      {/* ================= CATEGORY FILTERS ================= */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const Icon = cat.icon;
            
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-[10px] rounded-xl font-body text-[14px] transition-all duration-300 border ${
                  isActive 
                    ? 'bg-brand-primary text-text-primary border-brand-primary shadow-glow' 
                    : 'bg-card text-text-secondary border-border hover:border-brand-primary hover:text-brand-primary'
                }`}
              >
                <Icon size={16} />
                {cat.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-20">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FavoriteCard 
                  {...item} 
                  onInfoClick={() => setSelectedProduct(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ================= BOTTOM QUOTE ================= */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-16">
        <div className="relative py-8 px-6 rounded-3xl bg-brand-primary-light border border-brand-primary/20 flex flex-col items-center text-center overflow-hidden">
          {/* Decorative stars */}
          <Star className="absolute top-4 left-6 w-5 h-5 text-accent-soft-gold" />
          <Star className="absolute bottom-6 right-8 w-4 h-4 text-brand-primary" />
          
          <div className="flex items-center gap-3 mb-2">
            <Moon className="text-accent-soft-gold" size={24} fill="currentColor" />
            <h3 className="font-heading font-medium text-[26px] text-text-primary">
              Coisas pequenas, grandes diferenças
            </h3>
          </div>
          <p className="font-body text-[15px] text-text-secondary">
            Pequenos detalhes tornam os dias mais leves e especiais.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full max-w-6xl mx-auto px-6 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[13px] text-text-disabled">
          © 2026 Letícia Trindade. Todos os direitos reservados.
        </p>
        
        <div className="flex items-center gap-1 opacity-50">
           <Star className="w-6 h-6 text-brand-primary" />
        </div>
      </footer>

      {/* ================= MODAL DE OPINIÃO ================= */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-surface border border-border rounded-2xl shadow-glow z-[101] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-brand-primary-light/30">
                <h3 className="font-heading font-semibold text-[22px] text-text-primary">
                  Minha Opinião
                </h3>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="w-8 h-8 rounded-full bg-card flex items-center justify-center text-text-secondary hover:text-brand-primary hover:bg-brand-primary-light transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto">
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={selectedProduct.imageSrc} 
                    alt={selectedProduct.title}
                    className="w-24 h-24 object-cover rounded-xl border border-border flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-body font-medium text-[18px] text-text-primary mb-1">
                      {selectedProduct.title}
                    </h4>
                    <p className="font-body text-[13px] text-text-disabled mb-2">
                      Uso há {selectedProduct.usageTime}
                    </p>
                    <div className="flex items-center gap-1 text-brand-primary">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} size={14} fill={i < selectedProduct.rating ? "currentColor" : "none"} strokeWidth={i < selectedProduct.rating ? 0 : 2} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-5 border border-border relative">
                  {/* Decorative quote icon */}
                  <div className="absolute -top-3 -left-2 text-[40px] leading-none font-heading text-brand-primary opacity-20">
                    "
                  </div>
                  <p className="font-body text-[15px] text-text-secondary leading-relaxed relative z-10 whitespace-pre-wrap">
                    {selectedProduct.detailedOpinion || selectedProduct.description}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 mt-2">
                <a 
                  href={selectedProduct.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <button className="w-full py-3 rounded-xl bg-brand-primary text-white font-body text-[15px] font-medium hover:bg-brand-primary-hover transition-colors shadow-glow cursor-pointer">
                    Ver na {selectedProduct.storeName}
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

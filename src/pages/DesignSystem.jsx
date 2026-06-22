import React, { useState, useEffect } from 'react';
import { Moon, Sun, Camera, Terminal, Palette, ExternalLink, CodeXml, Heart, MonitorPlay, MessageCircle } from 'lucide-react';

import { MoonButton } from '../components/atoms/MoonButton';
import { MoonGlow } from '../components/atoms/MoonGlow';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { Star } from '../components/atoms/Star';
import { GlowDivider } from '../components/atoms/GlowDivider';
import { FloatingMoon } from '../components/atoms/FloatingMoon';

import { MoonCard } from '../components/molecules/MoonCard';
import { GlassCard } from '../components/molecules/GlassCard';
import { SocialCard } from '../components/molecules/SocialCard';

import { ProjectCard } from '../components/organisms/ProjectCard';
import { Constellation } from '../components/organisms/Constellation';
import { HeroImage } from '../components/organisms/HeroImage';

export default function DesignSystem() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background pb-20 relative overflow-hidden transition-colors duration-500">
      {/* Background Constellation for the whole page */}
      <Constellation starCount={30} className="fixed inset-0 pointer-events-none" />
      
      {/* Global Glows */}
      <MoonGlow variant="purple" className="top-[-10%] left-[-10%] w-[500px] h-[500px] opacity-50" />
      <MoonGlow variant="gold" className="bottom-[-10%] right-[-10%] w-[600px] h-[600px] opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h1 className="font-heading text-4xl font-bold text-text-primary">Design System</h1>
            <p className="font-body text-text-secondary mt-2">Guia visual e de componentes (Leticia Portfolio)</p>
          </div>
          
          <button 
            onClick={() => setIsDark(!isDark)}
            className="w-16 h-8 rounded-full bg-surface border border-border flex items-center px-1 cursor-pointer transition-all relative"
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isDark ? 'bg-card text-brand-moon-lavender translate-x-8' : 'bg-brand-lavender text-white translate-x-0'}`}>
              {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </div>
          </button>
        </div>

        {/* Cores */}
        <section className="mb-20">
          <SectionTitle title="Cores" subtitle="Paleta de cores principal e de destaque" className="mb-10" />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#CFA7FF] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Moon Lavender</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#B989F7] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Lavender</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#8D63D2] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Purple</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#6B46A3] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Deep Purple</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#EADFFF] border shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Lilac</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#FFD7A3] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Moon Gold</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#F4C97B] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Soft Gold</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#FFE9B8] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Star</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-20 rounded-xl bg-[#FFF5D6] shadow-sm"></div>
              <span className="font-body text-sm font-medium text-text-primary">Glow</span>
            </div>
          </div>
        </section>

        <GlowDivider className="my-16" />

        {/* Tipografia */}
        <section className="mb-20">
          <SectionTitle title="Tipografia" subtitle="Cormorant Garamond, Inter e Caveat" className="mb-10" />
          
          <div className="flex flex-col gap-8">
            <MoonCard className="flex flex-col gap-4">
              <h1 className="font-heading text-5xl">Heading 1 - Olá! Eu sou a Letícia</h1>
              <h2 className="font-heading text-4xl">Heading 2 - Explore meu universo</h2>
              <h3 className="font-heading text-3xl">Heading 3 - Me encontre por aí</h3>
            </MoonCard>
            
            <MoonCard className="flex flex-col gap-4">
              <p className="font-body text-xl font-medium">Body XL - Desenvolvedora Front-end, criativa por essência</p>
              <p className="font-body text-base">Body - Apaixonada por tecnologia, arte e livros.</p>
              <p className="font-body text-sm text-text-secondary">Small - Menor texto para descrições de cards.</p>
            </MoonCard>
            
            <MoonCard className="flex items-center justify-center py-10">
              <p className="font-handwritten text-4xl text-brand-purple">
                Uma pessoa criando magia todos os dias <Star className="inline w-6 h-6 ml-2" />
              </p>
            </MoonCard>
          </div>
        </section>

        <GlowDivider className="my-16" />

        {/* Atoms */}
        <section className="mb-20">
          <SectionTitle title="Atoms" subtitle="Os blocos de construção mais básicos" className="mb-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MoonCard>
              <h3 className="font-heading text-xl mb-4 text-text-primary">MoonButton</h3>
              <div className="flex flex-wrap gap-4">
                <MoonButton variant="primary">Conheça meu trabalho</MoonButton>
                <MoonButton variant="secondary" icon={Moon}>Sobre mim</MoonButton>
                <MoonButton variant="primary" icon={MessageCircle}>Vamos conversar?</MoonButton>
              </div>
            </MoonCard>

            <MoonCard>
              <h3 className="font-heading text-xl mb-4 text-text-primary">Star & Glow</h3>
              <div className="flex items-center justify-around h-24 relative overflow-hidden bg-surface rounded-xl border">
                <MoonGlow variant="purple" className="w-16 h-16 top-4 left-4" />
                <Star className="w-10 h-10" />
                <Star className="w-6 h-6 text-brand-purple" />
                <Star className="w-8 h-8 text-status-warning" />
              </div>
            </MoonCard>
            
            <MoonCard className="md:col-span-2">
              <h3 className="font-heading text-xl mb-4 text-text-primary">FloatingMoon (Placeholder)</h3>
              <div className="flex justify-center bg-card rounded-xl py-8">
                <div className="w-48 h-48">
                  <FloatingMoon />
                </div>
              </div>
            </MoonCard>
          </div>
        </section>

        <GlowDivider className="my-16" />

        {/* Molecules & Organisms */}
        <section className="mb-20">
          <SectionTitle title="Molecules & Organisms" subtitle="Cards e containers complexos" className="mb-10" />
          
          <h3 className="font-heading text-2xl mb-6 text-text-primary">Social Cards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <SocialCard icon={Camera} title="Instagram" subtitle="@leeh.trindartes" />
            <SocialCard icon={MonitorPlay} title="YouTube" subtitle="@leeh.trindade" />
            <SocialCard icon={Terminal} title="GitHub" subtitle="@leticiatrindade" />
            <SocialCard icon={Heart} title="Shopee" subtitle="Minha Loja" />
          </div>

          <h3 className="font-heading text-2xl mb-6 text-text-primary">Project Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ProjectCard 
              title="Portfólio" 
              description="Meus projetos de tecnologia" 
              icon={CodeXml}
            />
            <ProjectCard 
              title="Blog" 
              description="Escritos sobre rotina, estudos e reflexões" 
              icon={Moon}
            />
            <ProjectCard 
              title="Arte" 
              description="Desenhos, projetos criativos e nail art" 
              icon={Palette}
            />
          </div>
          
          <h3 className="font-heading text-2xl mb-6 text-text-primary">GlassCard (Glassmorphism)</h3>
          <div className="relative p-10 rounded-3xl overflow-hidden bg-gradient-to-r from-brand-lavender/30 to-accent-moon-gold/30">
            <Constellation starCount={10} className="absolute inset-0" />
            <div className="relative z-10 max-w-md mx-auto">
              <GlassCard className="text-center">
                <h4 className="font-heading text-2xl mb-2 text-text-primary">Efeito Vidro</h4>
                <p className="font-body text-text-secondary">Este card usa backdrop-blur para dar um efeito elegante sobre fundos complexos.</p>
                <MoonButton variant="primary" className="mx-auto mt-6">Ação Primária</MoonButton>
              </GlassCard>
            </div>
          </div>
          
          <h3 className="font-heading text-2xl mb-6 mt-12 text-text-primary">HeroImage Component</h3>
          <MoonCard className="flex justify-center p-12 overflow-hidden bg-surface">
            <HeroImage />
          </MoonCard>
        </section>

      </div>
    </div>
  );
}

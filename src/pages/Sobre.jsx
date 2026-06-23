import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sparkles, Sprout, GraduationCap, Laptop, BookOpen, Users, Code, Rocket, Heart, Paintbrush, Search, ShoppingBag } from 'lucide-react';
import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiSpringboot, SiPostgresql, SiSqlite, SiGithub, SiFigma } from 'react-icons/si';
import { FaJava, FaGitAlt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

import { SectionTitle } from '../components/atoms/SectionTitle';

import profileImg from '../assets/images/profile.png';
import moonDark from '../assets/images/moon-dark.png';
import moonLight from '../assets/images/moon-light.png';

// Hobbies Images
import livrosImg from '../assets/images/hobbies/livros.png';
import nailArtImg from '../assets/images/hobbies/nail_art.png';
import astronomiaImg from '../assets/images/hobbies/astronomia.png';
import lagerthaImg from '../assets/images/hobbies/lagertha.png';
import cafeImg from '../assets/images/hobbies/cafe.png';
import arteDigitalImg from '../assets/images/hobbies/arte_digital.png';
const jogosIndieImg = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=400';

const trajectory = [
  { year: '2019', title: 'Primeiro contato com programação', desc: 'Curso Técnico em Computação Gráfica no IFPE. Foi aqui que tudo começou e me apaixonei pela área de tecnologia.', icon: Sprout },
  { year: '2020', title: 'Licenciatura em Computação', desc: 'Iniciei a graduação presencial em Licenciatura em Computação na UFRPE, aprofundando meus conhecimentos.', icon: GraduationCap },
  { year: '2021', title: 'Primeira experiência profissional', desc: 'Professora de Programação na BYJU\'S Future School. Ensinar me ensinou muito sobre comunicação, paciência e liderança.', icon: Laptop },
  { year: '2023', title: 'Nova fase', desc: 'Migrei para o formato EAD da UFRPE e reiniciei do 1º período, suspendendo as cadeiras já pagas. Em março, comecei como professora de programação na Prepara Cursos.', icon: BookOpen },
  { year: '2024', title: 'Coordenação Pedagógica', desc: 'Assumi a coordenação pedagógica da Prepara Cursos (ago/2024 - set/2025). Uma experiência que desenvolveu minha liderança e organização.', icon: Users },
  { year: '2025', title: 'Estágio Front-end (VLab)', desc: 'Em agosto, iniciei meu primeiro estágio como Front-end no VLab. Construí interfaces com React e vivi projetos reais em equipe.', icon: Code },
  { year: '2026', title: 'Estagiária Front-end (Viitra)', desc: 'Em fevereiro, comecei como estagiária Front-end na Viitra (parceira do VLab). Fui convidada para um novo projeto e é meu estágio atual.', icon: Rocket },
];

const technologies = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'APIs REST', icon: TbApi, color: '#A488C2' },
    ]
  },
  {
    category: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
    ]
  },
  {
    category: 'Ferramentas',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: 'currentColor' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
    ]
  }
];

const currently = [
  { title: 'Estagiária Front-end na Viitra', desc: 'Desenvolvendo interfaces modernas com React.', icon: Laptop },
  { title: 'Licenciatura em Computação (UFRPE)', desc: 'Cursando no formato EAD.', icon: GraduationCap },
  { title: 'Estudando Spring Boot e PostgreSQL', desc: 'Expandindo meus conhecimentos em back-end.', icon: Code },
  { title: 'Criadora de conteúdo como afiliada', desc: 'Compartilhando achados que facilitam o dia a dia.', icon: ShoppingBag },
  { title: 'Nail Art & Arte', desc: 'Outra forma de expressão que me conecta comigo.', icon: Paintbrush },
  { title: 'Construindo o leticiatrindade.com.br', desc: 'Meu universo, minhas ideias, meus projetos.', icon: Sparkles },
];

const values = [
  { title: 'Curiosidade', desc: 'Questiono, exploro e estou sempre aprendendo algo novo.', icon: Search },
  { title: 'Criatividade', desc: 'Gosto de transformar ideias em experiências bonitas.', icon: Heart },
  { title: 'Organização', desc: 'Planejo, estruturo e transformo planos em ações reais.', icon: Sparkles },
  { title: 'Empatia', desc: 'Coloco as pessoas no centro das soluções que crio.', icon: Users },
  { title: 'Aprendizado Contínuo', desc: 'Acredito que crescer é um hábito diário.', icon: BookOpen },
  { title: 'Acessibilidade', desc: 'Interfaces inclusivas são mais humanas.', icon: Moon },
];

const hobbies = [
  { title: 'Livros', desc: 'Meu refúgio favorito.', img: livrosImg },
  { title: 'Nail Art', desc: 'Pequenos detalhes, grandes obras.', img: nailArtImg },
  { title: 'Astronomia', desc: 'O universo sempre me inspira.', img: astronomiaImg },
  { title: 'Lagertha', desc: 'Minha companheira de aventuras.', img: lagerthaImg },
  { title: 'Arte Digital', desc: 'Desenhar também é programar ideias.', img: arteDigitalImg },
  { title: 'Jogos Indie', desc: 'Histórias incríveis criadas por pessoas incríveis.', img: jogosIndieImg },
];

export default function Sobre() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center relative overflow-visible space-y-5">

      {/* Decorative stars */}
      <div className="absolute top-20 right-10 text-accent-star opacity-60"><Sparkles size={24} /></div>
      <div className="absolute top-40 left-1/4 text-accent-star opacity-40"><Sparkles size={16} /></div>
      <div className="absolute top-80 right-1/4 text-accent-star opacity-50"><Sparkles size={20} /></div>

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-12 z-10 relative">
        {/* Left Column (Text) */}
        <div className="flex-1 flex flex-col relative z-10">
          <div className="flex items-center gap-2 text-brand-primary mb-4">
            <Moon size={16} />
            <span className="font-body text-[13px] tracking-widest text-brand-primary uppercase font-semibold">Sobre Mim</span>
          </div>

          <h1 className="font-heading font-semibold text-[56px] md:text-[72px] leading-tight text-text-primary mb-6 flex items-center gap-3">
            Prazer, eu sou a <br/>Letícia <Sparkles className="text-accent-soft-gold" size={32} />
          </h1>

          <div className="overflow-visible text-text-secondary font-body leading-relaxed space-y-4 text-lg max-w-lg mb-8 relative">
            <p>
              Desenvolvedora Front-end apaixonada por transformar ideias em experiências digitais bonitas, funcionais e acessíveis. Sou movida pela curiosidade, criatividade e pelo desejo de aprender todos os dias.
            </p>
            <p>
              Aqui, compartilho um pouco da minha trajetória, dos meus projetos, das coisas que uso e recomendo, dos meus desenhos e da minha jornada como criadora de conteúdo e afiliada.
            </p>

            <p className="font-handwritten text-[28px] text-brand-purple pt-4">
              Uma pessoa criando magia todos os dias ✨
            </p>

            {/* Moon Image Overlay */}
            <div className="absolute -left-24 -top-10 -z-10 opacity-40 moon-image pointer-events-none scale-[1.3] blur-[1px]">
              <img src={moonLight} alt="Lua decorativa" className="w-96 dark:hidden block" />
              <img src={moonDark} alt="Lua decorativa" className="w-96 hidden dark:block" />
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex-1 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-[40px] overflow-hidden border-[6px] border-surface shadow-card relative z-10">
              <img src={profileImg} alt="Letícia Trindade" className="w-full h-full object-cover" />
            </div>
            {/* Soft glow behind image */}
            <div className="absolute inset-0 bg-brand-primary opacity-20 blur-3xl rounded-[40px] scale-110 -z-10" />
            <div className="absolute -bottom-8 -right-8 text-accent-star"><Sparkles size={48} /></div>
          </motion.div>
        </div>
      </section>

      {/* Trajetória Section */}
      <section className="w-full flex flex-col items-center">
        <SectionTitle title="Minha trajetória" showSparkles={true} className="mb-16" />

        <div className="w-full flex justify-between items-start relative max-w-6xl mx-auto overflow-x-auto pb-8 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Dashed line */}
          <div className="hidden lg:block absolute top-10 left-10 right-10 border-t-2 border-dashed border-border/70 z-0"></div>

          <div className="flex w-max lg:w-full justify-between lg:gap-0 gap-8 px-4 lg:px-0">
            {trajectory.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center w-[150px] z-10 relative snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-20 h-20 rounded-full bg-surface border-2 border-border flex items-center justify-center mb-6 shadow-soft text-brand-purple relative flex-shrink-0">
                  <item.icon size={28} />
                  {/* Connecting dot */}
                  {idx !== trajectory.length - 1 && (
                    <div className="hidden lg:block absolute -right-[calc(50%+20px)] top-1/2 w-2 h-2 bg-brand-primary/40 rounded-full transform -translate-y-1/2"></div>
                  )}
                </div>
                <span className="font-heading font-bold text-lg text-text-primary mb-1">{item.year}</span>
                <h3 className="font-heading text-[15px] text-brand-purple font-semibold mb-2 leading-tight">{item.title}</h3>
                <p className="text-[11px] text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section className="w-full flex flex-col items-center">
        <SectionTitle title="Tecnologias que uso" showSparkles={true} className="mb-12" />

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mb-12 w-full">
          {technologies.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-surface border border-border rounded-2xl p-6 shadow-sm flex flex-col items-center relative pt-8 flex-1 min-w-[250px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="absolute -top-3 bg-background px-4 font-heading font-semibold text-lg text-text-primary flex items-center gap-1">
                {category.category} <Sparkles size={14} className="text-accent-soft-gold opacity-80" />
              </h3>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                {category.items.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 w-[72px]">
                    <div className="w-14 h-14 bg-card border border-border rounded-xl flex items-center justify-center hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-soft transition-all cursor-default">
                      <tech.icon size={28} color={tech.color} className={tech.name === 'GitHub' ? 'text-text-primary' : ''} />
                    </div>
                    <span className="text-[10px] font-medium text-text-secondary uppercase tracking-wider text-center leading-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atualmente e Valores Section */}
      <section className="w-full flex flex-col lg:flex-row gap-8 items-stretch max-w-6xl">

        {/* Atualmente */}
        <div className="flex-[4] flex flex-col items-center">
          <SectionTitle title="Atualmente" showSparkles={true} className="mb-8" />

          <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-3xl p-8 w-full h-full flex flex-col justify-center relative overflow-hidden shadow-sm">
            <div className="absolute right-0 bottom-0 opacity-10 dark:opacity-20 pointer-events-none">
              <svg width="120" height="180" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M80 150C80 100 20 80 20 40C20 20 40 0 60 0C80 0 100 30 100 60C100 100 80 150 80 150Z" fill="currentColor" className="text-brand-purple" />
                <path d="M50 150C50 110 0 90 0 50C0 30 20 10 40 10C60 10 80 40 80 70C80 110 50 150 50 150Z" fill="currentColor" className="text-brand-purple opacity-50" />
              </svg>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {currently.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-brand-purple mt-1 bg-surface p-2 rounded-lg border border-border shadow-sm">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="flex-[5] flex flex-col items-center">
          <SectionTitle title="Meus valores" showSparkles={true} className="mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:border-brand-primary/40 transition-colors h-full"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
              >
                <val.icon size={28} strokeWidth={1.5} className="text-brand-purple mb-3" />
                <h3 className="font-heading text-[17px] font-semibold text-text-primary mb-1">{val.title}</h3>
                <p className="text-[12px] text-text-secondary leading-tight">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Além do código Section */}
      <section className="w-full mb-10 flex flex-col items-center max-w-6xl mx-auto">
        <SectionTitle title="Além do código" showSparkles={true} className="my-8" />

        <div className="w-full overflow-x-auto justify-center pb-6 flex gap-4 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {hobbies.map((hobby, idx) => (
            <motion.div
              key={idx}
              className="bg-card border border-border rounded-2xl p-3 flex flex-col w-[150px] flex-shrink-0 shadow-sm group hover:-translate-y-1 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-full h-[110px] rounded-xl overflow-hidden mb-3 relative">
                <img src={hobby.img} alt={hobby.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col relative pb-5">
                <h3 className="font-heading font-semibold text-base text-text-primary mb-1 leading-tight">{hobby.title}</h3>
                <p className="text-[10px] text-text-secondary leading-tight">{hobby.desc}</p>
                <Heart size={14} className="text-brand-purple/30 absolute bottom-0 right-0 group-hover:text-brand-purple transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent px-auto flex flex-col items-center justify-center gap-4 relative  text-center"
      >
        <p className="font-handwritten text-[28px] md:text-2xl leading-tight text-brand-purple tracking-wide max-w-2xl relative z-10">
          Não acredito que tecnologia e criatividade estejam em lados opostos. Para mim, as melhores soluções surgem justamente quando conseguimos unir lógica, sensibilidade e curiosidade. ✨
        </p>
      </motion.div>

    </div>
  );
}

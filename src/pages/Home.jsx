import React from 'react';
import { motion } from 'framer-motion';

import { Moon, Camera, Terminal, MonitorPlay, Heart, CodeXml, Palette } from 'lucide-react';

import { SlSocialInstagram } from "react-icons/sl";
import { SiShopee } from "react-icons/si";
import { FaTiktok, FaYoutube } from 'react-icons/fa';
import { LiaBookReaderSolid } from "react-icons/lia";
import { PiHandbag } from "react-icons/pi";


import { MoonButton } from '../components/atoms/MoonButton';
import { SectionTitle } from '../components/atoms/SectionTitle';
import { FloatingMoon } from '../components/atoms/FloatingMoon';
import { Star } from '../components/atoms/Star';
import { Tooltip } from '../components/atoms/Tooltip';

import { SocialCard } from '../components/molecules/SocialCard';
import { ProjectCard } from '../components/organisms/ProjectCard';
import moonDark from '../assets/images/moon-dark.png';
import moonLight from '../assets/images/moon-light.png';
import profile from '../assets/images/profile.png';

import blog from '../assets/images/session-universe/blog.png';
import portfolio from '../assets/images/session-universe/portfolio.png';
import finds from '../assets/images/session-universe/finds.png';
import favorites from '../assets/images/session-universe/favorites.png';
import art from '../assets/images/session-universe/art.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* ================= HERO SECTION ================= */}
      <section className="pb-20 md:pb-0 w-full max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-8 relative min-h-screen md:mt-[-80px]">
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10 relative">

          {/* Lua decorativa real — troca entre light e dark */}
          <div className="absolute -right-14 md:-left-32 -top-12 md:-top-50 w-[250px] md:w-[500px] h-[250px] md:h-[800px] pointer-events-none z-[-1] floating">
            <img
              src={moonLight}
              alt="Lua decorativa"
              className="w-full h-full object-contain block dark:hidden drop-shadow-[0_0_40px_rgba(185,137,247,0.35)]"
            />
            {/* Dark moon (visível no tema escuro) */}
            <img
              src={moonDark}
              alt="Lua decorativa"
              className="w-full h-full object-contain hidden dark:block"
            />
          </div>
          <div className='w-full'>
            <div className='flex flex-col justify-between items-start md:ml-42'>
              <p className="font-heading text-[32px] text-text-secondary italic">
                Olá! Eu sou a
              </p>
              <h1 className="font-heading font-semibold text-[64px] md:text-[80px] mt-[-20px] leading-tight text-text-primary ">
                Letícia
              </h1>
              <h1 className="font-heading font-semibold text-[64px] md:text-[80px] leading-tight text-text-primary  mt-[-20px]">
                Trindade
              </h1>
              <p className="font-body text-[18px] text-text-secondary max-w-md mb-4 leading-relaxed">
                Desenvolvedora Front-end, criativa por essência e apaixonada por tecnologia, arte e livros.
              </p>

              <div className="flex items-center gap-2 mb-8">
                {/*  <div className="h-[1px] w-12 bg-border"></div> */}                <p className="font-handwritten text-[28px] text-brand-purple">
                  Uma pessoa criando magia todos os dias <Star className="inline w-5 h-5 mb-1" />
                </p>
                {/*  <div className="h-[1px] w-12 bg-border"></div> */}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:ml-32">
              <Tooltip text="Em breve, você poderá conhecer meu trabalho por aqui!" position="bottom">
                <MoonButton variant="primary" className="px-8 py-4 text-lg">
                  Conheça meu trabalho +
                </MoonButton>
              </Tooltip>
              <MoonButton variant="secondary" icon={Moon} className="px-8 py-4 text-lg href=">
                Sobre mim
              </MoonButton>
            </div>

          </div>
        </div>
        {/* Right Side: Photo Card */}
        <div className="flex-1 w-full max-w-md flex justify-center z-10">
          <div className="relative p-3 rounded-[40px] border-2 border-border/60 bg-surface/40 backdrop-blur-sm shadow-soft">
            <div className="w-full aspect-[3/4] rounded-[32px] overflow-hidden bg-card relative">
              {/* Fallback image style while the real photo isn't provided */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-accent-moon-gold/20 mix-blend-overlay"></div>
              <img
                src={profile}
                alt="Letícia Trindade"
                className="w-full h-full object-cover contrast-110"
              />
            </div>

            {/* Estrelinhas decorativas em volta da foto */}
            <Star className="absolute -top-4 -right-4 w-8 h-8 text-accent-soft-gold" />
            <Star className="absolute top-1/4 -left-6 w-6 h-6 text-brand-purple" />
            <Star className="absolute bottom-10 -right-6 w-5 h-5 text-brand-lavender" />
          </div>
        </div>
      </section>

      {/* ================= ME ENCONTRE POR AÍ ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Anima quando 30% da seção aparecer
        variants={sectionVariants}
        className="w-full pb-20 max-w-5xl mx-auto px-6 space-y-8">
        <SectionTitle
          title="Me encontre por aí"
          showSparkles={true}
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <SocialCard icon={SlSocialInstagram} title="Achados da Leh" subtitle="@achadosdaleh.ofc" href='https://www.instagram.com/achadosdaleh.ofc/' />
          <SocialCard icon={SlSocialInstagram} title="Pessoal" subtitle="@leticiatrindadet" href='https://www.instagram.com/leticiatrindadet/' />
          <SocialCard icon={FaTiktok} title="TikTok" subtitle="@leticiatrindadet" href='https://www.tiktok.com/@leticiatrindadet' />
          <SocialCard icon={FaYoutube} title="YouTube" subtitle="@leticiatrindadet" href='https://www.youtube.com/@leticiatrindadet' />
          <SocialCard icon={SiShopee} title="Shopee" subtitle="Minha Loja" href='s.shopee.com.br/8AT7BkSfhN' />
        </div>
      </motion.section>

      {/* ================= EXPLORE MEU UNIVERSO ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="w-full max-w-6xl mx-auto px-6 pb-20 space-y-8"
      >
        <SectionTitle
          title="Explore meu universo"
          showSparkles={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          <ProjectCard
            title="Portfólio"
            description="Meus projetos de tecnologia"
            icon={CodeXml}
            imageSrc={portfolio}
            comingSoon={true}
          />
          <ProjectCard
            title="Blog"
            description="Escritos sobre rotina, estudos e reflexões"
            icon={LiaBookReaderSolid}
            imageSrc={blog}
            comingSoon={true}
          />
          <ProjectCard
            title="Achados"
            description="Indicações e produtos que recomendo"
            icon={PiHandbag}
            imageSrc={finds}
            comingSoon={true}
          />
          <ProjectCard
            title="Favoritos"
            description="Coisas que uso e que fazem meu dia melhor"
            icon={Heart}
            imageSrc={favorites}
            href="/favoritos"
          />
          <ProjectCard
            title="Arte"
            description="Desenhos, projetos criativos e nail art"
            icon={Palette}
            imageSrc={art}
            comingSoon={true}
          />
        </div>
      </motion.section>
    </div>
  );
}

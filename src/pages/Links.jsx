import React from 'react';
import { motion } from 'framer-motion';
import { Moon, ArrowRight } from 'lucide-react';
import { SlSocialInstagram } from 'react-icons/sl';
import { SiShopee } from 'react-icons/si';
import { FaTiktok, FaYoutube, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { Star } from '../components/atoms/Star';
import { Constellation } from '../components/organisms/Constellation';
import profile from '../assets/images/profile.png';
import moonLight from '../assets/images/moon-light.png';
import moonDark from '../assets/images/moon-dark.png';

const linkItems = [
  {
    icon: SlSocialInstagram,
    title: 'Instagram Pessoal',
    subtitle: '@leticiatrindadet',
    href: 'https://www.instagram.com/leticiatrindadet/',
    color: '#B989F7',
  },
  {
    icon: SlSocialInstagram,
    title: 'Achados da Leh',
    subtitle: '@achadosdaleh.ofc',
    href: 'https://www.instagram.com/achadosdaleh.ofc/',
    color: '#B989F7',
  },
  {
    icon: FaTiktok,
    title: 'TikTok',
    subtitle: '@leticiatrindadet',
    href: 'https://www.tiktok.com/@leticiatrindadet',
    color: '#B989F7',
  },
  {
    icon: FaYoutube,
    title: 'YouTube',
    subtitle: '/leticiatrindadet',
    href: 'https://www.youtube.com/@leticiatrindadet',
    color: '#B989F7',
  },
  {
    icon: SlSocialInstagram,
    title: 'Desenhos & Nail Art',
    subtitle: '@leeh.trindartes',
    href: 'https://www.instagram.com/leeh.trindartes/',
    color: '#B989F7',
  },
  {
    icon: SiShopee,
    title: 'Minha Loja na Shopee',
    subtitle: 'veja meus achados',
    href: 'https://s.shopee.com.br/8AT7BkSfhN',
    color: '#B989F7',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    subtitle: '/LeticiaTrindade',
    href: 'https://github.com/LeticiaTrindade',
    color: '#B989F7',
  },
  {
    icon: FaLinkedinIn,
    title: 'LinkedIn',
    subtitle: '/in/leticiatrindadett',
    href: 'https://www.linkedin.com/in/leticiatrindadett/',
    color: '#B989F7',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Links() {
  return (
    <div className="links-page relative min-h-screen flex flex-col items-center pb-8">
      {/* Background stars */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <Constellation starCount={25} className="w-full h-full opacity-40" />
      </div>

      {/* Background gradient orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-purple/8 rounded-full blur-[120px] pointer-events-none z-[-1]" />
      <div className="fixed bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-moon-gold/6 rounded-full blur-[100px] pointer-events-none z-[-1]" />

      {/* ============ PROFILE SECTION ============ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center mt-8 mb-8 px-6"
      >
        {/* Profile photo with golden border */}
        <div className="links-profile-wrapper relative mb-6">
          {/* Decorative moon behind profile */}
          <div className="absolute -top-8 -right-8 w-20 h-20 floating pointer-events-none z-0">
            <img
              src={moonLight}
              alt=""
              className="w-full h-full object-contain block dark:hidden opacity-70"
            />
            <img
              src={moonDark}
              alt=""
              className="w-full h-full object-contain hidden dark:block opacity-70"
            />
          </div>

          {/* Stars around profile */}
          <Star className="absolute -top-3 -left-4 w-5 h-5 text-accent-soft-gold z-20" />
          <Star className="absolute -bottom-2 -right-5 w-4 h-4 text-brand-lavender z-20" />
          <Star className="absolute top-1/2 -left-6 w-3 h-3 text-accent-star z-20" />

          {/* Profile image with golden ring */}
          <div className="links-profile-ring">
            <div className="links-profile-inner">
              <img
                src={profile}
                alt="Letícia Trindade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name and description */}
        <p className="font-heading text-[22px] text-brand-purple italic mb-1">
          Olá! Eu sou a
        </p>
        <h1 className="font-heading font-semibold text-[42px] md:text-[52px] leading-tight text-text-primary text-center">
          Letícia<br />Trindade
        </h1>
        <p className="font-body text-[15px] text-text-secondary text-center max-w-sm mt-3 leading-relaxed">
          Desenvolvedora Front-end, apaixonada por tecnologia, arte, livros e por compartilhar coisas que facilitam a vida.
        </p>
        <p className="font-handwritten text-[22px] text-brand-purple mt-3 flex items-center gap-1">
          Uma pessoa criando magia todos os dias <Star className="inline w-4 h-4" />
        </p>
      </motion.div>

      {/* ============ SECTION TITLE ============ */}
      <div className="flex items-center gap-2 mb-6">
        <p className="font-heading text-[20px] text-text-secondary">Me encontre por aí</p>
        <Star className="w-4 h-4 text-accent-soft-gold" />
      </div>

      {/* ============ LINKS LIST ============ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-lg px-6 flex flex-col gap-3 mb-12"
      >
        {linkItems.map((item, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="links-card group"
          >
            {/* Icon */}
            <div className="links-card-icon">
              <item.icon size={20} />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="font-body font-medium text-[15px] text-text-primary group-hover:text-brand-purple transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-[13px] text-text-secondary truncate">
                {item.subtitle}
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight
              size={18}
              className="text-text-disabled group-hover:text-brand-purple group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
            />
          </motion.a>
        ))}
      </motion.div>

      {/* ============ INSPIRATIONAL QUOTE ============ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="links-quote-card mb-8"
      >
        <div className="links-quote-moon floating">
          <Moon size={20} className="text-brand-purple" />
        </div>
        <p className="font-body text-[14px] text-text-secondary text-center leading-relaxed">
          Transformo ideias em experiências<br />
          e pequenos detalhes em grandes descobertas.
        </p>
        <Star className="absolute -top-2 -right-2 w-4 h-4 text-accent-soft-gold" />
        <Star className="absolute -bottom-1 -left-3 w-3 h-3 text-brand-lavender" />
      </motion.div>

      {/* ============ FOOTER ============ */}
      <footer className="text-center pb-4">
        <p className="font-body text-[13px] text-text-disabled">
          © 2026 Letícia Trindade. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function NavBar({ isDark, toggleTheme }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', path: '/', enabled: true },
    { label: 'Sobre', path: '#', enabled: false },
    { label: 'Portfólio', path: '#', enabled: false },
    { label: 'Blog', path: '#', enabled: false },
    { label: 'Achados', path: '#', enabled: false },
    { label: 'Favoritos', path: '#', enabled: false },
    { label: 'Arte', path: '#', enabled: false },
    { label: 'Links', path: '/links', enabled: true },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <Moon className="text-brand-purple group-hover:text-brand-lavender transition-colors" size={28} />
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-2xl leading-none text-text-primary">Letícia</span>
            <span className="font-heading font-semibold text-2xl leading-none text-text-primary">Trindade</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            link.enabled ? (
              <Link 
                key={link.label} 
                to={link.path}
                className={`font-body text-[15px] font-medium transition-colors hover:text-brand-purple ${
                  location.pathname === link.path ? 'text-brand-purple' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <span 
                key={link.label}
                className="nav-disabled-link font-body text-[15px] font-medium text-text-disabled cursor-not-allowed relative"
                title="em breve"
              >
                {link.label}
                <span className="nav-tooltip">em breve</span>
              </span>
            )
          ))}
        </nav>

        {/* Right side actions (Theme + Mobile Menu Toggle) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-16 h-8 rounded-full bg-surface border border-border flex items-center px-1 cursor-pointer transition-all relative"
            aria-label="Toggle Dark Mode"
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${isDark ? 'bg-card text-brand-moon-lavender translate-x-8' : 'bg-brand-lavender text-white translate-x-0'}`}>
              {isDark ? <Moon size={14} /> : <Sun size={14} />}
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-text-primary p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-surface border-b border-border shadow-soft z-40"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                link.enabled ? (
                  <Link 
                    key={link.label} 
                    to={link.path}
                    onClick={closeMenu}
                    className={`font-body text-[16px] font-medium transition-colors hover:text-brand-purple py-2 ${
                      location.pathname === link.path ? 'text-brand-purple' : 'text-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span 
                    key={link.label}
                    className="font-body text-[16px] font-medium text-text-disabled cursor-not-allowed py-2 flex items-center justify-between"
                  >
                    {link.label}
                    <span className="text-[12px] bg-card px-2 py-1 rounded-md border border-border">em breve</span>
                  </span>
                )
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

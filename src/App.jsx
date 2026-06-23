import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/organisms/NavBar';
import { FloatingChat } from './components/organisms/FloatingChat';
import Home from './pages/Home';
import Links from './pages/Links';
import Favoritos from './pages/Favoritos';
import Sobre from './pages/Sobre';
import DesignSystem from './pages/DesignSystem';
import { Constellation } from './components/organisms/Constellation';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      {/* Global Background Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <Constellation starCount={40} className="w-full h-full opacity-60" />
      </div>

      <NavBar isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Main Content Area (padding-top to account for fixed NavBar) */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/links" element={<Links />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>

      <FloatingChat />
    </BrowserRouter>
  );
}

export default App;
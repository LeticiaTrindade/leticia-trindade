// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from './App.jsx' // Importando o componente da Home
import DesignSystem from './pages/DesignSystem.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Menu Global */}
      <nav className="p-4 flex gap-4 bg-surface border-b border-border">
        <Link to="/" className="text-primary font-bold">Home</Link>
        <Link to="/design-system" className="text-text">Design System</Link>
        <Link to="/links" className="text-text">Links</Link>  
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/links" element={<div className="p-4">Página de Links</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
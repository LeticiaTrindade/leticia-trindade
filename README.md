<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" />
</p>

<h1 align="center">🌙 Letícia Trindade — Portfólio Pessoal</h1>

<p align="center">
  <strong>Desenvolvedora Front-end · Criativa por essência · Apaixonada por tecnologia, arte e livros</strong>
</p>

<p align="center">
  Portfólio pessoal com temática lunar e estética delicada, construído com React 19, Tailwind CSS 4, Framer Motion e arquitetura de componentes Atomic Design.
</p>

---

## ✨ Visão Geral

Este é o site pessoal da Letícia Trindade — um espaço que reúne identidade visual, redes sociais, favoritos e projetos futuros. O design segue uma estética **lunar e mística**, com animações suaves, temas claro/escuro e uma experiência visual envolvente.

### 🔗 Páginas

| Página | Rota | Descrição |
|---|---|---|
| **Home** | `/` | Hero com foto, bio, redes sociais e cards de projetos futuros |
| **Links** | `/links` | Link-in-bio estilo Linktree com perfil, lista de links e citação |
| **Favoritos** | `/favoritos` | Vitrine de produtos favoritos com filtros por categoria e modal de opinião |
| **Design System** | `/design-system` | Documentação visual do sistema de design (cores, tipografia, componentes) |

---

## 🎨 Design System

O projeto possui um **Design System** completo documentado em `/design-system`, com tokens definidos via CSS custom properties no [`index.css`](src/index.css).

### Paleta de Cores

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--brand-primary` | `#A488C2` | `#DCA7DB` | Cor principal da marca |
| `--brand-primary-hover` | `#8A6DA8` | `#C596C5` | Hover/interação |
| `--bg` | `#F9F5F8` | `#070A1A` | Fundo da página |
| `--surface` | `#FFFFFF` | `#0F1329` | Superfícies elevadas |
| `--card` | `#FCFAFD` | `#161C36` | Background de cards |
| `--border` | `#E8D9C4` | `#3D3040` | Bordas |
| `--text-primary` | `#46345D` | `#F6F0FF` | Texto principal |
| `--text-secondary` | `#756884` | `#C8B8DD` | Texto secundário |

### Tipografia

| Fonte | Variável | Uso |
|---|---|---|
| **Cormorant Garamond** | `--font-heading` | Títulos e headings |
| **Inter** | `--font-body` | Corpo de texto, labels e UI |
| **Caveat** | `--font-handwritten` | Frases decorativas e assinaturas |

### Tema Claro / Escuro

O tema é controlado pela classe `.dark` no `<html>`, com transição suave de `0.35s`. Os tokens de cor se adaptam automaticamente.

---

## 🧱 Arquitetura de Componentes (Atomic Design)

O projeto segue o padrão **Atomic Design** com 3 níveis:

```
src/components/
├── atoms/          ← Blocos fundamentais
├── molecules/      ← Combinações simples
└── organisms/      ← Componentes complexos
```

### ⚛️ Atoms

| Componente | Arquivo | Descrição |
|---|---|---|
| `FloatingMoon` | [`FloatingMoon.jsx`](src/components/atoms/FloatingMoon.jsx) | Lua decorativa com animação flutuante |
| `GlowDivider` | [`GlowDivider.jsx`](src/components/atoms/GlowDivider.jsx) | Divisor com efeito glow |
| `MoonButton` | [`MoonButton.jsx`](src/components/atoms/MoonButton.jsx) | Botão estilizado (primary/secondary) |
| `MoonGlow` | [`MoonGlow.jsx`](src/components/atoms/MoonGlow.jsx) | Efeito de brilho lunar |
| `SectionTitle` | [`SectionTitle.jsx`](src/components/atoms/SectionTitle.jsx) | Título de seção com sparkles opcionais |
| `Star` | [`Star.jsx`](src/components/atoms/Star.jsx) | Estrela decorativa com animação twinkle |
| `Tooltip` | [`Tooltip.jsx`](src/components/atoms/Tooltip.jsx) | Tooltip reutilizável (top/bottom/left/right) |

### 🧬 Molecules

| Componente | Arquivo | Descrição |
|---|---|---|
| `GlassCard` | [`GlassCard.jsx`](src/components/molecules/GlassCard.jsx) | Card com efeito glassmorphism |
| `MoonCard` | [`MoonCard.jsx`](src/components/molecules/MoonCard.jsx) | Card base do projeto com hover effect |
| `SocialCard` | [`SocialCard.jsx`](src/components/molecules/SocialCard.jsx) | Card de rede social com ícone e link |

### 🏗️ Organisms

| Componente | Arquivo | Descrição |
|---|---|---|
| `Constellation` | [`Constellation.jsx`](src/components/organisms/Constellation.jsx) | Background animado com constelação de estrelas |
| `FavoriteCard` | [`FavoriteCard.jsx`](src/components/organisms/FavoriteCard.jsx) | Card de produto favorito com rating e modal |
| `FloatingChat` | [`FloatingChat.jsx`](src/components/organisms/FloatingChat.jsx) | Botão flutuante de chat com tooltip |
| `HeroImage` | [`HeroImage.jsx`](src/components/organisms/HeroImage.jsx) | Imagem hero com moldura decorativa |
| `NavBar` | [`NavBar.jsx`](src/components/organisms/NavBar.jsx) | Barra de navegação fixa com menu mobile |
| `ProjectCard` | [`ProjectCard.jsx`](src/components/organisms/ProjectCard.jsx) | Card de projeto com badge "em breve" |

---

## 🛠️ Tech Stack

| Tecnologia | Versão | Função |
|---|---|---|
| [React](https://react.dev) | 19.2 | Biblioteca UI |
| [Vite](https://vite.dev) | 8.0 | Bundler e dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4.3 | Framework CSS utilitário |
| [Framer Motion](https://motion.dev) | 12.40 | Animações e transições |
| [React Router DOM](https://reactrouter.com) | 7.18 | Roteamento SPA |
| [Lucide React](https://lucide.dev) | 1.21 | Ícones primários |
| [React Icons](https://react-icons.github.io/react-icons) | 5.6 | Ícones complementares |

---

## 📁 Estrutura de Pastas

```
leticia-portfolio/
├── public/                     # Arquivos estáticos (favicon, manifest)
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── favorites/      # Fotos dos produtos favoritos
│   │       ├── session-universe/ # Imagens dos cards de projeto
│   │       ├── moon-dark.png   # Lua para tema escuro
│   │       ├── moon-light.png  # Lua para tema claro
│   │       └── profile.png     # Foto de perfil
│   ├── components/
│   │   ├── atoms/              # Componentes atômicos
│   │   ├── molecules/          # Componentes moleculares
│   │   └── organisms/          # Componentes organísmicos
│   ├── pages/
│   │   ├── Home.jsx            # Página inicial
│   │   ├── Links.jsx           # Link-in-bio
│   │   ├── Favoritos.jsx       # Vitrine de favoritos
│   │   └── DesignSystem.jsx    # Documentação do design system
│   ├── App.jsx                 # Componente raiz com rotas
│   ├── App.css                 # Estilos do App
│   ├── index.css               # Design tokens e estilos globais
│   └── main.jsx                # Entry point
├── index.html                  # HTML base
├── vite.config.js              # Configuração do Vite
├── package.json                # Dependências e scripts
└── eslint.config.js            # Configuração do ESLint
```

---

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** 18+ 
- **pnpm** (gerenciador de pacotes)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/LeticiaTrindade/leticia-portfolio.git

# Entre na pasta
cd leticia-portfolio

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Servidor de desenvolvimento com hot reload
pnpm dev
```

Acesse em **http://localhost:5173**

### Build de Produção

```bash
# Gerar build otimizado
pnpm build

# Preview do build
pnpm preview
```

### Lint

```bash
# Verificar problemas de código
pnpm lint
```

---

## 🌟 Features

- 🌗 **Tema claro/escuro** — Alternância suave com toggle na navbar
- ✨ **Animações** — Transições com Framer Motion e micro-animações CSS
- 🌙 **Estética lunar** — Luas decorativas, estrelas e constelações de fundo
- 📱 **Responsivo** — Design adaptável para mobile, tablet e desktop
- 🎯 **Tooltips personalizados** — Componente `Tooltip` reutilizável com posicionamento flexível
- 🏗️ **Atomic Design** — Arquitetura de componentes escalável e organizada
- 🔄 **Filtros animados** — Filtragem de favoritos por categoria com AnimatePresence
- 💬 **Modal de opinião** — Detalhes sobre cada produto favorito
- 🌌 **Constelação animada** — Background interativo com estrelas

---

## 📝 Licença

© 2026 Letícia Trindade. Todos os direitos reservados.

---

<p align="center">
  <em>Uma pessoa criando magia todos os dias ✨</em>
</p>

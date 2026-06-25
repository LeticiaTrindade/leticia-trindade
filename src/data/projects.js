import leticiaTrindadeScreenshot from '../assets/images/portfolio/leticia-trindade-screenshot.png';
import ritualPomodoroScreenshot from '../assets/images/portfolio/ritual-pomodoro-screenshot.png';

const projects = [
  {
    id: 'leticia-trindade',
    title: 'leticia-trindade.vercel.app',
    category: ['Front-end', 'React', 'Pessoais', 'Em Desenvolvimento'],
    status: 'Em desenvolvimento',
    date: '2026',
    cover: leticiaTrindadeScreenshot,
    shortDescription: 'Site pessoal atual, criado para reunir minha identidade, projetos, links, favoritos e trajetória como desenvolvedora.',
    fullDescription: 'Projeto pessoal em desenvolvimento que organiza meu universo profissional e criativo em uma experiência web moderna, responsiva e com suporte a tema claro/escuro. A proposta é apresentar minha evolução como desenvolvedora Front-end com uma identidade visual própria, delicada e consistente.',
    problem: 'Centralizar minha presença online em um lugar mais profissional que redes sociais soltas, facilitando o acesso a projetos, contato, história e conteúdos.',
    learnings: 'Componentização em React, rotas com React Router, Tailwind CSS, theme toggle, animações com Framer Motion, organização por Arquitetura Atômica e cuidado com responsividade.',
    challenges: 'Manter a estética sutil de lua, estrelas e tons pastel sem comprometer clareza, acessibilidade, performance e leitura para recrutadores.',
    technologies: ['React', 'Tailwind', 'Git', 'Arquitetura Atômica'],
    screenshots: [leticiaTrindadeScreenshot],
    links: {
      deploy: 'https://leticia-trindade.vercel.app/',
      github: 'https://github.com/LeticiaTrindade',
    },
  },
  {
    id: 'ritual-pomodoro',
    title: 'Ritual Pomodoro',
    category: ['Front-end', 'React', 'Pessoais', 'Concluídos'],
    status: 'Concluído',
    date: '2026',
    cover: ritualPomodoroScreenshot,
    shortDescription: 'Pomodoro Timer moderno com React + TypeScript, temas customizáveis, sessões automáticas e acessibilidade.',
    fullDescription: 'Timer Pomodoro moderno construído com React e TypeScript, baseado no desafio do Roadmap.sh. A interface usa uma proposta glassmorphism, permite customização de cores e temas, salva configurações no localStorage e automatiza transições entre trabalho, pausa curta e pausa longa.',
    problem: 'Ajudar pessoas a manterem foco em ciclos de trabalho e descanso com uma ferramenta simples, configurável, responsiva e agradável de usar.',
    learnings: 'Uso de TypeScript em React, Context API para estado global, persistência com localStorage, controle de tempo com requestAnimationFrame, Web Audio API para som nativo e boas práticas de acessibilidade com ARIA.',
    challenges: 'Sincronizar o timer com precisão, automatizar ciclos de sessões, manter configurações persistentes e oferecer personalização visual sem tornar a experiência confusa.',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Context API', 'localStorage', 'Web Audio API', 'Vite', 'Git'],
    screenshots: [ritualPomodoroScreenshot],
    links: {
      deploy: 'https://ritual-pomodoro.vercel.app/',
      github: 'https://github.com/LeticiaTrindade/pomodoro-app',
    },
  },
];

export default projects;

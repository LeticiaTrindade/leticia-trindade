import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Code2, GitCommit, Layers3, Rocket } from 'lucide-react';
import {
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { FaCss3Alt, FaGitAlt, FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

import { SectionTitle } from '../components/atoms/SectionTitle';
import { PortfolioHero } from '../components/portfolio/organisms/PortfolioHero';
import { SearchBar } from '../components/portfolio/molecules/SearchBar';
import { CategoryFilter } from '../components/portfolio/molecules/CategoryFilter';
import { PortfolioProjectCard } from '../components/portfolio/organisms/PortfolioProjectCard';
import { ProjectModal } from '../components/portfolio/organisms/ProjectModal';
import { StatsCard } from '../components/portfolio/molecules/StatsCard';
import { PortfolioTimeline } from '../components/portfolio/organisms/PortfolioTimeline';
import { TechGrid } from '../components/portfolio/organisms/TechGrid';
import { PortfolioCTA } from '../components/portfolio/organisms/PortfolioCTA';
import projects from '../data/projects';

const filters = [
  'Todos',
  'Front-end',
  'Back-end',
  'Full Stack',
  'Java',
  'React',
  'Acadêmicos',
  'Pessoais',
  'Em Desenvolvimento',
  'Concluídos',
];

const stats = [
  { label: 'Projetos publicados', value: '2', icon: Rocket },
  { label: 'Tecnologias estudadas', value: '8+', icon: Layers3 },
  { label: 'Commits', value: '100+', icon: GitCommit },
  { label: 'Anos programando', value: '7', icon: Code2 },
];

const timeline = [
  { year: '2019', title: 'Primeiro contato com programação' },
  { year: '2020', title: 'Licenciatura em Computação' },
  { year: '2021', title: 'Professora de Programação' },
  { year: '2025', title: 'Primeiro estágio Front-end' },
  { year: '2026', title: 'Viitra' },
  { year: '2026', title: 'Criação do leticiatrindade.com.br' },
];

const techIcons = {
  React: SiReact,
  Java: FaJava,
  Spring: SiSpringboot,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  Firebase: Code2,
  Git: FaGitAlt,
  Vite: Rocket,
  'Context API': Layers3,
  localStorage: Code2,
  'Web Audio API': Code2,
  'Arquitetura Atomica': Layers3,
  'Arquitetura Atômica': Layers3,
  Figma: SiFigma,
};

const technologies = [
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: 'currentColor' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
];

const normalize = (value) =>
  value
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const filterAliases = {
  'em desenvolvimento': 'em desenvolvimento',
  concluidos: 'concluido',
};

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const normalizedSearch = normalize(searchTerm);
    const normalizedFilter = normalize(activeFilter);
    const filterValue = filterAliases[normalizedFilter] || normalizedFilter;

    return projects.filter((project) => {
      const searchableText = normalize([
        project.title,
        project.shortDescription,
        project.status,
        ...project.category,
        ...project.technologies,
      ].join(' '));

      const projectTags = normalize([
        project.status,
        ...project.category,
        ...project.technologies,
      ].join(' '));

      const matchesSearch = searchableText.includes(normalizedSearch);
      const matchesFilter = activeFilter === 'Todos' || projectTags.includes(filterValue);

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, searchTerm]);

  return (
    <div className="relative w-full overflow-hidden pb-14">
      <div className="fixed left-0 top-0 z-[-1] h-[520px] w-[520px] rounded-full bg-brand-primary-light blur-[120px] opacity-40 pointer-events-none" />
      <div className="fixed bottom-0 right-0 z-[-1] h-[420px] w-[420px] rounded-full bg-accent-moon-gold/10 blur-[110px] pointer-events-none" />

      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <PortfolioHero />

        <section className="px-6 pb-12" aria-label="Pesquisar e filtrar projetos">
          <div className="rounded-2xl border border-border bg-surface/80 p-4 shadow-soft backdrop-blur-md">
            <div className="grid gap-4 lg:grid-cols-[minmax(260px,360px)_1fr] lg:items-center">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
              <CategoryFilter filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} />
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <SectionTitle title="Projetos em destaque" showSparkles className="mb-10" />
          <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <PortfolioProjectCard
                  key={project.id}
                  project={project}
                  onDetails={setSelectedProject}
                  techIcons={techIcons}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
              <p className="font-heading text-[24px] text-text-primary">Nenhum projeto encontrado</p>
              <p className="mt-2 text-[14px] text-text-secondary">Tente outro termo de pesquisa ou filtro.</p>
            </div>
          )}
        </section>

        <section className="px-6 pb-20">
          <SectionTitle title="Estatísticas" showSparkles className="mb-10" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard key={stat.label} {...stat} delay={index * 0.07} />
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <SectionTitle title="Linha do tempo" showSparkles className="mb-12" />
          <PortfolioTimeline items={timeline} />
        </section>

        <section className="px-6 pb-20">
          <SectionTitle title="Tecnologias" showSparkles className="mb-10" />
          <TechGrid technologies={technologies} />
        </section>

        <div className="px-6">
          <PortfolioCTA />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            techIcons={techIcons}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

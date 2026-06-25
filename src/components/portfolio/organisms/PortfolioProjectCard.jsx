import { motion } from 'framer-motion';
import { ExternalLink, Info } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '../atoms/Badge';
import { TechChip } from '../atoms/TechChip';

export function PortfolioProjectCard({ project, onDetails, techIcons }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-glow"
    >
      <div className="relative h-48 overflow-hidden bg-surface">
        <img
          src={project.cover}
          alt={`Imagem de capa do projeto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <Badge variant={project.status}>{project.status}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-[24px] font-semibold leading-tight text-text-primary transition-colors group-hover:text-brand-purple">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-[14px] leading-relaxed text-text-secondary">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.technologies.map((tech) => (
            <TechChip key={tech} icon={techIcons[tech]}>
              {tech}
            </TechChip>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <a
            href={project.links.deploy}
            target={project.links.deploy === '#' ? undefined : '_blank'}
            rel={project.links.deploy === '#' ? undefined : 'noopener noreferrer'}
            aria-label={`Ver projeto ${project.title}`}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <ExternalLink size={17} aria-hidden="true" />
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir GitHub do projeto ${project.title}`}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <FaGithub size={17} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => onDetails(project)}
            aria-label={`Ver detalhes do projeto ${project.title}`}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-brand-primary/50 bg-brand-primary-light text-brand-purple transition-colors hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <Info size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

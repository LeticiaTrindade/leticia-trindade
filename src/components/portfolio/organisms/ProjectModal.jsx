import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '../atoms/Badge';
import { TechChip } from '../atoms/TechChip';

function DetailBlock({ title, children }) {
  return (
    <section>
      <h4 className="mb-2 font-heading text-[19px] font-semibold text-text-primary">{title}</h4>
      <p className="text-[14px] leading-relaxed text-text-secondary">{children}</p>
    </section>
  );
}

export function ProjectModal({ project, onClose, techIcons }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.25 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="fixed left-1/2 top-1/2 z-[101] flex max-h-[90vh] w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-glow"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border bg-brand-primary-light/25 p-5">
          <div>
            <Badge variant={project.status}>{project.status}</Badge>
            <h3 id="project-modal-title" className="mt-3 font-heading text-[30px] font-semibold leading-tight text-text-primary">
              {project.title}
            </h3>
            <p className="mt-1 text-[13px] text-text-disabled">{project.date} · {project.category.join(' · ')}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do projeto"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 md:p-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5">
              <DetailBlock title="Descricao completa">{project.fullDescription}</DetailBlock>
              <DetailBlock title="Problema que resolve">{project.problem}</DetailBlock>
              <DetailBlock title="Aprendizados">{project.learnings}</DetailBlock>
              <DetailBlock title="Desafios">{project.challenges}</DetailBlock>

              <section>
                <h4 className="mb-3 font-heading text-[19px] font-semibold text-text-primary">Tecnologias</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechChip key={tech} icon={techIcons[tech]}>
                      {tech}
                    </TechChip>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section>
                <h4 className="mb-3 font-heading text-[19px] font-semibold text-text-primary">Screenshots</h4>
                <div className="grid gap-3">
                  {project.screenshots.map((screenshot) => (
                    <img
                      key={screenshot}
                      src={screenshot}
                      alt={`Screenshot ilustrativo do projeto ${project.title}`}
                      className="h-48 w-full rounded-xl border border-border object-cover"
                    />
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-card p-5">
                <h4 className="mb-4 font-heading text-[19px] font-semibold text-text-primary">Links e status</h4>
                <dl className="space-y-3 text-[14px]">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-text-secondary">Data</dt>
                    <dd className="font-medium text-text-primary">{project.date}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-text-secondary">Status</dt>
                    <dd className="font-medium text-text-primary">{project.status}</dd>
                  </div>
                </dl>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a
                    href={project.links.deploy}
                    target={project.links.deploy === '#' ? undefined : '_blank'}
                    rel={project.links.deploy === '#' ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-brand-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    <ExternalLink size={16} aria-hidden="true" />
                    Deploy
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-[14px] font-semibold text-text-secondary transition-colors hover:border-brand-primary hover:text-brand-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </motion.div>
    </>
  );
}

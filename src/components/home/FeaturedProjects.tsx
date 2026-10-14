import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Github } from '../common/Icons';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';
import SectionHeading from '../common/SectionHeading';

interface ProjectCardProps {
  project: Project;
  index: number;
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    completed: { label: 'Completed', className: 'badge-success' },
    'in-progress': { label: 'In Progress', className: 'badge-warning' },
    planned: { label: 'Planned', className: 'badge-neutral' },
  };
  const { label, className } = map[status];
  return <span className={`badge ${className}`}>{label}</span>;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      className="card flex flex-col h-full group overflow-hidden"
      aria-label={`${project.title} project`}
    >
      {/* Project header banner */}
      <div
        className="h-2 w-full"
        style={{
          background: 'linear-gradient(90deg, var(--accent-dark), var(--accent-light))',
        }}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--accent)' }}
          >
            {project.category}
          </span>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p
          className="text-sm mb-4 flex-1"
          style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
        >
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="tag">+{project.technologies.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div
          className="flex items-center gap-2 pt-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-primary btn-sm flex-1 justify-center"
          >
            View Case Study
            <ArrowRight size={14} />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-icon"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

interface FeaturedProjectsProps {
  projects: Project[];
  showAll?: boolean;
}

export default function FeaturedProjects({ projects, showAll = false }: FeaturedProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const displayed = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      className="section"
      style={{ background: 'var(--bg-surface)' }}
      id="projects"
      aria-labelledby="projects-heading"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Featured Projects"
            title="What I've Built"
            description="A selection of projects I've designed, developed, and shipped, each one addressing a real problem."
            id="projects-heading"
          />
        </motion.div>

        <div className="project-grid">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-center mt-10"
          >
            <Link to="/projects" className="btn btn-secondary btn-lg">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export { ProjectCard };

import { motion } from 'framer-motion';
import { GraduationCap, FolderKanban, Award, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import { experiences } from '../data/experience';
import type { ExperienceEntry } from '../types';

const typeConfig: Record<ExperienceEntry['type'], { label: string; Icon: LucideIcon; color: string }> = {
  education: { label: 'Education', Icon: GraduationCap, color: 'var(--accent)' },
  project: { label: 'Project', Icon: FolderKanban, color: '#22c55e' },
  certification: { label: 'Certification', Icon: Award, color: '#f59e0b' },
  work: { label: 'Work', Icon: Briefcase, color: '#ec4899' },
};

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const config = typeConfig[entry.type];
  const Icon = config.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="timeline-item"
      aria-labelledby={`exp-${entry.id}`}
    >
      <div className="card p-5 md:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${config.color}18` }}
            >
              <Icon size={17} style={{ color: config.color }} />
            </div>
            <div>
              <h3
                id={`exp-${entry.id}`}
                className="font-bold text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                {entry.title}
              </h3>
              <p className="text-sm font-medium" style={{ color: config.color }}>
                {entry.organization}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <span className={`badge ${entry.type === 'education' ? 'badge-accent' : entry.type === 'certification' ? 'badge-warning' : 'badge-success'}`}>
              {config.label}
            </span>
            {(entry.startDate || entry.endDate) && (
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {entry.startDate}
                {entry.endDate ? ` – ${entry.endDate}` : ''}
                {entry.current ? ' – Present' : ''}
              </span>
            )}
            {entry.location && (
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {entry.location}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          {entry.description}
        </p>

        {/* Technologies */}
        {entry.technologies && entry.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function ExperiencePage() {
  const education = experiences.filter((e) => e.type === 'education');
  const projects = experiences.filter((e) => e.type === 'project');
  const certifications = experiences.filter((e) => e.type === 'certification');

  return (
    <PageContainer>
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="Experience & Education"
              title="Background & Journey"
              description="My academic background, project experience, and certifications."
            />
          </motion.div>

          {/* Education */}
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
              Education
            </h2>
            <div className="timeline">
              {education.map((entry, i) => (
                <ExperienceCard key={entry.id} entry={entry} index={i} />
              ))}
            </div>
          </div>

          {/* Project Experience */}
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
              Project Experience
            </h2>
            <div className="timeline">
              {projects.map((entry, i) => (
                <ExperienceCard key={entry.id} entry={entry} index={i} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--text-muted)' }}>
              Certifications
            </h2>
            <div className="timeline">
              {certifications.map((entry, i) => (
                <ExperienceCard key={entry.id} entry={entry} index={i} />
              ))}
            </div>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm mt-8"
            style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}
          >
            Project experience reflects academic and personal work. Employment dates and formal roles
            are only shown when confirmed.
          </motion.p>
        </div>
      </section>
    </PageContainer>
  );
}

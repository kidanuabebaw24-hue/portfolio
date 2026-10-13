import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, CheckCircle2, Clock, AlertCircle,
} from 'lucide-react';
import { Github } from '../components/common/Icons';
import PageContainer from '../components/layout/PageContainer';
import { getProjectBySlug } from '../data/projects';
import type { ProjectFeature } from '../types';

function FeatureStatusIcon({ status }: { status: ProjectFeature['status'] }) {
  if (status === 'implemented') return <CheckCircle2 size={14} style={{ color: '#22c55e' }} />;
  if (status === 'in-progress') return <Clock size={14} style={{ color: '#fbbf24' }} />;
  return <AlertCircle size={14} style={{ color: 'var(--text-muted)' }} />;
}

function FeatureStatusLabel({ status }: { status: ProjectFeature['status'] }) {
  const map = { implemented: 'Implemented', 'in-progress': 'In Progress', planned: 'Planned' };
  const colorMap = { implemented: '#22c55e', 'in-progress': '#fbbf24', planned: 'var(--text-muted)' };
  return (
    <span className="text-xs" style={{ color: colorMap[status] }}>
      {map[status]}
    </span>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const statusMap = {
    completed: { label: 'Completed', className: 'badge-success' },
    'in-progress': { label: 'In Progress', className: 'badge-warning' },
    planned: { label: 'Planned', className: 'badge-neutral' },
  };

  return (
    <PageContainer>
      <article>
        {/* Hero */}
        <section
          className="section"
          style={{ background: 'var(--bg-surface)', paddingBottom: '3rem' }}
        >
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 mb-8 text-sm font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                <ArrowLeft size={16} />
                Back to Projects
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="section-label" style={{ marginBottom: 0 }}>
                  {project.category}
                </span>
                <span className={`badge ${statusMap[project.status].className}`}>
                  {statusMap[project.status].label}
                </span>
              </div>

              <h1
                className="font-black mb-4"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                {project.title}
              </h1>

              <p
                className="text-lg mb-6"
                style={{ color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 680 }}
              >
                {project.summary}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label={`${project.title} source code on GitHub`}
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                ) : (
                  <span
                    className="btn btn-ghost text-sm"
                    style={{ color: 'var(--text-muted)', cursor: 'default' }}
                  >
                    Source code available on request
                  </span>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                ) : (
                  <span
                    className="btn btn-ghost text-sm"
                    style={{ color: 'var(--text-muted)', cursor: 'default' }}
                  >
                    Demo coming soon
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case study body */}
        <section className="section">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 flex flex-col gap-8">

                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="card p-6"
                >
                  <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    Overview
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    {project.description}
                  </p>
                </motion.div>

                {/* Problem */}
                {project.problem && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Problem Statement
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                      {project.problem}
                    </p>
                  </motion.div>
                )}

                {/* Target users */}
                {project.targetUsers && project.targetUsers.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Target Users
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {project.targetUsers.map((user) => (
                        <li
                          key={user}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ background: 'var(--accent)' }}
                            aria-hidden="true"
                          />
                          {user}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Solution */}
                {project.solution && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Solution
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                      {project.solution}
                    </p>
                  </motion.div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                      Key Features
                    </h2>
                    <div className="flex flex-col gap-3">
                      {project.features.map((feature) => (
                        <div key={feature.name} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <FeatureStatusIcon status={feature.status} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-0.5">
                              <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                                {feature.name}
                              </span>
                              <FeatureStatusLabel status={feature.status} />
                            </div>
                            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Contribution */}
                {project.contribution && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      My Contribution
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                      {project.contribution}
                    </p>
                  </motion.div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Challenges Encountered
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {project.challenges.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#f87171' }} aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Decisions */}
                {project.decisions && project.decisions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Technical Decisions
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {project.decisions.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--accent)' }} aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Future improvements */}
                {project.futureImprovements && project.futureImprovements.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="card p-6"
                  >
                    <h2 className="text-lg font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Future Improvements
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {project.futureImprovements.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#22c55e' }} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-5">
                {/* Quick info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="card p-5"
                >
                  <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
                    Project Info
                  </h3>
                  <dl className="flex flex-col gap-3">
                    <div>
                      <dt className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>Category</dt>
                      <dd className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)' }}>Status</dt>
                      <dd><span className={`badge ${statusMap[project.status].className}`}>{statusMap[project.status].label}</span></dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-muted)' }}>Tech Stack</dt>
                      <dd className="flex flex-wrap gap-1">
                        {project.technologies.map((t) => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </motion.div>

                {/* Links */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="card p-5"
                >
                  <h3 className="font-bold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
                    Links
                  </h3>
                  <div className="flex flex-col gap-2">
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                        <Github size={14} />
                        Source Code
                      </a>
                    ) : (
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Source code available on request</p>
                    )}
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : (
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Demo not yet available</p>
                    )}
                  </div>
                </motion.div>

                {/* Feature count */}
                {project.features && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="card p-5"
                  >
                    <h3 className="font-bold text-sm mb-3" style={{ color: 'var(--text-primary)' }}>
                      Implementation Status
                    </h3>
                    <div className="flex flex-col gap-2">
                      {(['implemented', 'in-progress', 'planned'] as const).map((status) => {
                        const count = project.features!.filter((f) => f.status === status).length;
                        const labels = { implemented: 'Implemented', 'in-progress': 'In Progress', planned: 'Planned' };
                        const colors = { implemented: '#22c55e', 'in-progress': '#fbbf24', planned: 'var(--text-muted)' };
                        return (
                          <div key={status} className="flex justify-between items-center text-sm">
                            <span style={{ color: 'var(--text-secondary)' }}>{labels[status]}</span>
                            <span className="font-bold" style={{ color: colors[status] }}>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12 text-center">
              <Link to="/projects" className="btn btn-secondary">
                <ArrowLeft size={16} />
                Back to All Projects
              </Link>
            </div>
          </div>
        </section>
      </article>
    </PageContainer>
  );
}

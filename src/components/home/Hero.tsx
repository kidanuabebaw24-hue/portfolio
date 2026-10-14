import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin, Briefcase } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { Link } from 'react-router-dom';
import { personalInfo, socialLinks } from '../../data/navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
      id="home"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 hero-grid opacity-40"
        aria-hidden="true"
      />

      {/* Gradient blobs */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: '-10%',
          right: '-5%',
          width: '45vw',
          height: '45vw',
          background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '5%',
          left: '-10%',
          width: '35vw',
          height: '35vw',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-20">
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            {/* Name */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-sm font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'var(--accent)' }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-black mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                lineHeight: '1.08',
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}
            >
              {personalInfo.name}
            </motion.h1>

            {/* Tagline */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <h2
                className="text-xl font-semibold mb-1"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                }}
              >
                <span className="gradient-text">{personalInfo.title}</span>
                {' · '}
                {personalInfo.tagline}
              </h2>
            </motion.div>

            {/* Headline */}
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                fontWeight: 700,
                lineHeight: 1.25,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              Turning Ideas Into Software That Solves Real Problems.
            </motion.p>

            {/* Description */}
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="section-desc mb-8"
              style={{ maxWidth: '560px' }}
            >
              I'm a Computer Engineering student and software developer focused on building practical
              web applications, mobile experiences, backend systems, and data-driven products. I enjoy
              solving real-world problems and helping businesses turn ideas into working software.
            </motion.p>

            {/* Meta info */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <span
                className="flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                <MapPin size={14} />
                {personalInfo.location}
              </span>
              <span
                className="flex items-center gap-1.5 text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                <Briefcase size={14} />
                Computer Engineering Student
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link
                to="/projects"
                className="btn btn-primary btn-lg"
                aria-label="View my projects"
              >
                View My Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary btn-lg"
                aria-label="Contact me to work together"
              >
                Let's Work Together
              </Link>
              <a
                href={personalInfo.cvPath}
                download="Kidanu-Abebaw-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg"
                aria-label="Download CV"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={8}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon"
                aria-label="GitHub profile"
                title="View GitHub profile"
              >
                <Github size={20} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-icon"
                aria-label="LinkedIn profile"
                title="View LinkedIn profile"
              >
                <Linkedin size={20} style={{ color: 'var(--text-secondary)' }} />
              </a>
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Available for remote work worldwide
              </span>
            </motion.div>
          </div>

          {/* Avatar / Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Outer decorative ring */}
              <div
                className="relative rounded-full p-1"
                style={{
                  width: 'clamp(240px, 30vw, 340px)',
                  height: 'clamp(240px, 30vw, 340px)',
                  background: 'linear-gradient(135deg, var(--accent-dark), var(--accent), var(--accent-light))',
                  boxShadow: 'var(--shadow-accent)',
                }}
              >
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover"
                  style={{ background: 'var(--bg-elevated)', objectPosition: 'center 20%' }}
                />
              </div>

              {/* Floating skill badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 card px-3 py-2"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Full-Stack
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Web • Mobile • API
                </p>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-6 card px-3 py-2"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>
                  React · Flutter · Node.js
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  Core stack
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full flex justify-center pt-1.5"
          style={{ border: '2px solid var(--border)' }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

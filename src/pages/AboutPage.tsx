import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import { personalInfo, socialLinks } from '../data/navigation';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const interests = [
  'Full-Stack Web Development',
  'Mobile Application Development',
  'Backend Systems & API Design',
  'Database Architecture',
  'Technology Entrepreneurship',
  'Open Source Contribution',
];

const values = [
  {
    title: 'Practical over perfect',
    desc: 'I prefer shipping working solutions that solve real problems over endlessly refining code that never gets used.',
  },
  {
    title: 'Learning through building',
    desc: 'I learn most effectively by building real projects. Each one teaches me something that a tutorial never could.',
  },
  {
    title: 'Clear communication',
    desc: 'I believe good software starts with understanding what the client or user actually needs before writing a single line.',
  },
  {
    title: 'Honest representation',
    desc: 'I present my skills and experience accurately. I\'d rather be honest about what I don\'t know than overpromise.',
  },
];

export default function AboutPage() {
  return (
    <PageContainer>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-14 items-center">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex-shrink-0"
            >
              <div
                className="relative rounded-full p-1"
                style={{
                  width: 'clamp(200px, 25vw, 280px)',
                  height: 'clamp(200px, 25vw, 280px)',
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
            </motion.div>

            {/* Intro */}
            <div className="flex-1">
              <motion.span
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="section-label"
              >
                About Me
              </motion.span>
              <motion.div className="accent-line" custom={0} variants={fadeUp} initial="hidden" animate="visible" />
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="section-title mb-4"
              >
                Hi, I'm Kidanu Abebaw
              </motion.h1>

              <div className="space-y-4 mb-6">
                {[
                  `I'm a Computer Engineering student at Bahir Dar University with a strong interest in software engineering, full-stack development, mobile applications, and technology-driven entrepreneurship.`,
                  `I enjoy building software that addresses practical challenges from trading analytics and civic issue reporting to digital workflow management. Through my projects, I continue developing skills in frontend interfaces, backend APIs, database design, and software integration.`,
                  `My goal is to work with ambitious teams and businesses, contribute to meaningful software projects, and grow into a stronger software engineer while building products of my own.`,
                ].map((para, i) => (
                  <motion.p
                    key={i}
                    custom={i + 2}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                <a
                  href={personalInfo.cvPath}
                  download="Kidanu-Abebaw-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <Link to="/projects" className="btn btn-secondary">
                  View Projects
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Interests"
            title="What Drives Me"
            description="Areas I'm actively exploring and building expertise in."
          />
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, i) => (
              <motion.span
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="badge badge-accent text-sm py-2 px-4"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <SectionHeading
            label="Work Approach"
            title="How I Work"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="card p-6"
              >
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {val.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="section">
        <div className="container max-w-lg">
          <SectionHeading label="Connect" title="Get In Touch" centered />
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="card p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-muted)' }}>
                <Mail size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Email</p>
                <p className="text-sm break-all" style={{ color: 'var(--accent)' }}>{socialLinks.email}</p>
              </div>
            </a>
            <a
              href={`tel:${socialLinks.phone}`}
              className="card p-4 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-muted)' }}>
                <Phone size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Phone</p>
                <p className="text-sm" style={{ color: 'var(--accent)' }}>{socialLinks.phone}</p>
              </div>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="card p-4 flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-muted)' }}>
                <Github size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>GitHub</p>
                <p className="text-sm break-all" style={{ color: 'var(--text-secondary)' }}>github.com/kidanuabebaw24-hue</p>
              </div>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="card p-4 flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-muted)' }}>
                <Linkedin size={18} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>LinkedIn</p>
                <p className="text-sm break-all" style={{ color: 'var(--text-secondary)' }}>linkedin.com/in/kidanu-abebaw-67957a43b</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

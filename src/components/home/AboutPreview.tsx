import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '../common/SectionHeading';

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const highlights = [
    { label: 'Focus', value: 'Full-Stack & Mobile' },
    { label: 'Education', value: 'Computer Engineering' },
    { label: 'Location', value: 'Bahir Dar, Ethiopia' },
    { label: 'Status', value: 'Open to Opportunities' },
  ];

  return (
    <section className="section" id="about" aria-labelledby="about-heading" ref={ref}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-shrink-0 w-full lg:w-auto"
          >
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="card p-5"
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.label}
                  </p>
                  <p className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Projects count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 card p-6 text-center max-w-sm mx-auto lg:mx-0"
              style={{
                background: 'linear-gradient(135deg, var(--accent-dark), var(--accent))',
                border: 'none',
              }}
            >
              <p className="text-4xl font-black text-white mb-1">3+</p>
              <p className="text-sm text-white/80">Featured Projects</p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="flex-1"
          >
            <SectionHeading
              label="About Me"
              title="Building Software That Matters"
              id="about-heading"
            />

            <div className="space-y-4 mb-8">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I'm a Computer Engineering student at Bahir Dar University with a strong interest in
                software engineering, full-stack development, mobile applications, and
                technology-driven entrepreneurship.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I enjoy building software that addresses practical challenges from trading analytics
                and civic issue reporting to digital workflow management. Through my projects, I
                continue developing skills in frontend interfaces, backend APIs, database design, and
                software integration.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                My goal is to work with ambitious teams and businesses, contribute to meaningful
                software projects, and grow into a stronger software engineer while building products
                of my own.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="btn btn-primary">
                More About Me
                <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                See My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

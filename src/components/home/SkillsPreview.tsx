import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Monitor, Server, Smartphone, Database, Wrench, Code2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { skillCategories } from '../../data/skills';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Server,
  Smartphone,
  Database,
  Wrench,
  Code2,
};

export default function SkillsPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Technical Skills"
            title="My Technology Stack"
            description="Technologies and tools I use to build web applications, mobile apps, and backend systems."
            id="skills-heading"
          />
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 + i * 0.07, duration: 0.45, ease: 'easeOut' }}
                className="card p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-muted)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="tag">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-10"
        >
          <Link to="/skills" className="btn btn-secondary">
            View Full Skills Overview
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

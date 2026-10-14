import { motion } from 'framer-motion';
import {
  Monitor, Server, Smartphone, Database, Wrench, Code2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import { skillCategories } from '../data/skills';

const iconMap: Record<string, LucideIcon> = {
  Monitor, Server, Smartphone, Database, Wrench, Code2,
};

export default function SkillsPage() {
  return (
    <PageContainer>
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="Technical Skills"
              title="My Technology Stack"
              description="Technologies, tools, and practices I use to design, build, and deploy software. This is a working list that evolves as I learn and ship more projects."
            />
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, i) => {
              const Icon = iconMap[category.icon] ?? Code2;
              return (
                <motion.section
                  key={category.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="card p-6"
                  aria-labelledby={`skill-cat-${category.id}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-muted)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--accent)' }} />
                    </div>
                    <h2
                      id={`skill-cat-${category.id}`}
                      className="font-bold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {category.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="tag"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-center mt-10"
            style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}
          >
            This list reflects technologies I've used across projects and coursework. Proficiency
            varies, and I don't claim equal depth in every technology listed.
          </motion.p>
        </div>
      </section>
    </PageContainer>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe, LayoutDashboard, Server, Smartphone, Wrench, ArrowRight, MessageSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/services';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutDashboard,
  Server,
  Smartphone,
  Wrench,
};

export default function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      className="section"
      style={{ background: 'var(--bg-surface)' }}
      id="services"
      aria-labelledby="services-heading"
      ref={ref}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            label="Services"
            title="What I Can Build For You"
            description="I work with businesses, startups, and individuals to turn software requirements into working products."
            id="services-heading"
          />
        </motion.div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.05 + i * 0.08, duration: 0.45, ease: 'easeOut' }}
                className="card p-6 flex flex-col gap-4"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'var(--accent-muted)' }}
                >
                  <Icon size={22} style={{ color: 'var(--accent)' }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
                  >
                    {service.description}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: 'var(--text-muted)',
                      fontStyle: 'italic',
                    }}
                  >
                    {service.businessValue}
                  </p>
                </div>

                {/* Deliverables */}
                <ul className="flex flex-col gap-1">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--accent)' }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="btn btn-ghost btn-sm justify-start gap-2 -ml-1 mt-auto"
                  style={{ color: 'var(--accent)' }}
                >
                  <MessageSquare size={14} />
                  Discuss Your Project
                </Link>
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
          <Link to="/services" className="btn btn-secondary btn-lg">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

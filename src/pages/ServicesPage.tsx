import { motion } from 'framer-motion';
import { Globe, LayoutDashboard, Server, Smartphone, Wrench, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import SectionHeading from '../components/common/SectionHeading';
import { services } from '../data/services';

const iconMap: Record<string, LucideIcon> = {
  Globe, LayoutDashboard, Server, Smartphone, Wrench,
};

export default function ServicesPage() {
  return (
    <PageContainer>
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              label="Services"
              title="What I Can Build For You"
              description="I work with businesses, startups, and individuals to design and develop software that solves real problems. Here's how I can help."
            />
          </motion.div>

          <div className="flex flex-col gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="card p-6 md:p-8"
                  aria-labelledby={`service-${service.id}`}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-muted)' }}
                    >
                      <Icon size={28} style={{ color: 'var(--accent)' }} />
                    </div>

                    <div className="flex-1">
                      <h2
                        id={`service-${service.id}`}
                        className="text-xl font-bold mb-2"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {service.title}
                      </h2>
                      <p
                        className="mb-4"
                        style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}
                      >
                        {service.description}
                      </p>

                      {/* Business value */}
                      <div
                        className="card-elevated rounded-lg p-3 mb-4 text-sm"
                        style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}
                      >
                        💡 {service.businessValue}
                      </div>

                      {/* Deliverables */}
                      <div>
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-2"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          What you get
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-sm"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ background: 'var(--accent)' }}
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-start md:items-center flex-shrink-0">
                      <Link
                        to="/contact"
                        className="btn btn-primary whitespace-nowrap"
                      >
                        <MessageSquare size={16} />
                        Discuss Project
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="card p-6 mt-8 text-center"
          >
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Not sure which service fits your needs?{' '}
              <Link to="/contact" style={{ color: 'var(--accent)' }}>
                Send me a message
              </Link>{' '}
              describing what you're trying to build and we'll figure out the best approach together.
            </p>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
}

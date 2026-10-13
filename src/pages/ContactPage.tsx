import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';
import { Github, Linkedin } from '../components/common/Icons';
import PageContainer from '../components/layout/PageContainer';
import ContactForm from '../components/contact/ContactForm';
import SectionHeading from '../components/common/SectionHeading';
import { socialLinks, personalInfo } from '../data/navigation';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    isExternal: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kidanuabebaw',
    href: socialLinks.github,
    isExternal: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kidanu-abebaw',
    href: socialLinks.linkedin,
    isExternal: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
    isExternal: false,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Usually within 24–48 hours',
    href: null,
    isExternal: false,
  },
];

export default function ContactPage() {
  return (
    <PageContainer>
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <SectionHeading
              label="Get In Touch"
              title="Have a Project in Mind? Let's Build Something Useful."
              description="If you're looking for a developer to help build a website, application, backend system, or digital product, I'd be happy to discuss your requirements."
            />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex-1 max-w-xl"
            >
              <ContactForm />
            </motion.div>

            {/* Contact details */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="flex-shrink-0 w-full lg:w-72"
              aria-label="Contact information"
            >
              <div className="card p-6 mb-5">
                <h2 className="font-bold text-base mb-4" style={{ color: 'var(--text-primary)' }}>
                  Contact Information
                </h2>
                <div className="flex flex-col gap-4">
                  {contactInfo.map(({ icon: Icon, label, value, href, isExternal }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--accent-muted)' }}
                      >
                        <Icon size={15} style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="text-sm font-medium"
                            style={{ color: 'var(--accent)' }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              {personalInfo.isAvailable && (
                <div
                  className="card p-4"
                  style={{
                    background: 'rgba(34, 197, 94, 0.05)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="status-dot" />
                    <p className="text-sm font-semibold" style={{ color: '#22c55e' }}>
                      Currently Available
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Open to freelance projects and remote opportunities.
                  </p>
                </div>
              )}
            </motion.aside>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

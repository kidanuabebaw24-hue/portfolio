import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Code2 } from 'lucide-react';
import { Github, Linkedin } from '../common/Icons';
import { navItems, socialLinks, personalInfo } from '../../data/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
      }}
      role="contentinfo"
    >
      <div className="container py-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <Code2 size={16} color="white" strokeWidth={2.5} />
              </div>
              Kidanu Abebaw
            </Link>
            <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
              Software Developer focused on building practical web, mobile, and backend solutions.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-icon"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Github size={18} style={{ color: 'var(--text-muted)' }} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-icon"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <Linkedin size={18} style={{ color: 'var(--text-muted)' }} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="btn btn-ghost btn-icon"
                aria-label="Send email"
                title="Email"
              >
                <Mail size={18} style={{ color: 'var(--text-muted)' }} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-widest"
              style={{ color: 'var(--text-muted)' }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-widest"
              style={{ color: 'var(--text-muted)' }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href={`mailto:${socialLinks.email}`} className="hover:text-accent transition-colors">
                {socialLinks.email}
              </a>
              <span>{personalInfo.location}</span>
              <span className="text-sm" style={{ color: 'var(--accent)' }}>
                {personalInfo.isAvailable ? 'Available for hire' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            © {year} Kidanu Abebaw. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              Privacy Notice
            </Link>
            <button
              onClick={scrollToTop}
              className="btn btn-ghost btn-icon"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={16} style={{ color: 'var(--text-muted)' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { navItems } from '../../data/navigation';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ESC key closes menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Click outside closes menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen, closeMenu]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      ref={navRef as React.RefObject<HTMLElement>}
      className="nav"
      style={{ boxShadow: scrolled ? 'var(--shadow-sm)' : 'none' }}
      role="banner"
    >
      <div className="container">
        <nav
          className="flex items-center justify-between h-16"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Kidanu Abebaw - Home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--accent)' }}
            >
              <Code2 size={16} color="white" strokeWidth={2.5} />
            </div>
            <span>
              Kidanu<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
                  style={{
                    color: isActive(item.href) ? 'var(--accent)' : 'var(--text-secondary)',
                    background: isActive(item.href) ? 'var(--accent-muted)' : 'transparent',
                  }}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-icon"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex' }}
                >
                  {theme === 'dark' ? (
                    <Sun size={18} style={{ color: 'var(--text-secondary)' }} />
                  ) : (
                    <Moon size={18} style={{ color: 'var(--text-secondary)' }} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Contact CTA */}
            <Link to="/contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Let's Talk
            </Link>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen((v) => !v)}
              className="btn btn-ghost btn-icon lg:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="true"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 15, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  style={{ display: 'flex' }}
                >
                  {menuOpen ? (
                    <X size={20} style={{ color: 'var(--text-primary)' }} />
                  ) : (
                    <Menu size={20} style={{ color: 'var(--text-primary)' }} />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              background: 'var(--bg-surface)',
              borderTop: '1px solid var(--border)',
              overflow: 'hidden',
            }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container py-4">
              <ul className="flex flex-col gap-1" role="list">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="flex items-center px-4 py-3 rounded-lg font-medium transition-colors"
                      style={{
                        color: isActive(item.href) ? 'var(--accent)' : 'var(--text-secondary)',
                        background: isActive(item.href) ? 'var(--accent-muted)' : 'transparent',
                      }}
                      onClick={closeMenu}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <Link
                  to="/contact"
                  className="btn btn-primary w-full justify-center"
                  onClick={closeMenu}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

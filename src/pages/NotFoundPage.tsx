import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';

export default function NotFoundPage() {
  return (
    <PageContainer>
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
        aria-labelledby="not-found-heading"
      >
        <div className="container text-center max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="font-black mb-2"
              style={{
                fontSize: 'clamp(5rem, 15vw, 8rem)',
                lineHeight: 1,
                color: 'var(--accent-muted)',
                letterSpacing: '-0.05em',
              }}
            >
              404
            </p>
            <h1
              id="not-found-heading"
              className="text-2xl font-bold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Page Not Found
            </h1>
            <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
              The page you're looking for doesn't exist or may have been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/" className="btn btn-primary">
                <Home size={16} />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn btn-secondary"
                aria-label="Go back to previous page"
              >
                <ArrowLeft size={16} />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
}

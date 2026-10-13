import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../data/navigation';

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="section" id="contact-cta" ref={ref} aria-label="Contact call to action">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Get In Touch</span>
          <div className="accent-line mx-auto" />
          <h2
            className="section-title mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
          >
            Have a Project in Mind?
            <br />
            <span className="gradient-text">Let's Build Something Useful.</span>
          </h2>
          <p className="section-desc mx-auto mb-8">
            If you're looking for a developer to help build a website, application, backend system,
            or digital product, I'd be happy to discuss your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
            <a
              href={`mailto:${socialLinks.email}`}
              className="btn btn-secondary btn-lg"
              aria-label="Send email directly"
            >
              <Mail size={18} />
              {socialLinks.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

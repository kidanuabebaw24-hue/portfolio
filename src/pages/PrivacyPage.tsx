import { motion } from 'framer-motion';
import PageContainer from '../components/layout/PageContainer';

export default function PrivacyPage() {
  return (
    <PageContainer>
      <section className="section">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Legal</span>
            <div className="accent-line" />
            <h1 className="section-title mb-6">Privacy Notice</h1>

            <div className="flex flex-col gap-6" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <section>
                <h2 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  What information is collected
                </h2>
                <p>
                  When you submit the contact form on this website, the following information is
                  collected: your name, email address, project type, optional budget range, project
                  description, and optional timeline preference.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  How it is used
                </h2>
                <p>
                  Your information is used solely to respond to your inquiry. It is not used for
                  marketing, shared with third parties, or stored beyond what is necessary to handle
                  your message.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  Third-party services
                </h2>
                <p>
                  This website uses EmailJS to deliver contact form submissions. EmailJS processes
                  form data to send email messages. Please review the{' '}
                  <a
                    href="https://www.emailjs.com/legal/privacy-policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EmailJS Privacy Policy
                  </a>{' '}
                  for details on how they handle data.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  Cookies and local storage
                </h2>
                <p>
                  This website stores your theme preference (dark or light mode) in your browser's
                  local storage. No tracking cookies or analytics are used.
                </p>
              </section>

              <section>
                <h2 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>
                  Contact
                </h2>
                <p>
                  If you have any questions about how your information is handled, please contact me
                  directly at the email address listed on the contact page.
                </p>
              </section>

              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Last updated: October 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageContainer>
  );
}

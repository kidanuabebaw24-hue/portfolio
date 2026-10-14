import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../../data/navigation';

// ─── Zod Schema ───────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  description: z
    .string()
    .min(20, 'Please describe your project in at least 20 characters')
    .max(2000),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// ─── EmailJS config ────────────────────────────────────────────────────────────
// Set these environment variables in your .env file:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const isEmailConfigured =
  Boolean(EMAILJS_SERVICE_ID) && Boolean(EMAILJS_TEMPLATE_ID) && Boolean(EMAILJS_PUBLIC_KEY);

const PROJECT_TYPES = [
  'Business Website',
  'Web Application',
  'Backend / API Development',
  'Mobile Application (Flutter)',
  'Application Improvements',
  'Other / Not sure yet',
];

const BUDGET_RANGES = [
  'Under $500',
  '$500 – $1,500',
  '$1,500 – $5,000',
  '$5,000+',
  'Not sure / Open to discussion',
];

const TIMELINES = [
  'As soon as possible',
  '1 – 2 months',
  '3 – 6 months',
  'Flexible / Not urgent',
];

// ─── Field components ──────────────────────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="form-error" role="alert" aria-live="polite">
      <AlertCircle size={12} />
      {message}
    </p>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading');
    setErrorMessage('');

    if (!isEmailConfigured) {
      // Seamless fallback: open pre-filled email to Kidanu directly
      const subject = encodeURIComponent(`Project Inquiry: ${data.projectType} from ${data.name}`);
      const body = encodeURIComponent(
        `Hi Kidanu,\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Project Type: ${data.projectType}\n` +
        `Estimated Budget: ${data.budget || 'Not specified'}\n` +
        `Timeline: ${data.timeline || 'Not specified'}\n\n` +
        `Project Description:\n${data.description}\n`
      );
      window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
      setSubmitState('success');
      reset();
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          project_type: data.projectType,
          budget: data.budget ?? 'Not specified',
          message: data.description,
          timeline: data.timeline ?? 'Not specified',
        },
        EMAILJS_PUBLIC_KEY!,
      );
      setSubmitState('success');
      reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitState('error');
      setErrorMessage(
        'Something went wrong while sending your message. Please try again or reach out directly via email.',
      );
    }
  };

  // ── Success state ──
  if (submitState === 'success') {
    return (
      <div
        className="card p-8 text-center"
        role="status"
        aria-live="polite"
        aria-label="Message sent successfully"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(34, 197, 94, 0.1)' }}
        >
          <CheckCircle2 size={32} style={{ color: '#22c55e' }} />
        </div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Message Sent!
        </h3>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          Thanks for reaching out. I'll review your message and get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="btn btn-secondary"
          aria-label="Send another message"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-5"
    >

      {/* Name */}
      <div className="form-group">
        <label htmlFor="contact-name" className="form-label">
          Full Name <span aria-hidden="true" style={{ color: '#f87171' }}>*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          className={`form-input ${errors.name ? 'error' : ''}`}
          placeholder="Your full name"
          autoComplete="name"
          {...register('name')}
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        <FieldError message={errors.name?.message} />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">
          Email Address <span aria-hidden="true" style={{ color: '#f87171' }}>*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          placeholder="your@email.com"
          autoComplete="email"
          {...register('email')}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Project type */}
      <div className="form-group">
        <label htmlFor="contact-project-type" className="form-label">
          Project Type <span aria-hidden="true" style={{ color: '#f87171' }}>*</span>
        </label>
        <select
          id="contact-project-type"
          className={`form-input ${errors.projectType ? 'error' : ''}`}
          {...register('projectType')}
          aria-required="true"
          defaultValue=""
        >
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <FieldError message={errors.projectType?.message} />
      </div>

      {/* Budget (optional) */}
      <div className="form-group">
        <label htmlFor="contact-budget" className="form-label">
          Estimated Budget{' '}
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            (optional)
          </span>
        </label>
        <select id="contact-budget" className="form-input" {...register('budget')} defaultValue="">
          <option value="">Prefer not to say</option>
          {BUDGET_RANGES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="form-group">
        <label htmlFor="contact-description" className="form-label">
          Project Description <span aria-hidden="true" style={{ color: '#f87171' }}>*</span>
        </label>
        <textarea
          id="contact-description"
          className={`form-input ${errors.description ? 'error' : ''}`}
          placeholder="Describe your project, goals, and any specific requirements..."
          rows={5}
          {...register('description')}
          aria-required="true"
          aria-describedby={errors.description ? 'desc-error' : undefined}
        />
        <FieldError message={errors.description?.message} />
      </div>

      {/* Timeline (optional) */}
      <div className="form-group">
        <label htmlFor="contact-timeline" className="form-label">
          Timeline{' '}
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            (optional)
          </span>
        </label>
        <select id="contact-timeline" className="form-input" {...register('timeline')} defaultValue="">
          <option value="">No specific timeline</option>
          {TIMELINES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Error message */}
      {submitState === 'error' && (
        <div
          className="card p-4 flex items-start gap-3"
          style={{
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1px solid rgba(239, 68, 68, 0.25)',
          }}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle size={18} style={{ color: '#f87171', flexShrink: 0, marginTop: 1 }} />
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {errorMessage}
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-primary btn-lg justify-center"
        disabled={isSubmitting || submitState === 'loading'}
        aria-label="Send message"
      >
        {submitState === 'loading' || isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
        I only collect the information you provide here and use it solely to respond to your inquiry.
      </p>
    </form>
  );
}

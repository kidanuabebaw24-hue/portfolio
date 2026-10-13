interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className = '',
  id,
}: SectionHeadingProps) {
  return (
    <div id={id} className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {label && <span className="section-label">{label}</span>}
      <div className="accent-line" style={{ margin: centered ? '0 auto 1.5rem' : undefined }} />
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className="section-desc mt-4"
          style={{ margin: centered ? '1rem auto 0' : undefined }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

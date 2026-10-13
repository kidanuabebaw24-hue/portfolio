import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button';
    href?: never;
    to?: never;
    external?: never;
  };

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | 'href'> & {
    as?: 'a';
    href: string;
    to?: never;
    external?: boolean;
  };

interface LinkProps extends BaseProps {
  as?: 'link';
  to: string;
  href?: never;
  external?: never;
}

type Props = ButtonProps | AnchorProps | LinkProps;

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = '',
  ...rest
}: Props) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '',
    fullWidth ? 'w-full justify-center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {isLoading ? (
        <Loader2 size={16} className="animate-spin" />
      ) : leftIcon ? (
        leftIcon
      ) : null}
      <span>{children}</span>
      {!isLoading && rightIcon ? rightIcon : null}
    </>
  );

  if ('to' in rest && rest.to) {
    const { to, as: _as, ...linkRest } = rest as LinkProps;
    return (
      <Link to={to} className={classes} {...(linkRest as object)}>
        {content}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const { href, external, as: _as, ...anchorRest } = rest as AnchorProps;
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(anchorRest as object)}
      >
        {content}
      </a>
    );
  }

  const { as: _as, ...btnRest } = rest as ButtonProps;
  return (
    <button
      className={classes}
      disabled={isLoading || (btnRest as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
      {...(btnRest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}

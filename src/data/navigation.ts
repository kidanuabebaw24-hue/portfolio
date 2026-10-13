import type { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = {
  github: 'https://github.com/kidanuabebaw', // TODO: Replace with your actual GitHub URL
  linkedin: 'https://linkedin.com/in/kidanu-abebaw', // TODO: Replace with your actual LinkedIn URL
  email: 'kidanu@example.com', // TODO: Replace with your actual email address
};

export const personalInfo = {
  name: 'Kidanu Abebaw',
  title: 'Software Developer',
  tagline: 'Web, Mobile & Backend Development',
  location: 'Bahir Dar, Ethiopia',
  availability: 'Open to Freelance Projects & Remote Opportunities',
  cvPath: '/files/Kidanu-Abebaw-CV.pdf', // Place your CV at public/files/Kidanu-Abebaw-CV.pdf
  isAvailable: true, // Set to false to hide the availability badge
};

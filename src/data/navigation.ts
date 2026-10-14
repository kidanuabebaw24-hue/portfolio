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
  github: 'https://github.com/kidanuabebaw24-hue',
  linkedin: 'https://www.linkedin.com/in/kidanu-abebaw-67957a43b',
  email: 'kidanuabebaw24@gmail.com',
  phone: '+251953248197',
};

export const personalInfo = {
  name: 'Kidanu Abebaw',
  title: 'Software Developer',
  tagline: 'Web, Mobile & Backend Development',
  location: 'Bahir Dar, Ethiopia',
  phone: '+251953248197',
  availability: 'Open to Freelance Projects & Remote Opportunities',
  cvPath: '/files/Kidanu-Abebaw-CV.pdf', // Place your CV at public/files/Kidanu-Abebaw-CV.pdf
  avatar: '/images/profile.jpg',
  isAvailable: false, // Set to false to hide the availability badge
};

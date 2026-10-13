import type { ExperienceEntry } from '../types';

export const experiences: ExperienceEntry[] = [
  {
    id: 'bdu-education',
    type: 'education',
    title: 'B.Sc. in Computer Engineering',
    organization: 'Bahir Dar University',
    location: 'Bahir Dar, Ethiopia',
    startDate: '2022',
    current: true,
    endDate: 'June 2027 (Expected)',
    description:
      'Pursuing a Bachelor of Science in Computer Engineering with coursework spanning software engineering, computer networks, algorithms, database systems, operating systems, and embedded systems. Applying academic knowledge through personal and team software projects.',
    technologies: ['Java', 'C', 'Python', 'Data Structures', 'Algorithms', 'Database Systems'],
  },
  {
    id: 'stratiq-project',
    type: 'project',
    title: 'Lead Developer — StratIQ',
    organization: 'Personal Project',
    startDate: '2024',
    current: true,
    description:
      'Designed and developed StratIQ, a trading journal and analytics platform. Responsible for the full product concept, mobile frontend (Flutter), backend API (Node.js / Express.js), and PostgreSQL database design. Currently in active development.',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'PostgreSQL', 'Neon PostgreSQL'],
  },
  {
    id: 'civicfix-project',
    type: 'project',
    title: 'Full-Stack Developer — CivicFix',
    organization: 'Academic Team Project',
    startDate: '2024',
    current: true,
    description:
      'Contributed to both the Flutter mobile application and React web admin panel, as well as the Spring Boot backend API for CivicFix, a civic issue reporting system developed as part of university coursework.',
    technologies: ['React', 'Flutter', 'Spring Boot', 'Java', 'PostgreSQL'],
  },
  {
    id: 'ameco-project',
    type: 'project',
    title: 'Full-Stack Developer — AMECO-MMS',
    organization: 'Academic Team Project',
    startDate: '2024',
    endDate: '2024',
    description:
      'Contributed to the React frontend and Node.js/Express backend of AMECO-MMS, a media management system for organizing content submission, editorial review, and publication workflows across multiple roles.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
  },
  {
    id: 'iteams-cert',
    type: 'certification',
    title: 'I-TEAMS Certification',
    organization: 'I-TEAMS Program',
    description:
      'Completed the I-TEAMS entrepreneurship and innovation training program, covering business ideation, team dynamics, and early-stage product development.',
  },
  {
    id: 'edi-cert',
    type: 'certification',
    title: 'EDI Training Certification',
    organization: 'EDI Training Program',
    description:
      'Completed Entrepreneurship Development Institute (EDI) training, gaining foundational knowledge in business planning, opportunity recognition, and entrepreneurial thinking.',
  },
];

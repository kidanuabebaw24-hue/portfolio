import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Monitor',
    skills: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'REST API Development' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'Smartphone',
    skills: [
      { name: 'Flutter' },
      { name: 'Dart' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Firebase' },
      { name: 'Neon PostgreSQL' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Postman' },
      { name: 'VS Code' },
      { name: 'Android Studio' },
    ],
  },
  {
    id: 'practices',
    title: 'Software Engineering',
    icon: 'Code2',
    skills: [
      { name: 'Object-Oriented Programming' },
      { name: 'API Integration' },
      { name: 'Database Design' },
      { name: 'Responsive Web Design' },
      { name: 'Auth & Authorization' },
      { name: 'Agile Development' },
      { name: 'Testing & Debugging' },
    ],
  },
];

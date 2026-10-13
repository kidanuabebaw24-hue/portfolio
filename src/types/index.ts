// Project types
export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  technologies: string[];
  thumbnail?: string;
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  // Case study fields
  problem?: string;
  targetUsers?: string[];
  solution?: string;
  features?: ProjectFeature[];
  contribution?: string;
  architecture?: string;
  challenges?: string[];
  decisions?: string[];
  futureImprovements?: string[];
}

export interface ProjectFeature {
  name: string;
  description: string;
  status: 'implemented' | 'in-progress' | 'planned';
}

// Skill types
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

// Service types
export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  businessValue: string;
  deliverables: string[];
}

// Experience types
export interface ExperienceEntry {
  id: string;
  type: 'education' | 'project' | 'certification' | 'work';
  title: string;
  organization: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  description: string;
  technologies?: string[];
  achievements?: string[];
  certificateUrl?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  description: string;
  timeline?: string;
}

// Theme types
export type Theme = 'dark' | 'light';

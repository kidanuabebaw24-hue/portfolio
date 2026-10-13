import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'website-dev',
    title: 'Website Development',
    icon: 'Globe',
    description:
      'Design and develop clean, modern websites for businesses, professionals, and organizations — from landing pages to full multi-page sites.',
    businessValue:
      'A well-built website builds trust with customers and serves as your business\'s most consistent marketing tool.',
    deliverables: [
      'Business and corporate websites',
      'Personal and professional portfolio sites',
      'Landing pages and marketing sites',
      'Responsive redesigns of existing sites',
    ],
  },
  {
    id: 'web-app-dev',
    title: 'Web Application Development',
    icon: 'LayoutDashboard',
    description:
      'Build functional web applications with complex requirements — dashboards, management systems, multi-role tools, and internal workflow software.',
    businessValue:
      'Custom web applications reduce manual processes, organize your team\'s work, and give you a system tailored to how your business actually operates.',
    deliverables: [
      'Business management systems',
      'Administrative dashboards',
      'Role-based access applications',
      'Internal workflow and data management tools',
    ],
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    icon: 'Server',
    description:
      'Design and build robust REST APIs, integrate databases, implement authentication, and connect your application to third-party services.',
    businessValue:
      'A solid backend keeps your application secure, scalable, and maintainable as your business and user base grow.',
    deliverables: [
      'REST API design and development',
      'Database schema design and integration',
      'User authentication and authorization',
      'Third-party API integrations',
      'Backend debugging and improvements',
    ],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Application Development',
    icon: 'Smartphone',
    description:
      'Build cross-platform mobile applications with Flutter that work on both Android and iOS from a single codebase.',
    businessValue:
      'Reach your customers on their phones without the cost of maintaining two separate native codebases.',
    deliverables: [
      'Cross-platform Flutter applications',
      'API-connected mobile apps',
      'Mobile UI implementation from designs',
      'App maintenance and feature additions',
    ],
  },
  {
    id: 'improvements',
    title: 'Application Improvements',
    icon: 'Wrench',
    description:
      'Improve, fix, and extend an existing application — whether it\'s broken functionality, poor responsiveness, or missing features.',
    businessValue:
      'Getting more out of software you\'ve already invested in is often more cost-effective than starting from scratch.',
    deliverables: [
      'Bug identification and fixing',
      'Responsive design improvements',
      'Performance and usability enhancements',
      'API integration into existing apps',
      'Deployment and hosting assistance',
    ],
  },
];

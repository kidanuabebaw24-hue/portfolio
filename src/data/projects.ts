import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'stratiq',
    slug: 'stratiq',
    title: 'StratIQ',
    summary: 'A trading journal platform designed to help traders record their trades, analyze performance, track trading psychology, and learn from their decisions.',
    description:
      'StratIQ is a trading journal platform built to help traders improve through structured reflection and data. It allows users to log trades, review performance analytics, track emotional state during trading, and build a long-term record of their decision-making patterns. The platform aims to help traders move from reactive behavior toward disciplined, evidence-based decisions.',
    category: 'Full-Stack Application',
    status: 'in-progress',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'PostgreSQL', 'Neon PostgreSQL'],
    featured: true,
    problem:
      'Most traders lose money not because of a lack of knowledge, but because of inconsistent execution and poor self-awareness. Without a structured way to record and review trades, it is nearly impossible to identify recurring mistakes or refine a trading strategy over time.',
    targetUsers: [
      'Individual retail traders',
      'Students learning technical and fundamental analysis',
      'Traders who want to move from emotional trading to systematic decision-making',
    ],
    solution:
      'StratIQ provides a structured digital journal where traders can record each trade with all relevant context—entry, exit, rationale, emotional state, and outcome. The platform then surfaces patterns and analytics that help traders understand their habits, track their improvement, and make more informed decisions.',
    features: [
      { name: 'User Authentication', description: 'Secure registration and login system', status: 'implemented' },
      { name: 'Trade Logging', description: 'Create, edit, and manage individual trade records with full context', status: 'implemented' },
      { name: 'Performance Analytics', description: 'Visual breakdowns of win rate, profit/loss, and streaks', status: 'in-progress' },
      { name: 'Psychology Tracking', description: 'Emotion and mindset tags for each trade session', status: 'in-progress' },
      { name: 'Journal Entries', description: 'Free-form notes and trade screenshot uploads', status: 'in-progress' },
      { name: 'AI Trade Review', description: 'AI-assisted review of trade patterns and suggestions', status: 'planned' },
      { name: 'Multi-Account Support', description: 'Manage trades across multiple accounts or strategies', status: 'planned' },
    ],
    contribution:
      'I am the sole developer of StratIQ. I designed the product concept, defined the feature set, built the Flutter mobile frontend, designed the PostgreSQL schema, and implemented the Node.js/Express backend API.',
    challenges: [
      'Designing a schema flexible enough to accommodate different trading instruments and strategies',
      'Balancing feature scope to keep the MVP manageable while still providing real value',
      'Integrating real-time data and chart rendering on mobile within performance constraints',
    ],
    decisions: [
      'Chose Flutter for cross-platform mobile reach and a consistent UI layer',
      'Used Neon PostgreSQL (serverless) to reduce infrastructure overhead in early stages',
      'Deferred AI features to keep initial scope realistic and focused on core journaling value',
    ],
    futureImprovements: [
      'Add AI-powered trade review and pattern detection',
      'Build a web dashboard for deeper analytics',
      'Support broker API integration for automatic trade import',
      'Add a community feature for sharing strategies',
    ],
  },
  {
    id: 'civicfix',
    slug: 'civicfix',
    title: 'CivicFix',
    summary: 'A civic issue reporting application that enables citizens to report local problems and supports structured review and management by relevant authorities.',
    description:
      'CivicFix is a civic reporting system that bridges the gap between citizens and local authorities. Citizens can submit reports about infrastructure issues, public safety concerns, and community problems. Authorities can review, categorize, assign, and resolve reported issues through a structured administrative workflow.',
    category: 'Full-Stack Application',
    status: 'in-progress',
    technologies: ['React', 'Spring Boot', 'Flutter', 'Java', 'PostgreSQL'],
    featured: true,
    problem:
      'In many communities, reporting local issues like broken roads, faulty streetlights, or public safety problems is either unclear or ineffective. Citizens lack a structured channel, and authorities lack tools to systematically track and manage incoming reports.',
    targetUsers: [
      'Citizens who want to report local infrastructure and community issues',
      'Local government departments and municipal offices',
      'Community organizations managing shared spaces',
    ],
    solution:
      'CivicFix provides a mobile app for citizens and a web-based administrative dashboard for authorities. Citizens submit geolocated, categorized reports. Authorities receive structured queues with filters, assignment tools, and status tracking to close the feedback loop and show residents that their reports are being handled.',
    features: [
      { name: 'Citizen Authentication', description: 'Registration and login for citizen reporters', status: 'implemented' },
      { name: 'Issue Reporting', description: 'Submit reports with description, category, images, and location', status: 'implemented' },
      { name: 'Report Tracking', description: 'Citizens can view the status of their own submitted reports', status: 'implemented' },
      { name: 'Map Visualization', description: 'Map view of reported issues by location', status: 'in-progress' },
      { name: 'Admin Dashboard', description: 'Authorities can review, filter, assign, and resolve reports', status: 'in-progress' },
      { name: 'Role-Based Access Control', description: 'Different permissions for citizens, reviewers, and administrators', status: 'implemented' },
      { name: 'Notification System', description: 'Status update notifications for reporters', status: 'planned' },
    ],
    contribution:
      'I contributed to both the React web frontend (administrative dashboard) and the Flutter mobile application, as well as the Spring Boot backend API design and implementation. This was primarily developed as an academic team project.',
    challenges: [
      'Designing a role-based permission model that cleanly separated citizen and authority workflows',
      'Handling image uploads and geolocation in a mobile-first context',
      'Coordinating team contributions across frontend, mobile, and backend workstreams',
    ],
    decisions: [
      'Chose Spring Boot for the backend to leverage strong Java ecosystem tooling and structured MVC architecture',
      'Used Flutter for the citizen-facing mobile app for cross-platform reach',
      'Separated the web admin panel from the mobile app to give each interface a focused experience',
    ],
    futureImprovements: [
      'Add push notifications for report status changes',
      'Implement analytics for authorities to identify recurring problem areas',
      'Support multi-department routing and escalation',
      'Add a public dashboard showing community issue resolution statistics',
    ],
  },
  {
    id: 'ameco-mms',
    slug: 'ameco-mms',
    title: 'AMECO-MMS',
    summary: 'A media workflow management system designed to organize news submission, editorial review, and publication processes for a media organization.',
    description:
      'AMECO-MMS is a media management system that streamlines how content moves through a newsroom—from initial submission to editorial review and final publication. Different roles have different levels of access and responsibility, enabling a structured and traceable editorial workflow.',
    category: 'Web Application',
    status: 'completed',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    featured: true,
    problem:
      'Media organizations that rely on email or informal processes for content submission and editorial review often face disorganization, version confusion, and lack of traceability. Content can get lost, editorial decisions can be inconsistent, and there is no clear audit trail.',
    targetUsers: [
      'Authors and reporters submitting content',
      'Editors reviewing and approving content',
      'Administrators managing users and system configuration',
      'Newsreaders accessing published content',
    ],
    solution:
      'AMECO-MMS provides a structured content workflow where every piece of content moves through defined stages. Authors submit, editors review and approve or reject, and admins have oversight of the entire system. Every action is logged, and each user sees only the interface and actions relevant to their role.',
    features: [
      { name: 'Role-Based Access', description: 'Author, Editor, Reporter, Newsreader, and Admin roles with distinct permissions', status: 'implemented' },
      { name: 'Content Submission', description: 'Authors and reporters can submit news content through a structured form', status: 'implemented' },
      { name: 'Editorial Review', description: 'Editors can review, approve, reject, and provide feedback on submissions', status: 'implemented' },
      { name: 'Publication Workflow', description: 'Approved content moves through a defined publication pipeline', status: 'implemented' },
      { name: 'User Management', description: 'Admins can manage user accounts and roles', status: 'implemented' },
      { name: 'Content Dashboard', description: 'Each role sees a personalized dashboard relevant to their responsibilities', status: 'implemented' },
    ],
    contribution:
      'I contributed to the React frontend implementation and the Node.js/Express backend API. This was developed as an academic and team project. It is not officially affiliated with or endorsed by Amhara Media Corporation.',
    challenges: [
      'Designing role-based UI views that cleanly reflected each role\'s responsibilities without overwhelming any user type',
      'Building a flexible content state machine to manage all editorial workflow transitions',
      'Coordinating team roles and integrating frontend and backend developed by different contributors',
    ],
    decisions: [
      'Used React for a rich interactive frontend suitable for a dashboard-heavy application',
      'Chose Express.js for rapid API development aligned with our team\'s JavaScript skills',
      'Designed the permission system as a middleware layer to centralize access control logic',
    ],
    futureImprovements: [
      'Add real-time collaboration features and notifications',
      'Implement a content scheduling and publication calendar',
      'Add analytics for content performance and editorial throughput',
      'Support multimedia content types beyond text-based articles',
    ],
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

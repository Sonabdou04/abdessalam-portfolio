/**
 * Single source of truth for all portfolio content.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const profile = {
  name: 'Aarav Mehta',
  roles: [
    'Full Stack Developer',
    'React Developer',
    'Laravel Engineer',
    'UI Craftsman',
  ],
  tagline:
    'I design and build fast, accessible web products — from pixel-perfect interfaces to the APIs and databases behind them.',
  location: 'Pune, India',
  email: 'hello@aaravmehta.dev',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    twitter: 'https://twitter.com/',
  },
} as const

export const about = {
  bio: [
    'I am a full stack developer with a bias for shipping. Over the last three years I have built dashboards, storefronts and internal tools used by thousands of people — usually as the person who owns both the interface and the API behind it.',
    'My favourite work sits at the intersection of performance and craft: shaving seconds off a page load, designing a component API that other developers enjoy, or replacing a brittle query with something that scales. Outside of work I write about frontend architecture and mentor junior developers.',
  ],
  stats: [
    { label: 'Years of experience', value: '3+' },
    { label: 'Projects completed', value: '25' },
    { label: 'Technologies used', value: '18' },
    { label: 'Open source PRs', value: '40+' },
  ],
} as const

export type SkillCategory = {
  category: string
  items: { name: string; icon: string; color: string }[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: 'currentColor' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'JavaScript', icon: 'SiJavascript', color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#38BDF8' },
      { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#5FA04E' },
      { name: 'Express', icon: 'SiExpress', color: 'currentColor' },
      { name: 'Laravel', icon: 'SiLaravel', color: '#FF2D20' },
      { name: 'PHP', icon: 'SiPhp', color: '#777BB4' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'GraphQL', icon: 'SiGraphql', color: '#E10098' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'Redis', icon: 'SiRedis', color: '#FF4438' },
      { name: 'Prisma', icon: 'SiPrisma', color: 'currentColor' },
      { name: 'Supabase', icon: 'SiSupabase', color: '#3FCF8E' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'GitHub Actions', icon: 'SiGithubactions', color: '#2088FF' },
      { name: 'Vercel', icon: 'SiVercel', color: 'currentColor' },
      { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
      { name: 'Figma', icon: 'SiFigma', color: '#F24E1E' },
    ],
  },
]

export type Experience = {
  company: string
  role: string
  duration: string
  location: string
  type: string
  points: string[]
  tech: string[]
}

export const experience: Experience[] = [
  {
    company: 'Northwind Labs',
    role: 'Full Stack Developer',
    duration: 'Jan 2024 — Present',
    location: 'Remote',
    type: 'Full-time',
    points: [
      'Led the migration of a legacy PHP dashboard to Next.js App Router, cutting median page load from 3.4s to 0.9s.',
      'Designed a shared component library used by 4 product teams, with documented accessibility patterns.',
      'Built a background job pipeline in Node.js that processes 200k+ events per day with automatic retries.',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Brightpath Studio',
    role: 'Frontend Developer',
    duration: 'Jun 2023 — Dec 2023',
    location: 'Pune, India',
    type: 'Contract',
    points: [
      'Shipped 9 client marketing sites with Lighthouse scores above 95 across all categories.',
      'Introduced a design-token workflow between Figma and Tailwind, removing most style drift.',
      'Set up visual regression tests that caught layout bugs before every release.',
    ],
    tech: ['React', 'Tailwind CSS', 'Figma', 'Vercel'],
  },
  {
    company: 'Cobalt Systems',
    role: 'Software Engineering Intern',
    duration: 'Jan 2023 — May 2023',
    location: 'Hybrid — Bengaluru',
    type: 'Internship',
    points: [
      'Built internal admin tooling in Laravel that reduced manual order corrections by 60%.',
      'Wrote integration tests for the billing module, raising coverage from 41% to 78%.',
      'Paired weekly with senior engineers on code reviews and database query tuning.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Docker'],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  demo: string
  repo: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Pulse Analytics',
    description:
      'A self-hosted product analytics dashboard with real-time event streams, funnel reports and cohort retention charts.',
    image: '/projects/analytics-dashboard.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
    featured: true,
  },
  {
    title: 'Marketplace Storefront',
    description:
      'Headless commerce storefront with server-rendered product pages, cart persistence and Stripe checkout.',
    image: '/projects/ecommerce.png',
    tech: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Tandem Boards',
    description:
      'Collaborative kanban app with live presence, optimistic drag and drop, and per-workspace permissions.',
    image: '/projects/collab-app.png',
    tech: ['Next.js', 'WebSockets', 'Prisma', 'Supabase'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Forge API Platform',
    description:
      'Developer platform with generated SDKs, interactive API docs, scoped keys and usage-based rate limiting.',
    image: '/projects/api-platform.png',
    tech: ['Laravel', 'PHP', 'MySQL', 'Docker'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
]

export type Certification = {
  title: string
  issuer: string
  icon: string
  color: string
  date: string
  url: string
}

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Developer — Associate',
    issuer: 'Amazon Web Services',
    icon: 'FaAws',
    color: '#FF9900',
    date: 'March 2025',
    url: 'https://example.com',
  },
  {
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta / Coursera',
    icon: 'SiMeta',
    color: '#0866FF',
    date: 'September 2024',
    url: 'https://example.com',
  },
  {
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    icon: 'SiMongodb',
    color: '#47A248',
    date: 'January 2024',
    url: 'https://example.com',
  },
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const

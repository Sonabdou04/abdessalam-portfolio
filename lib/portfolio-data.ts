/**
 * Single source of truth for all portfolio content.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const profile = {
  name: 'Aarav Mehta',
  roles: [
    'Full-Stack-Entwickler',
    'React-Entwickler',
    'Laravel-Entwickler',
    'UI-Handwerker',
  ],
  tagline:
    'Ich entwerfe und baue schnelle, zugängliche Webprodukte — von pixelgenauen Interfaces bis hin zu den APIs und Datenbanken dahinter.',
  location: 'Pune, Indien',
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
    'Ich bin Full-Stack-Entwickler mit starker Fokussierung auf schnelle Umsetzung. In den letzten drei Jahren habe ich Dashboards, Shop-Frontends und interne Tools entwickelt, die von Tausenden Menschen genutzt werden — oft als die Person, die sowohl das Interface als auch die dahinterliegende API verantwortet.',
    'Meine Lieblingsarbeit liegt an der Schnittstelle von Performance und Design: Sekunden aus Ladezeiten herausholen, eine Komponenten-API entwickeln, die andere Entwickler gern nutzen, oder eine fragile Abfrage durch etwas Skalierbares ersetzen. Außerhalb der Arbeit schreibe ich über Frontend-Architektur und unterstütze Junior-Entwickler.',
  ],
  stats: [
    { label: 'Jahre Erfahrung', value: '3+' },
    { label: 'Abgeschlossene Projekte', value: '25' },
    { label: 'Technologien im Einsatz', value: '18' },
    { label: 'Open-Source-PRs', value: '40+' },
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
    category: 'Datenbanken',
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
    role: 'Full-Stack-Entwickler',
    duration: 'Jan. 2024 — Heute',
    location: 'Remote',
    type: 'Vollzeit',
    points: [
      'Ich habe die Migration eines bestehenden PHP-Dashboards auf den Next.js-App-Router geleitet und die durchschnittliche Ladezeit von 3,4s auf 0,9s gesenkt.',
      'Ich habe eine gemeinsam nutzbare Komponentenbibliothek für vier Produktteams aufgebaut, inklusive dokumentierter Accessibility-Patterns.',
      'Ich habe eine Background-Job-Pipeline in Node.js entwickelt, die über 200.000 Events pro Tag mit automatischen Retries verarbeitet.',
    ],
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'Brightpath Studio',
    role: 'Frontend-Entwickler',
    duration: 'Juni 2023 — Dez. 2023',
    location: 'Pune, Indien',
    type: 'Projektbasis',
    points: [
      'Ich habe 9 Marketing-Websites für Kunden ausgeliefert, die in allen Kategorien Lighthouse-Werte über 95 erzielten.',
      'Ich habe einen Workflow für Design-Tokens zwischen Figma und Tailwind eingeführt und damit die meisten Styleschwankungen reduziert.',
      'Ich habe visuelle Regressionstests eingerichtet, die Layoutfehler vor jeder Veröffentlichung erkannt haben.',
    ],
    tech: ['React', 'Tailwind CSS', 'Figma', 'Vercel'],
  },
  {
    company: 'Cobalt Systems',
    role: 'Werkstudent im Software-Engineering',
    duration: 'Jan. 2023 — Mai 2023',
    location: 'Hybrid — Bengaluru',
    type: 'Praktikum',
    points: [
      'Ich habe interne Admin-Tools in Laravel entwickelt, die manuelle Auftragskorrekturen um 60 % reduziert haben.',
      'Ich habe Integrationstests für das Billing-Modul geschrieben und die Testabdeckung von 41 % auf 78 % erhöht.',
      'Ich habe wöchentlich mit Senior-Engineer:innen Code-Reviews und Datenbank-Query-Optimierungen durchgeführt.',
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
      'Ein selbst gehostetes Produkt-Analytics-Dashboard mit Echtzeit-Eventstreams, Funnel-Reports und Cohort-Retention-Chart.',
    image: '/projects/analytics-dashboard.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
    featured: true,
  },
  {
    title: 'Marketplace Storefront',
    description:
      'Headless-Commerce-Storefront mit server-gerenderten Produktseiten, Warenkorb-Persistenz und Stripe-Checkout.',
    image: '/projects/ecommerce.png',
    tech: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Tandem Boards',
    description:
      'Kollaborative Kanban-App mit Live-Präsenz, optimistischen Drag-and-Drop-Funktionen und Berechtigungen pro Workspace.',
    image: '/projects/collab-app.png',
    tech: ['Next.js', 'WebSockets', 'Prisma', 'Supabase'],
    demo: 'https://example.com',
    repo: 'https://github.com/',
  },
  {
    title: 'Forge API Platform',
    description:
      'Developer-Plattform mit generierten SDKs, interaktiver API-Dokumentation, begrenzten Schlüsseln und nutzungsbasierten Rate Limits.',
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
    date: 'März 2025',
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
    date: 'Januar 2024',
    url: 'https://example.com',
  },
]

export const navItems = [
  { label: 'Start', href: '#home' },
  { label: 'Über mich', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Erfahrung', href: '#experience' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Zertifikate', href: '#certifications' },
  { label: 'Kontakt', href: '#contact' },
] as const

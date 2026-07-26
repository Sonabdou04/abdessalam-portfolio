/**
 * Single source of truth for all portfolio content.
 * Edit the values below to personalize the site — no component changes needed.
 */

export const profile = {
  name: 'Abdessalam Chaabani',
  roles: [
    'Full-Stack-Entwickler',
    'React-Entwickler',
    'Laravel-Entwickler',
  ],
  tagline:
    'Ich entwerfe und baue schnelle, zugängliche Webprodukte',
  location: 'Casablanca, Marokko',
  email: 'abdessalam.chaabani2004@outlook.com',
  resumeUrl: '/resume.pdf', // LINK TO RESUME PDF
  socials: {
    github: 'https://github.com/Sonabdou04',
    linkedin: 'https://www.linkedin.com/in/abdessalam-chaabani-42050b336',
    twitter: 'https://twitter.com/',
  },
} as const

export const about = {
  bio: [
    'Ich bin Full-Stack-Entwickler und baue gerne praktische Web-Anwendungen. In den letzten Jahren habe ich Dashboards, Online-Shops und interne Tools entwickelt. Dabei erstelle ich oft das Design im Frontend und baue auch das Backend mit den APIs.',
    'Mir macht es einfach Spaß, gute Web-Anwendungen zu bauen: Ob saubere UIs umsetzen, Ladezeiten ein bisschen schneller machen oder dafür sorgen, dass das Frontend reibungslos mit dem Backend zusammenspielt.',
  ],
  stats: [
    { label: 'Monate Praktikum', value: '7+' },
    { label: 'Hauptprojekte', value: '4' },
    { label: 'Zertifikate', value: '7' },
    { label: 'Motivation', value: '101%' },
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
      { name: 'HTML', icon: 'FaHtml5', color: '#E34F26' },
      { name: 'CSS', icon: 'FaCss3Alt', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#38BDF8' },
      { name: 'Bootstrap', icon: 'SiBootstrap', color: '#563D7C' },
      
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel', icon: 'SiLaravel', color: '#FF2D20' },
      { name: 'PHP', icon: 'SiPhp', color: '#777BB4' },
      { name: 'Python', icon: 'SiPython', color: '#3776AB' },
      { name: 'Java', icon: 'FaJava', color: '#F89820' },
    ],
  },
  {
    category: 'Datenbanken',
    items: [
      { name: 'MySQL', icon: 'SiMysql', color: '#4479A1' },
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'GitHub', icon: 'SiGithub', color: '#24292E' },
      { name: 'Postman', icon: 'SiPostman', color: '#FF6C37' },
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
    company: 'FC MEDIA',
    role: 'Full-Stack-Entwickler',
    duration: 'Dez. 2025 – Jan. 2026',
    location: 'Casablanca, Marokko',
    type: 'Praktikum',
    points: [
      'Entwicklung neuer Funktionen im Frontend mit Next.js.',
      'Erstellung und Optimierung von MongoDB Abfragen zur Datenverarbeitung.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub', 'MongoDB', 'REST API'],
  },
  {
    company: 'AD CONTACT',
    role: 'Frontend-Entwickler',
    duration: 'Sep. 2025 – Nov. 2025',
    location: 'Casablanca, Marokko',
    type: 'Praktikum',
    points: [
      'Fehlersuche und Behebung von Bugs im React Frontend.',
      'Erstellung und Bearbeitung von Abfragen mit MySQL.',
      'Entwicklung einer Frontend Benutzeroberfläche zur Nutzung einer bestehenden API.',
    ],
    tech: ['React', 'Tailwind CSS', 'MySQL', 'REST API', 'Git', 'GitHub'],
  },
  {
    company: 'FC MEDIA',
    role: 'Backend-Entwickler',
    duration: 'Jul. 2025 – Aug. 2025',
    location: 'Hybrid — Bengaluru',
    type: 'Praktikum',
    points: [
      'Entwicklung neuer Funktionen für die Backend-API mit Laravel.',
      'Ich habe jede Woche zusammen mit Senior Entwicklern Code Reviews gemacht',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Git', 'GitHub', 'Postman', 'REST API'],
  },
  {
    company: 'ELECTRICITE KRONFEL MODERNE (EKM)',
    role: 'Full-Stack-Entwickler',
    duration: 'Mär. 2025 – Apr. 2025',
    location: 'Hybrid — Casablanca',
    type: 'Praktikum',
    points: [
      'Entwicklung einer Web Anwendung mit React, Laravel und Inertia.js.',
      'Teilnahme an regelmäßigen Code Reviews mit erfahrenen Entwicklern zur Verbesserung des Codes.',
      'Ich habe geholfen, Datenbank Abfragen schneller zu machen.',
    ],
    tech: ['Laravel', 'React', 'MySQL', 'Inertia.js', 'Git', 'GitHub', 'Postman'],
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
    title: 'Git and GitHub',
    issuer: '365 Data  Science',
    icon: 'FaGraduationCap',
    color: '#0F766E',
    date: 'November 2024',
    url: 'certifications/CC-6AFEF0E5FF.pdf',
  },
  {
    title: 'Java Programming for Beginners',
    issuer: 'Coursera',
    icon: 'SiCoursera',
    color: '#2A73CC',
    date: 'Juli 2025',
    url: 'certifications/Coursera%20YW7ICUKBQ8H4.pdf',
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Coursera',
    icon: 'SiCoursera',
    color: '#2A73CC',
    date: 'August 2025',
    url: 'certifications/Coursera%20WSNJQTACAC7P.pdf',
  },
  {
    title: 'Start Writing Prompts like a Pro',
    issuer: 'Google',
    icon: 'SiGoogle',
    color: '#4285F4',
    date: 'August 2025',
    url: 'certifications/Coursera%20WSNJQTACAC7P.pdf',
  },
  {
    title: 'Next.js: Creating and Hosting a Full-Stack Site',
    issuer: 'Linkedin Learning',
    icon: 'FaLinkedin',
    color: '#0A66C2',
    date: 'Oktober 2025',
    url: 'certifications/1760981859553.pdf',
  },
  {
    title: 'Introduction to Python',
    issuer: '365 Data  Science',
    icon: 'FaGraduationCap',
    color: '#0F766E',
    date: 'November 2024',
    url: 'certifications/CC-19D96AB876.pdf',
  },
  {
    title: 'Intro to ChatGPT and Generative AI',
    issuer: '365 Data  Science',
    icon: 'FaGraduationCap',
    color: '#0F766E',
    date: 'November 2024',
    url: 'certifications/CC-9FE977E245.pdf',
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

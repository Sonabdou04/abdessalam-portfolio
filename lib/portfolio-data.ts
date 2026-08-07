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
  repo?: string
  repos?: { label: string; url: string }[];

}

export const projects: Project[] = [
  {
    title: 'Quotely: Zitate-Plattform',
    description: 'Eine Web-Anwendung zum Entdecken, Speichern und Teilen von inspirierenden Zitaten. Nutzer können Zitate nach Kategorien durchsuchen und ihre Favoriten in einem eigenen Profil speichern.',
    image: '/projects/quotely.png',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'REST API', 'MySQL', 'Git', 'GitHub', 'Postman'],
    demo: '',
    repo: 'https://github.com/Sonabdou04/QuotelyProject',
  },
  {
    title: 'MoneyMaster: Finanz-Manager',
    description:
      'Plattform für digitales Finanzmanagement. Die Anwendung hilft dabei, tägliche Ausgaben zu kontrollieren, Sparziele zu setzen und durch übersichtliche Statistiken den Überblick über das eigene Geld zu behalten.',
    image: '/projects/money-management-project.png',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'REST API', 'MySQL', 'Git', 'GitHub', 'Postman'],
    demo: "",
    repos: [
    { label: 'Frontend', url: 'https://github.com/Sonabdou04/money-management-frontend' },
    { label: 'Backend', url: 'https://github.com/Sonabdou04/money-management-backend' },
  ],
  },
  {
    title: 'EventHub: Event-Plattform',
    description:
      'Eine Plattform für Entwickler zum Entdecken von Meetups, Hackathons und Workshops. Nutzer können aktuelle IT-Events durchsuchen, Details einsehen und sich für Veranstaltungen anmelden.',
    image: '/projects/dev-event-project.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API', 'MongoDB', 'Git', 'GitHub', 'Postman', 'Better-Auth'],
    demo: '',
    repo: 'https://github.com/Sonabdou04/dev-event',
  },
  {
    title: 'FITPRO: Fitness- & E-Commerce-Plattform',
    description:
      'Eine Plattform für Trainingspläne, Ernährung und Fitness-Ausrüstung. Nutzer können Workouts durchsuchen, Fitnessprodukte im Shop kaufen und ihre Bestellungen verwalten.',
    image: '/projects/fitness-project.png',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'MySQL', 'Git', 'GitHub', 'Inertia.js'],
    demo: '',
    repo: 'https://gitlab.com/Sonabdou04/fitnesse',
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

export type Education = {
  institution?: string
  degree: string
  duration: string
  location: string
}

export const education: Education[] = [
  {
    institution: 'FACHINSTITUT FÜR MANAGEMENT UND INFORMATIK CASABLANCA',
    degree: 'Fachtechniker-DIPLOM: Digitale Entwicklung - Web Full Stack',
    duration: '2023 – 2025',
    location: 'Casablanca, Marokko',
  },
  {
    institution: 'FACHGYMNASTUM EL MANSOUR EDDAHBI',
    degree: 'Abitur',
    duration: '2022',
    location: 'Casablanca, Marokko',
  },
]

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
    url: 'certifications/Coursera%20BH431FB5A2HA.pdf',
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
  { label: 'Bildung', href: '#education' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Zertifikate', href: '#certifications' },
  { label: 'Kontakt', href: '#contact' },
] as const

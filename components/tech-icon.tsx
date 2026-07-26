import type { IconType } from 'react-icons'
import { FaAws, FaCss3Alt, FaHtml5, FaJava, FaGraduationCap, FaLinkedin } from 'react-icons/fa6'
import {
  SiPostman,
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMeta,
  SiMongodb,
  SiGithub,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiCoursera,
  SiGoogle,
} from 'react-icons/si'

export const techIcons: Record<string, IconType> = {
  SiGithub,
  SiCoursera,
  SiGoogle,
  FaLinkedin,
  SiPostman,
  FaGraduationCap,
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
}

export function TechIcon({
  name,
  color,
  className,
}: {
  name: string
  color?: string
  className?: string
}) {
  const Icon = techIcons[name]
  if (!Icon) return null
  return <Icon aria-hidden="true" className={className} style={{ color }} />
}

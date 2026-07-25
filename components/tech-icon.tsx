import type { IconType } from 'react-icons'
import { FaAws } from 'react-icons/fa6'
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGraphql,
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
} from 'react-icons/si'

export const techIcons: Record<string, IconType> = {
  FaAws,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGraphql,
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

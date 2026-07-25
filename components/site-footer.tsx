import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Separator } from '@/components/ui/separator'
import { navItems, profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Twitter', href: profile.socials.twitter, Icon: FaXTwitter },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <Separator />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            {`© ${new Date().getFullYear()} ${profile.name}. Built with Next.js and Tailwind CSS.`}
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

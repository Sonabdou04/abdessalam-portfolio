'use client'

import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { Reveal, SectionHeading } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <SectionHeading
          eyebrow="Kontakt"
          title="Lass uns etwas bauen"
          description="Hast du eine Rolle, ein Projekt oder eine Idee im Kopf? Nimm direkt über die Kanäle unten Kontakt auf."
        />

        <Reveal className="flex flex-col gap-4 md:flex-row md:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-2xl border border-border glass-card p-4 transition-colors hover:border-primary/40 md:min-w-72"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="size-4" aria-hidden="true" />
            </span>
            <span className="flex flex-col">
              <span className="text-xs text-muted-foreground">Email</span>
              <span className="font-mono text-xs">{profile.email}</span>
            </span>
          </a>

          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border glass-card p-4 transition-colors hover:border-primary/40 md:min-w-72"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-muted-foreground">{label}</span>
                <span className="text-sm font-medium">{label}</span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

'use client'

import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { profile } from '@/lib/portfolio-data'

function useTypewriter(words: readonly string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    const done = !deleting && text === word
    const cleared = deleting && text === ''

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true)
          return
        }
        if (cleared) {
          setDeleting(false)
          setIndex((value) => (value + 1) % words.length)
          return
        }
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
        )
      },
      done ? 1600 : deleting ? 40 : 75,
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export function HeroSection() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,black,transparent)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex w-fit items-center gap-2 rounded-full border border-border glass-card px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          Verfügbar für neue Projekte
          <span className="inline-flex items-center gap-1 border-l border-border pl-2">
            <MapPin className="size-3" />
            {profile.location}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="font-mono text-lg text-primary sm:text-2xl" aria-live="polite">
            {typed}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-pulse bg-primary" />
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-sm')}
          >
            Projekte ansehen
            <ArrowDown className="size-4" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'h-11 px-5 text-sm',
            )}
          >
            <Download className="size-4" />
            Lebenslauf herunterladen
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center gap-2"
        >
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex size-10 items-center justify-center rounded-xl border border-border glass-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Icon className="size-4" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

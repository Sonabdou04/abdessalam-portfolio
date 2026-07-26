'use client'

import { CheckCircle2, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Reveal, SectionHeading } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { profile } from '@/lib/portfolio-data'

type Errors = { name?: string; email?: string; message?: string }

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'Twitter', href: profile.socials.twitter, Icon: FaXTwitter },
]

export function ContactSection() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(next = values): Errors {
    const found: Errors = {}
    if (next.name.trim().length < 2) found.name = 'Bitte geben Sie Ihren Namen ein.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(next.email.trim()))
      found.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    if (next.message.trim().length < 10)
      found.message = 'Ihre Nachricht sollte mindestens 10 Zeichen lang sein.'
    return found
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return
    setSent(true)
    setValues({ name: '', email: '', message: '' })
  }

  function update(field: keyof typeof values, value: string) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (errors[field]) setErrors(validate(next))
    if (sent) setSent(false)
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <SectionHeading
          eyebrow="Kontakt"
          title="Lass uns etwas bauen"
          description="Hast du eine Rolle, ein Projekt oder eine Idee im Kopf? Schicke mir eine Nachricht und ich antworte innerhalb von ein paar Tagen."
        />

        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <Reveal className="flex flex-col gap-4 md:w-64 md:shrink-0">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border glass-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="size-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-muted-foreground">Email</span>
                <span className="font-mono text-xs">{profile.email}</span>
              </span>
            </a>

            <ul className="flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex size-10 items-center justify-center rounded-xl border border-border glass-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="flex-1">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border glass-card p-5"
            >
              <FieldGroup>
                <Field data-invalid={errors.name ? true : undefined}>
                  <FieldLabel htmlFor="contact-name">Name</FieldLabel>
                  <Input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Max Mustermann"
                    value={values.name}
                    aria-invalid={errors.name ? true : undefined}
                    onChange={(event) => update('name', event.target.value)}
                  />
                  <FieldError>{errors.name}</FieldError>
                </Field>

                <Field data-invalid={errors.email ? true : undefined}>
                  <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="du@firma.de"
                    value={values.email}
                    aria-invalid={errors.email ? true : undefined}
                    onChange={(event) => update('email', event.target.value)}
                  />
                  <FieldError>{errors.email}</FieldError>
                </Field>

                <Field data-invalid={errors.message ? true : undefined}>
                  <FieldLabel htmlFor="contact-message">Message</FieldLabel>
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Erzähl mir etwas über dein Projekt oder deine Idee."
                    value={values.message}
                    aria-invalid={errors.message ? true : undefined}
                    onChange={(event) => update('message', event.target.value)}
                  />
                  <FieldError>{errors.message}</FieldError>
                  <FieldDescription>
                    Dieses Demo-Formular wird im Browser validiert — verbinde es mit
                    einem E-Mail-Anbieter, um Nachrichten zu empfangen.
                  </FieldDescription>
                </Field>

                <Field orientation="horizontal">
                  <Button type="submit" size="lg" className="h-10 px-4">
                    <Send data-icon="inline-start" />
                    Nachricht senden
                  </Button>
                  {sent ? (
                    <p
                      role="status"
                      className="inline-flex items-center gap-1.5 text-sm text-primary"
                    >
                      <CheckCircle2 className="size-4" aria-hidden="true" />
                      Nachricht validiert und bereit zum Senden.
                    </p>
                  ) : null}
                </Field>
              </FieldGroup>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

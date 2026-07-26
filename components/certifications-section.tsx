import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { TechIcon } from '@/components/tech-icon'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { certifications } from '@/lib/portfolio-data'

export function CertificationsSection() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <SectionHeading
          eyebrow="Zertifikate"
          title="Verifizierte Qualifikationen"
          description="Kurse und Prüfungen, die ich auf dem Weg abgeschlossen habe."
        />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <li key={cert.title}>
              <Reveal delay={index * 0.07} className="h-full">
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-border glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/60">
                      <TechIcon
                        name={cert.icon}
                        color={cert.color}
                        className="size-6"
                      />
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="text-sm leading-snug font-medium text-pretty">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: 'outline', size: 'sm' }),
                      'w-full',
                    )}
                  >
                    Zertifikat ansehen
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">{`— ${cert.title}`}</span>
                  </a>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

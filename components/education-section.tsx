'use client'

import { CalendarDays, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <SectionHeading
          eyebrow="Bildung"
          title="Meine Ausbildungsschritte"
          description="Zwei Stationen, die meine Entwicklung als Full-Stack-Entwickler geprägt haben."
        />

        <ol className="relative flex flex-col gap-10 pl-8">
          <motion.span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-primary/60 via-border to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />

          {education.map((item, index) => (
            <li key={`${item.institution}-${item.duration}`} className="relative">
              <motion.span
                aria-hidden="true"
                className="absolute top-2 -left-8 flex size-[15px] items-center justify-center rounded-full border border-primary/50 bg-background"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              >
                <span className="size-1.5 rounded-full bg-primary" />
              </motion.span>

              <Reveal delay={index * 0.06}>
                <article className="flex flex-col gap-3 rounded-2xl border border-border glass-card p-5 transition-colors hover:border-primary/30">
                  <header className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-medium tracking-tight">
                        {item.degree}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-primary">{item.institution}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" aria-hidden="true" />
                        {item.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>
                  </header>

                  <ul className="flex flex-col gap-2">
                    {item.description?.map((point) => (
                      <li
                        key={point.slice(0, 24)}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-primary/70"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

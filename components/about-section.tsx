import Image from 'next/image'
import { Reveal, SectionHeading } from '@/components/reveal'
import { about, profile } from '@/lib/portfolio-data'

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
        <SectionHeading eyebrow="Über mich" title="Ein Entwickler, der alles von Anfang bis Ende umsetzt" />

        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <Reveal className="md:w-64 md:shrink-0">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              <Image
                src="/profile.png"
                alt={`Portrait of ${profile.name}`}
                width={512}
                height={512}
                className="aspect-square w-full object-cover"
                priority={false}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"
              />
            </div>
          </Reveal>

          <div className="flex flex-1 flex-col gap-6">
            {about.bio.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.08}>
                <p className="text-base leading-relaxed text-pretty text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.16}>
              <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col gap-1 rounded-xl border border-border glass-card p-4"
                  >
                    <dt className="order-2 text-xs leading-relaxed text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="order-1 font-mono text-2xl font-semibold text-primary">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

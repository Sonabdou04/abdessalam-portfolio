import { Reveal, SectionHeading } from '@/components/reveal'
import { TechIcon } from '@/components/tech-icon'
import { skills } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-12">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="The stack I use day to day, grouped by where it sits in the product."
        />

        <div className="flex flex-col gap-10">
          {skills.map((group, groupIndex) => (
            <Reveal
              key={group.category}
              delay={groupIndex * 0.06}
              className="flex flex-col gap-4"
            >
              <h3 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {group.category}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="group flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-border glass-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                      <TechIcon
                        name={item.icon}
                        color={item.color}
                        className="size-7 transition-transform duration-300 group-hover:scale-110"
                      />
                      <span className="text-center text-xs leading-relaxed text-muted-foreground group-hover:text-foreground">
                        {item.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

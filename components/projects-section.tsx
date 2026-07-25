import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa6'
import { Reveal, SectionHeading } from '@/components/reveal'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="mx-auto w-full max-w-4xl">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few things I have designed, built and shipped."
          />
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project.title}>
              <Reveal delay={index * 0.07} className="h-full">
                <Card className="group/project h-full transition-all duration-300 hover:-translate-y-1 hover:ring-primary/40">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Screenshot of the ${project.title} interface`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover/project:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-2 p-3 opacity-0 transition-all duration-300 group-hover/project:translate-y-0 group-hover/project:opacity-100 group-focus-within/project:translate-y-0 group-focus-within/project:opacity-100">
                      <Badge
                        render={
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open the live demo of ${project.title}`}
                          />
                        }
                      >
                        <ExternalLink aria-hidden="true" />
                        Live Demo
                      </Badge>
                      <Badge
                        variant="secondary"
                        render={
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open the GitHub repository for ${project.title}`}
                          />
                        }
                      >
                        <FaGithub aria-hidden="true" />
                        GitHub
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <li key={tech}>
                          <Badge variant="outline" className="font-mono text-[11px]">
                            {tech}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

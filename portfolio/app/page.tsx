import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { personalInfo } from '../data/personal';
import { featuredProjects } from '../data/projects';
import { experiences } from '../data/experience';

const contactLinks = [
  { label: 'Email', href: `mailto:${personalInfo.email}`, external: false },
  { label: 'GitHub', href: `https://github.com/${personalInfo.github}`, external: true },
  { label: 'LinkedIn', href: `https://www.linkedin.com/in/${personalInfo.linkedin}`, external: true },
];

export default function HomePage() {
  const roles = experiences.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="wrap pt-16 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow rise mb-6">
              {personalInfo.title} · {personalInfo.location}
            </p>
            <h1 className="display rise rise-1 text-[2.9rem] sm:text-6xl lg:text-7xl">
              Hi, I&rsquo;m Michael.
              <br />
              I like to <em>solve problems</em>.
            </h1>
            <p className="rise rise-2 mt-8 max-w-xl text-lg leading-relaxed text-ink-2">
              {personalInfo.intro}
            </p>
            <ul className="rise rise-3 mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {contactLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="link inline-flex items-center gap-0.5 text-sm"
                  >
                    {l.label}
                    {l.external && <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rise rise-2 md:justify-self-end">
            <div className="card-media aspect-[4/5] w-52 sm:w-60 lg:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/headshot.jpg"
                alt="Michael Cronin"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work, one line per role */}
      <section className="wrap">
        <div className="rule flex items-baseline justify-between gap-6 pt-8">
          <p className="eyebrow">Work</p>
          <Link href="/experience" className="link text-sm">
            Full history →
          </Link>
        </div>
        <ol className="mt-4">
          {roles.map((exp) => (
            <li
              key={exp.id}
              className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-8"
            >
              <p className="eyebrow">
                {exp.start} – {exp.end}
              </p>
              <p className="text-ink">
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="link font-medium">
                    {exp.company}
                  </a>
                ) : (
                  <span className="font-medium">{exp.company}</span>
                )}
                <span className="text-muted"> · {exp.role}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Selected projects */}
      <section className="wrap pt-20 sm:pt-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="display text-4xl sm:text-5xl">Selected projects</h2>
          <Link href="/projects" className="link text-sm">
            All projects →
          </Link>
        </div>
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} size="large" />
          ))}
        </div>
      </section>
    </div>
  );
}

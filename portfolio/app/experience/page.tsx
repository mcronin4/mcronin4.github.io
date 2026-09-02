import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import { experiences } from '../../data/experience';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Work history for Michael Cronin: Exa, SaxeCap, Celestica, and Queen\'s University.',
};

export default function ExperiencePage() {
  return (
    <div>
      <PageHeader title="Work" />

      <section className="wrap">
        <ol>
          {experiences.map((exp) => (
            <li key={exp.id} className="rule grid gap-4 py-8 md:grid-cols-[11rem_1fr] md:gap-12">
              <div className="md:pt-1">
                <p className="eyebrow">
                  {exp.start} – {exp.end}
                </p>
                {exp.location && <p className="mt-1 text-sm text-muted">{exp.location}</p>}
                {exp.current && (
                  <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    Current
                  </p>
                )}
              </div>

              <div className="max-w-2xl">
                <h2 className="text-xl text-ink">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link inline-flex items-center gap-1 font-medium"
                    >
                      {exp.company}
                      <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden />
                    </a>
                  ) : (
                    <span className="font-medium">{exp.company}</span>
                  )}
                </h2>
                <p className="mt-0.5 text-ink-2">{exp.role}</p>
                <p className="body-copy mt-4">{exp.summary}</p>
                {exp.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-ink-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 leading-relaxed">
                        <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

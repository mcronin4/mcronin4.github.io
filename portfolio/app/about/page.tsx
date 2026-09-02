import type { Metadata } from 'next';
import PageHeader from '../../components/PageHeader';
import { personalInfo } from '../../data/personal';

export const metadata: Metadata = {
  title: 'About',
  description: personalInfo.bio,
};

export default function AboutPage() {
  const paragraphs = personalInfo.about
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div>
      <PageHeader title="About" />

      <section className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
        <div className="body-copy max-w-2xl text-[1.0625rem]">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? 'rise rise-2' : 'rise rise-3'}>
              {p}
            </p>
          ))}
        </div>
        <div className="rise rise-3">
          <div className="card-media aspect-[4/5] w-56 lg:w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/headshot.jpg" alt="Michael Cronin" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="wrap pt-16 sm:pt-24">
        {/* Education */}
        <div className="rule grid gap-4 pt-8 md:grid-cols-[11rem_1fr] md:gap-12">
          <p className="eyebrow md:pt-1">Education</p>
          <div className="max-w-2xl">
            <p className="text-ink">
              <span className="font-medium">{personalInfo.education.school}</span>
              <span className="text-muted"> · {personalInfo.education.years}</span>
            </p>
            <p className="mt-1 text-ink-2">{personalInfo.education.degree}</p>
            {personalInfo.education.notes.map((n) => (
              <p key={n} className="mt-1 text-sm text-muted">
                {n}
              </p>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="rule mt-8 grid gap-4 pt-8 md:grid-cols-[11rem_1fr] md:gap-12">
          <p className="eyebrow md:pt-1">Recognition</p>
          <dl className="grid max-w-2xl gap-x-10 gap-y-5 sm:grid-cols-2">
            {personalInfo.awards.map((a) => (
              <div key={a.title}>
                <dt className="text-ink">{a.title}</dt>
                <dd className="mt-0.5 text-sm leading-relaxed text-muted">{a.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Interests */}
      <section className="wrap pt-16 sm:pt-24">
        <p className="eyebrow mb-8">Outside of work</p>
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {personalInfo.interests.map((it) => (
            <li key={it.name}>
              <div className="card-media aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.image} alt={it.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-3 text-ink">{it.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-2">{it.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
